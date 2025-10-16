# Website Standardization Audit

## 1. CTA Button Text Standardization

### Current State (Inconsistent):
- "Book Veterinary Appointment"
- "Book Grooming Appointment"
- "Book Pet Care Service"
- "Book Consultation"
- "Learn More"
- "Request Service"
- "Get Travel Ready"
- "Manage Prescriptions"
- "Discuss Options"
- "Inquire Now" ✓ (already correct)
- "View Plans"
- "Get Pet Passport"
- "Get a Quote"
- "Book Full Grooming"
- "Book Bath Service"
- "Schedule Haircut"
- "Book Nail Care"
- "Book Spa Treatment"
- "Book Dental Care"
- "Book Visits"
- "Book Overnight"
- "Book Boarding"
- "Schedule Walks"
- "Medication Care"
- "Book Daycare"
- "Request Quote"
- "Book Daycare Now"
- "Book Passport Appointment"
- "Book Appointment"

### Target: "Inquire now" (consistent across all services)

## 2. Location References

### Current State:
- "in Copenhagen" (used in descriptions)
- "Copenhagen" (used in titles)
- Inconsistent usage across 48+ locations

### Target: Use "Copenhagen" consistently (remove "in Copenhagen" where redundant)

## 3. Year Wording
- Search for "yr" abbreviations
- Replace all with "year" (spelled out)

## 4. Button Colors
- Primary CTAs should use: `bg-gradient-to-r from-[#22c0b6] to-[#1d6896]`
- Hover state: `hover:opacity-90`
- All buttons should be consistent

## 5. Service Card Comparative Text
- Line 418: "Dog grooming: 750-1950 DKK, Cat grooming: 1500-1700 DKK (based on size)"
- Line 467: "Dogs: 750-2400 DKK, Cats: 1000-1200 DKK based on size and coat type"
- Need to add consistent qualifiers

## 6. Unknown Labels to Verify
- "Grant Abov Appn" - NOT FOUND (may have been removed)
- "Pet Health Check (Rabies)" - FOUND, appears correct

## Actions Required:
1. ✅ Standardize all CTA text to "Inquire now"
2. ✅ Standardize location to "Copenhagen"
3. ✅ Replace "yr" with "year"
4. ✅ Verify button colors in components
5. ✅ Add qualifiers to service cards
6. ⏳ Await Checkfront pricing to correct all prices
