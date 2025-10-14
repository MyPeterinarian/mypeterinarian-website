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
  const fullConversation = messages.map(m => m.content).join('\n').toLowerCase();

  // Only search USER messages for personal information (owner name, email, phone)
  const userMessages = messages
    .filter(m => m.role === 'user')
    .map(m => m.content)
    .join('\n')
    .toLowerCase();

  const bookingDetails: BookingDetails = {
    isComplete: false
  };

  // Detect service type (search all messages)
  const services = ['veterinary', 'vet', 'grooming', 'sitting', 'pet sitting', 'daycare', 'boarding', 'passport', 'travel'];
  for (const service of services) {
    if (fullConversation.includes(service)) {
      bookingDetails.serviceType = service;
      break;
    }
  }

  // Detect pet name (search user messages only)
  const petNameMatch = userMessages.match(/(?:pet(?:'s)? name is|his\/her name is|called|named|name:?)\s+([a-z]+)/i);
  if (petNameMatch) {
    bookingDetails.petName = petNameMatch[1];
  }

  // Detect pet species (search all messages)
  if (fullConversation.includes('dog')) bookingDetails.petSpecies = 'dog';
  if (fullConversation.includes('cat')) bookingDetails.petSpecies = 'cat';

  // Detect owner name (search user messages only, with better patterns)
  const ownerNamePatterns = [
    /(?:my name is|i'm|i am|name:?)\s+([a-z\s]{3,30})(?:\s*[,.]|\s+\d|\s+email|\s+phone|$)/i,
    /\d\.\s*([a-z\s]{3,30}),\s*(?:\+?\d|email)/i  // Pattern like "4. tarek abu sham, 28..."
  ];

  for (const pattern of ownerNamePatterns) {
    const match = userMessages.match(pattern);
    if (match) {
      bookingDetails.ownerName = match[1].trim();
      break;
    }
  }

  // Detect email (search user messages only)
  const emailMatch = userMessages.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i);
  if (emailMatch) {
    bookingDetails.email = emailMatch[0];
  }

  // Detect phone (search user messages only)
  const phoneMatch = userMessages.match(/(?:\+45\s?)?[\d\s]{8,}/);
  if (phoneMatch) {
    bookingDetails.phone = phoneMatch[0].trim();
  }

  // Detect date (search all messages)
  const datePatterns = [
    /(?:on|for)\s+(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/i,
    /(?:on|for)\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/i,
    /(?:on|for)\s+(tomorrow|next week|this week)/i,
    /(?:oct|nov|dec|jan|feb|mar|apr|may|jun|jul|aug|sep)\s+\d{1,2}/i  // Month + day pattern
  ];
  for (const pattern of datePatterns) {
    const match = fullConversation.match(pattern);
    if (match) {
      bookingDetails.preferredDate = match[0];
      break;
    }
  }

  // Detect time (search all messages)
  const timeMatch = fullConversation.match(/(?:at|around|time:?)\s+(\d{1,2}(?::\d{2})?\s*(?:am|pm)?)|(\d{1,2}[-:]\d{1,2})/i);
  if (timeMatch) {
    bookingDetails.preferredTime = timeMatch[1] || timeMatch[2];
  }

  // Detect location preference (search all messages)
  if (fullConversation.includes('home visit') || fullConversation.includes('at home') || fullConversation.includes('homde')) {
    bookingDetails.location = 'home';
  } else if (fullConversation.includes('clinic') || fullConversation.includes('come in') || fullConversation.includes('salon')) {
    bookingDetails.location = 'clinic';
  }

  // Check if booking is complete (has minimum required info)
  bookingDetails.isComplete = !!(
    bookingDetails.serviceType &&
    (bookingDetails.email || bookingDetails.phone) &&
    (bookingDetails.ownerName || bookingDetails.petName)
  );

  return bookingDetails;
}

export function formatBookingEmail(details: BookingDetails, locale: string, conversationId: string): string {
  const title = locale === 'dk' ? '🐾 Ny Bookingforespørgsel fra Chatbot' : '🐾 New Booking Request from Chatbot';

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
  `.trim();
}
