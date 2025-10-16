# Price Discrepancies Report

## 🚨 CRITICAL PRICE ERRORS FOUND

### 1. EUTHANASIA PRICES - MAJOR DISCREPANCIES

**Current (INCORRECT):**
```
Euthanasia (Small-Medium Dog, Home): 5958 DKK ❌
Euthanasia (Medium-Large Dog, Home): 5103 DKK ❌
Euthanasia (Small-Medium Dog, At Clinic): 3834 DKK ❌
Euthanasia (Medium-Large Dog, At Clinic): 2979 DKK ❌
Private Cremation (Pet Pick-Up): 4212 DKK
Private Cremation (Clinic Pick-Up): 3425 DKK
```

**Checkfront (CORRECT):**
```
AT CLINIC:
- Euthanasia Cat (Clinic): 1,225 kr ✅
- Euthanasia Dog (Under 9 kg) (Clinic): 1,225 kr ✅
- Euthanasia Dog (9-25 kg) (Clinic): 1,400 kr ✅
- Euthanasia Dog (25-50 kg) (Clinic): 1,900 kr ✅
- Euthanasia Dog (Above 50kg) (Clinic): 2,100 kr ✅

AT HOME:
- Euthanasia Cat (Home): 2,284 kr ✅
- Euthanasia Dog (9-25 kg) (Home): 2,284 kr ✅
- Euthanasia Dog (25-50 kg) (Home): 2,764 kr ✅
- Euthanasia Dog (Above 50kg) (Home): 2,984 kr ✅
```

**Issue:** Website prices are roughly 2x higher than Checkfront! This is a CRITICAL error.

---

### 2. MISSING SERVICE

**Missing:** Pet Health Check (Clinic): 800 kr

**Current:** Only has "Pet Health Check (Home): 1684 DKK" and "Pet Health Check (Rabies): 1065 DKK"

**Action:** Add Pet Health Check (Clinic): 800 DKK to vaccines section

---

### 3. CREMATION PRICES - NEED VERIFICATION

**Current:**
- Private Cremation (Pet Pick-Up): 4212 DKK
- Private Cremation (Clinic Pick-Up): 3425 DKK

**Checkfront:**
- Veterinary Holding for Cremation: 50 kr
- Veterinary Holding for Cremation plus Pick-up: 1,864 kr

**Note:** These appear to be different services. Need clarification.

---

## ✅ VERIFIED CORRECT PRICES

1. **Consultations:** All correct ✅
2. **Chemical Castration:** All correct ✅
3. **Pet Passport:** All correct ✅
4. **Medication Prescription:** Correct (147 DKK) ✅
5. **Pet Health Check (Home):** Correct (1,684 DKK) ✅
6. **Pet Health Check (Rabies):** Correct (1,065 DKK) ✅

---

## 📋 PRIORITY FIX LIST

### HIGH PRIORITY (Incorrect Prices):
1. ✅ Euthanasia prices - Replace all 6 prices with correct Checkfront values
2. ✅ Add Pet Health Check (Clinic): 800 DKK

### MEDIUM PRIORITY (Need Clarification):
3. ⚠️ Cremation prices - Verify if these are correct or should match Checkfront

---

## 🔧 FIXES REQUIRED

**File:** messages/en.json
**Section:** services.veterinary.features.items.emergency.prices

**Change:**
```json
OLD (WRONG):
"0": "Euthanasia (Small-Medium Dog, Home): 5958 DKK",
"1": "Euthanasia (Medium-Large Dog, Home): 5103 DKK",
"2": "Euthanasia (Small-Medium Dog, At Clinic): 3834 DKK",
"3": "Euthanasia (Medium-Large Dog, At Clinic): 2979 DKK",

NEW (CORRECT):
"0": "Euthanasia Cat (Clinic): 1,225 DKK",
"1": "Euthanasia Dog (Under 9 kg) (Clinic): 1,225 DKK",
"2": "Euthanasia Dog (9-25 kg) (Clinic): 1,400 DKK",
"3": "Euthanasia Dog (25-50 kg) (Clinic): 1,900 DKK",
"4": "Euthanasia Dog (Above 50kg) (Clinic): 2,100 DKK",
"5": "Euthanasia Cat (Home): 2,284 DKK",
"6": "Euthanasia Dog (9-25 kg) (Home): 2,284 DKK",
"7": "Euthanasia Dog (25-50 kg) (Home): 2,764 DKK",
"8": "Euthanasia Dog (Above 50kg) (Home): 2,984 DKK"
```

**Also add to vaccines section:**
```json
"6": "Pet Health Check (Clinic): 800 DKK"
```

---

**Generated:** 2025-10-15
**Status:** Ready for correction
