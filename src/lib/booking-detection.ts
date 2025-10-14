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

  const bookingDetails: BookingDetails = {
    isComplete: false
  };

  // Detect service type
  const services = ['veterinary', 'vet', 'grooming', 'sitting', 'pet sitting', 'daycare', 'boarding', 'passport', 'travel'];
  for (const service of services) {
    if (fullConversation.includes(service)) {
      bookingDetails.serviceType = service;
      break;
    }
  }

  // Detect pet name (look for common patterns)
  const petNameMatch = fullConversation.match(/(?:pet(?:'s)? name is|his\/her name is|called|named)\s+([a-z]+)/i);
  if (petNameMatch) {
    bookingDetails.petName = petNameMatch[1];
  }

  // Detect pet species
  if (fullConversation.includes('dog')) bookingDetails.petSpecies = 'dog';
  if (fullConversation.includes('cat')) bookingDetails.petSpecies = 'cat';

  // Detect owner name
  const ownerNameMatch = fullConversation.match(/(?:my name is|i'm|i am)\s+([a-z\s]+)(?:\.|,|$)/i);
  if (ownerNameMatch) {
    bookingDetails.ownerName = ownerNameMatch[1].trim();
  }

  // Detect email
  const emailMatch = fullConversation.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i);
  if (emailMatch) {
    bookingDetails.email = emailMatch[0];
  }

  // Detect phone
  const phoneMatch = fullConversation.match(/(?:\+45\s?)?[\d\s]{8,}/);
  if (phoneMatch) {
    bookingDetails.phone = phoneMatch[0].trim();
  }

  // Detect date
  const datePatterns = [
    /(?:on|for)\s+(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/i,
    /(?:on|for)\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/i,
    /(?:on|for)\s+(tomorrow|next week|this week)/i
  ];
  for (const pattern of datePatterns) {
    const match = fullConversation.match(pattern);
    if (match) {
      bookingDetails.preferredDate = match[1];
      break;
    }
  }

  // Detect time
  const timeMatch = fullConversation.match(/(?:at|around)\s+(\d{1,2}(?::\d{2})?\s*(?:am|pm)?)/i);
  if (timeMatch) {
    bookingDetails.preferredTime = timeMatch[1];
  }

  // Detect location preference
  if (fullConversation.includes('home visit') || fullConversation.includes('at home')) {
    bookingDetails.location = 'home';
  } else if (fullConversation.includes('clinic') || fullConversation.includes('come in')) {
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
