// Detect if a conversation contains a complete booking request
export interface BookingDetails {
  isComplete: boolean;
  serviceType?: string;
  petName?: string;
  petSpecies?: string;
  ownerName?: string;
  email?: string;
  phone?: string;
  preferredDate?: string;
  preferredTime?: string;
  location?: string; // clinic or home
  additionalNotes?: string;
}

export function detectBookingInConversation(messages: Array<{ role: string; content: string }>): BookingDetails {
  const bookingDetails: BookingDetails = {
    isComplete: false
  };

  console.log('[Booking Detection] Starting detection with', messages.length, 'messages');

  // Strategy: Extract from the assistant's structured bullet-point summary
  // Skip the welcome message by only looking at messages after the first user message
  const firstUserIndex = messages.findIndex(m => m.role === 'user');
  const relevantMessages = firstUserIndex >= 0 ? messages.slice(firstUserIndex) : messages;

  console.log('[Booking Detection] First user message at index:', firstUserIndex);
  console.log('[Booking Detection] Relevant messages count:', relevantMessages.length);

  const assistantMessages = relevantMessages
    .filter(m => m.role === 'assistant')
    .map(m => m.content)
    .join('\n');

  const userMessages = relevantMessages
    .filter(m => m.role === 'user')
    .map(m => m.content)
    .join('\n');

  // Extract from structured bullet points (- Pet: Buddy (dog) or - Owner: John Doe)
  // This format appears in the bot's confirmation messages

  // Pet Name and Species from bullet format: "- Pet: Buddy (9-year-old French Bulldog)" or "- Pet: Buddy (dog)"
  const petBulletMatch = assistantMessages.match(/[-•]\s*Pet:\s*([A-Za-z]+)\s*\(([^)]+)\)/i);
  console.log('[Booking Detection] Pet match result:', petBulletMatch);
  if (petBulletMatch) {
    bookingDetails.petName = petBulletMatch[1];
    const petInfo = petBulletMatch[2].toLowerCase();

    // Extract species from parentheses - could be "dog", "9-year-old French Bulldog", etc.
    if (petInfo.includes('dog') || petInfo.includes('bulldog') || petInfo.includes('retriever') || petInfo.includes('terrier')) {
      bookingDetails.petSpecies = 'dog';
    } else if (petInfo.includes('cat')) {
      bookingDetails.petSpecies = 'cat';
    }
    console.log('[Booking Detection] Extracted pet:', bookingDetails.petName, bookingDetails.petSpecies);
  }

  // Owner Name from bullet format: "- Owner: John Doe"
  const ownerBulletMatch = assistantMessages.match(/[-•]\s*Owner:\s*([A-Za-z\s]+?)(?:\n|$)/i);
  console.log('[Booking Detection] Owner match result:', ownerBulletMatch);
  if (ownerBulletMatch) {
    bookingDetails.ownerName = ownerBulletMatch[1].trim();
    console.log('[Booking Detection] Extracted owner:', bookingDetails.ownerName);
  }

  // Preferred Time from bullet format: "- Preferred time: Thursday at 2 PM"
  const timeBulletMatch = assistantMessages.match(/[-•]\s*Preferred time:\s*([A-Za-z]+)\s+at\s+(.+?)(?:\n|$)/i);
  console.log('[Booking Detection] Time match result:', timeBulletMatch);
  if (timeBulletMatch) {
    bookingDetails.preferredDate = timeBulletMatch[1].trim();
    bookingDetails.preferredTime = timeBulletMatch[2].trim();
    console.log('[Booking Detection] Extracted time:', bookingDetails.preferredDate, bookingDetails.preferredTime);
  }

  // Service from bullet format: "- Service: Veterinary home visit"
  const serviceBulletMatch = assistantMessages.match(/[-•]\s*Service:\s*([^\n]+)/i);
  console.log('[Booking Detection] Service match result:', serviceBulletMatch);
  if (serviceBulletMatch) {
    const serviceText = serviceBulletMatch[1].toLowerCase();
    if (serviceText.includes('veterinary') || serviceText.includes('vet')) {
      bookingDetails.serviceType = 'veterinary';
    } else if (serviceText.includes('grooming')) {
      bookingDetails.serviceType = 'grooming';
    } else if (serviceText.includes('sitting')) {
      bookingDetails.serviceType = 'pet sitting';
    } else if (serviceText.includes('daycare')) {
      bookingDetails.serviceType = 'daycare';
    } else if (serviceText.includes('boarding')) {
      bookingDetails.serviceType = 'boarding';
    } else if (serviceText.includes('passport') || serviceText.includes('travel')) {
      bookingDetails.serviceType = 'passport';
    }

    // Location from service text
    if (serviceText.includes('home visit')) {
      bookingDetails.location = 'home';
    } else if (serviceText.includes('clinic') || serviceText.includes('salon')) {
      bookingDetails.location = 'clinic';
    }
    console.log('[Booking Detection] Extracted service:', bookingDetails.serviceType, bookingDetails.location);
  }

  // Email and phone from user messages
  const emailMatch = userMessages.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i);
  console.log('[Booking Detection] Email match result:', emailMatch);
  if (emailMatch) {
    bookingDetails.email = emailMatch[0];
    console.log('[Booking Detection] Extracted email:', bookingDetails.email);
  }

  const phoneMatch = userMessages.match(/(?:\+45\s?)?[\d\s]{8,}/);
  console.log('[Booking Detection] Phone match result:', phoneMatch);
  if (phoneMatch) {
    bookingDetails.phone = phoneMatch[0].trim();
    console.log('[Booking Detection] Extracted phone:', bookingDetails.phone);
  }

  // Check if booking is complete (has minimum required info)
  bookingDetails.isComplete = !!(
    bookingDetails.serviceType &&
    (bookingDetails.email || bookingDetails.phone) &&
    (bookingDetails.ownerName || bookingDetails.petName)
  );

  console.log('[Booking Detection] Final result:', {
    isComplete: bookingDetails.isComplete,
    hasService: !!bookingDetails.serviceType,
    hasContact: !!(bookingDetails.email || bookingDetails.phone),
    hasName: !!(bookingDetails.ownerName || bookingDetails.petName)
  });

  return bookingDetails;
}

export function formatBookingEmail(
  details: BookingDetails,
  locale: string,
  conversationId: string,
  chatTranscript?: Array<{ role: string; content: string }>
): string {
  const title = locale === 'dk' ? '🐾 Ny Bookingforespørgsel fra Chatbot' : '🐾 New Booking Request from Chatbot';

  // Format chat transcript
  let transcriptHtml = '';
  if (chatTranscript && chatTranscript.length > 0) {
    const transcriptTitle = locale === 'dk' ? 'Fuld Samtale:' : 'Full Conversation:';
    transcriptHtml = `
<hr style="margin: 30px 0; border: none; border-top: 2px solid #e0e0e0;">
<h3>${transcriptTitle}</h3>
<div style="background: #f5f5f5; padding: 20px; border-radius: 8px; font-family: monospace; font-size: 13px;">
${chatTranscript.map(msg => {
  const roleLabel = msg.role === 'user'
    ? (locale === 'dk' ? '<strong>Kunde:</strong>' : '<strong>Customer:</strong>')
    : (locale === 'dk' ? '<strong>Chatbot:</strong>' : '<strong>Chatbot:</strong>');
  return `
  <div style="margin-bottom: 15px; padding: 10px; background: ${msg.role === 'user' ? '#e3f2fd' : '#fff'}; border-left: 3px solid ${msg.role === 'user' ? '#2196F3' : '#4CAF50'}; border-radius: 4px;">
    ${roleLabel}
    <div style="margin-top: 5px; white-space: pre-wrap;">${msg.content}</div>
  </div>`;
}).join('')}
</div>
    `;
  }

  return `
<h2>${title}</h2>

<p><strong>Conversation ID:</strong> ${conversationId}</p>

<h3>${locale === 'dk' ? 'Bookingdetaljer:' : 'Booking Details:'}</h3>
<ul>
  ${details.serviceType ? `<li><strong>${locale === 'dk' ? 'Service' : 'Service Type'}:</strong> ${details.serviceType}</li>` : ''}
  ${details.petName ? `<li><strong>${locale === 'dk' ? 'Kæledyrs navn' : 'Pet Name'}:</strong> ${details.petName}</li>` : ''}
  ${details.petSpecies ? `<li><strong>${locale === 'dk' ? 'Dyreart' : 'Pet Species'}:</strong> ${details.petSpecies}</li>` : ''}
  ${details.ownerName ? `<li><strong>${locale === 'dk' ? 'Ejers navn' : 'Owner Name'}:</strong> ${details.ownerName}</li>` : ''}
  ${details.email ? `<li><strong>Email:</strong> ${details.email}</li>` : ''}
  ${details.phone ? `<li><strong>${locale === 'dk' ? 'Telefon' : 'Phone'}:</strong> ${details.phone}</li>` : ''}
  ${details.preferredDate ? `<li><strong>${locale === 'dk' ? 'Foretrukken dato' : 'Preferred Date'}:</strong> ${details.preferredDate}</li>` : ''}
  ${details.preferredTime ? `<li><strong>${locale === 'dk' ? 'Foretrukket tidspunkt' : 'Preferred Time'}:</strong> ${details.preferredTime}</li>` : ''}
  ${details.location ? `<li><strong>${locale === 'dk' ? 'Placering' : 'Location'}:</strong> ${details.location}</li>` : ''}
</ul>

<p><em>${locale === 'dk' ? 'Venligst kontakt kunden for at bekræfte bookingen og give prisoplysninger.' : 'Please contact the customer to confirm the booking and provide pricing information.'}</em></p>

${transcriptHtml}
  `.trim();
}
