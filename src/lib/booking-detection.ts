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

  // Strategy: Extract from the assistant's confirmation/summary message
  // The bot already correctly parsed everything, so we extract from its structured output
  const assistantMessages = messages
    .filter(m => m.role === 'assistant')
    .map(m => m.content)
    .join('\n');

  const userMessages = messages
    .filter(m => m.role === 'user')
    .map(m => m.content)
    .join('\n');

  // Extract from assistant's structured summary (most reliable)
  // Look for patterns like "- Dog's Name: Buddy" or "- Contact: John Doe"

  // Pet Name from assistant summary
  const petNameAssistant = assistantMessages.match(/(?:pet(?:'s)? name|dog(?:'s)? name|cat(?:'s)? name)[:\s]+([A-Za-z]+)/i);
  if (petNameAssistant) {
    bookingDetails.petName = petNameAssistant[1];
  }

  // Owner Name from assistant summary
  const ownerNameAssistant = assistantMessages.match(/(?:contact|owner|name)[:\s]+([A-Za-z\s]+?)(?:\n|- |Email|Phone|$)/i);
  if (ownerNameAssistant) {
    bookingDetails.ownerName = ownerNameAssistant[1].trim();
  }

  // Date from assistant summary
  const dateAssistant = assistantMessages.match(/(?:date)[:\s]+([A-Za-z0-9\s,]+?)(?:\n|- |$)/i);
  if (dateAssistant) {
    bookingDetails.preferredDate = dateAssistant[1].trim();
  }

  // Time from assistant summary
  const timeAssistant = assistantMessages.match(/(?:time|at)[:\s]+(\d{1,2}:\d{2}\s*(?:AM|PM)?|\d{1,2}\s*(?:AM|PM))/i);
  if (timeAssistant) {
    bookingDetails.preferredTime = timeAssistant[1].trim();
  }

  // Service type
  const services = ['veterinary', 'vet', 'grooming', 'sitting', 'pet sitting', 'daycare', 'boarding', 'passport', 'travel'];
  for (const service of services) {
    if (assistantMessages.toLowerCase().includes(service)) {
      bookingDetails.serviceType = service;
      break;
    }
  }

  // Pet species
  if (assistantMessages.toLowerCase().includes('dog')) bookingDetails.petSpecies = 'dog';
  if (assistantMessages.toLowerCase().includes('cat')) bookingDetails.petSpecies = 'cat';

  // Location preference
  if (assistantMessages.toLowerCase().includes('home visit')) {
    bookingDetails.location = 'home';
  } else if (assistantMessages.toLowerCase().includes('clinic') || assistantMessages.toLowerCase().includes('salon')) {
    bookingDetails.location = 'clinic';
  }

  // Email and phone - always extract from user messages as they're most reliable there
  const emailMatch = userMessages.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i);
  if (emailMatch) {
    bookingDetails.email = emailMatch[0];
  }

  const phoneMatch = userMessages.match(/(?:\+45\s?)?[\d\s]{8,}/);
  if (phoneMatch) {
    bookingDetails.phone = phoneMatch[0].trim();
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
