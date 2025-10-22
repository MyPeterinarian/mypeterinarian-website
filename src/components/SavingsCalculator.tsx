'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Calculator, TrendingDown, HelpCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface CalculatorInputs {
  vetVisits: number
  vaccines: number
  parasiteTreatments: number
  nailClipping: number
  virtualConsultations: number
  daycareVisits: number
}

interface TierResult {
  name: string
  monthlyCost: number
  annualCost: number
  savings: number
  savingsPercent: number
}

interface SavingsCalculatorProps {
  selectedWeightCategory: string
}

// Standard pricing without subscription
const SERVICE_PRICES = {
  vetVisit: 60,
  vaccine: 45,
  parasiteTreatment: 35,
  nailClipping: 25,
  virtualConsultation: 30,
  daycare: 40
}

export default function SavingsCalculator({ selectedWeightCategory }: SavingsCalculatorProps) {
  const t = useTranslations('subscriptions')
  const [inputs, setInputs] = useState<CalculatorInputs>({
    vetVisits: 0,
    vaccines: 0,
    parasiteTreatments: 0,
    nailClipping: 0,
    virtualConsultations: 0,
    daycareVisits: 0
  })
  const [showResults, setShowResults] = useState(false)

  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    const numValue = parseInt(value) || 0
    setInputs(prev => ({ ...prev, [field]: Math.max(0, numValue) }))
    setShowResults(false)
  }

  const resetCalculator = () => {
    setInputs({
      vetVisits: 0,
      vaccines: 0,
      parasiteTreatments: 0,
      nailClipping: 0,
      virtualConsultations: 0,
      daycareVisits: 0
    })
    setShowResults(false)
  }

  // Get subscription pricing based on weight category
  const getSubscriptionPrice = (tier: string): number => {
    const pricing: Record<string, Record<string, number>> = {
      'essential': {
        'under_4_9kg': 299,
        '5_9_9kg': 310,
        '10_24_9kg': 329,
        '25_39_9kg': 354,
        'over_40kg': 390
      },
      'advanced': {
        'under_4_9kg': 440,
        '5_9_9kg': 450,
        '10_24_9kg': 467,
        '25_39_9kg': 494,
        'over_40kg': 530
      },
      'professional': {
        'under_4_9kg': 648,
        '5_9_9kg': 658,
        '10_24_9kg': 680,
        '25_39_9kg': 705,
        'over_40kg': 740
      }
    }
    return pricing[tier]?.[selectedWeightCategory] || 0
  }

  const calculateCosts = () => {
    // Calculate cost without subscription (pay-as-you-go)
    const withoutSubscription =
      (inputs.vetVisits * SERVICE_PRICES.vetVisit) +
      (inputs.vaccines * SERVICE_PRICES.vaccine) +
      (inputs.parasiteTreatments * SERVICE_PRICES.parasiteTreatment) +
      (inputs.nailClipping * SERVICE_PRICES.nailClipping) +
      (inputs.virtualConsultations * SERVICE_PRICES.virtualConsultation) +
      (inputs.daycareVisits * SERVICE_PRICES.daycare)

    // Calculate costs with each tier
    const tiers: TierResult[] = []

    // Essential Tier
    const essentialMonthlyCost = getSubscriptionPrice('essential')
    const essentialAnnualCost = essentialMonthlyCost * 12
    const essentialOutOfPocket =
      (Math.max(0, inputs.vetVisits - 2) * SERVICE_PRICES.vetVisit) + // 2 included
      (inputs.vaccines * SERVICE_PRICES.vaccine * 0.9) + // 10% discount
      (inputs.parasiteTreatments * SERVICE_PRICES.parasiteTreatment * 0.5) + // 50% discount
      (inputs.nailClipping * SERVICE_PRICES.nailClipping * 0.8) + // 20% discount
      (inputs.virtualConsultations * SERVICE_PRICES.virtualConsultation) + // No discount
      (inputs.daycareVisits * SERVICE_PRICES.daycare) // No discount
    const essentialTotal = essentialAnnualCost + essentialOutOfPocket

    tiers.push({
      name: 'essential',
      monthlyCost: essentialMonthlyCost,
      annualCost: essentialTotal,
      savings: withoutSubscription - essentialTotal,
      savingsPercent: ((withoutSubscription - essentialTotal) / withoutSubscription) * 100
    })

    // Advanced Tier
    const advancedMonthlyCost = getSubscriptionPrice('advanced')
    const advancedAnnualCost = advancedMonthlyCost * 12
    const advancedOutOfPocket =
      (Math.max(0, inputs.vetVisits - 3) * SERVICE_PRICES.vetVisit) + // 3 included
      (inputs.vaccines * SERVICE_PRICES.vaccine * 0.8) + // 20% discount
      (Math.max(0, inputs.parasiteTreatments) * 0) + // All included
      (Math.max(0, inputs.nailClipping - 1) * SERVICE_PRICES.nailClipping * 0.8) + // 1 included, 20% on rest
      (Math.max(0, inputs.virtualConsultations - 2) * SERVICE_PRICES.virtualConsultation) + // 2 included
      (Math.max(0, inputs.daycareVisits - 1) * SERVICE_PRICES.daycare * 0.8) // 1 included, 20% on rest
    const advancedTotal = advancedAnnualCost + advancedOutOfPocket

    tiers.push({
      name: 'advanced',
      monthlyCost: advancedMonthlyCost,
      annualCost: advancedTotal,
      savings: withoutSubscription - advancedTotal,
      savingsPercent: ((withoutSubscription - advancedTotal) / withoutSubscription) * 100
    })

    // Professional Tier
    const professionalMonthlyCost = getSubscriptionPrice('professional')
    const professionalAnnualCost = professionalMonthlyCost * 12
    const professionalOutOfPocket =
      (Math.max(0, inputs.vetVisits - 4) * SERVICE_PRICES.vetVisit) + // 4 included
      (inputs.vaccines * SERVICE_PRICES.vaccine * 0.7) + // 30% discount
      (Math.max(0, inputs.parasiteTreatments) * 0) + // All included
      (Math.max(0, inputs.nailClipping - 2) * SERVICE_PRICES.nailClipping * 0.7) + // 2 included, 30% on rest
      (Math.max(0, inputs.virtualConsultations - 4) * SERVICE_PRICES.virtualConsultation) + // 4 included
      (Math.max(0, inputs.daycareVisits - 2) * SERVICE_PRICES.daycare * 0.7) // 2 included, 30% on rest
    const professionalTotal = professionalAnnualCost + professionalOutOfPocket

    tiers.push({
      name: 'professional',
      monthlyCost: professionalMonthlyCost,
      annualCost: professionalTotal,
      savings: withoutSubscription - professionalTotal,
      savingsPercent: ((withoutSubscription - professionalTotal) / withoutSubscription) * 100
    })

    return {
      withoutSubscription,
      tiers,
      recommendedTier: tiers.reduce((best, tier) =>
        tier.savings > best.savings ? tier : best
      )
    }
  }

  const handleCalculate = () => {
    setShowResults(true)
  }

  const results = showResults ? calculateCosts() : null

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-4">
            <Calculator className="w-5 h-5" />
            <span className="font-semibold">{t('savingsCalculator.title')}</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('savingsCalculator.description')}
          </p>
        </div>

        {/* Input Form */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Vet Visits */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <label className="font-medium text-gray-900">
                {t('savingsCalculator.inputs.vetVisits.label')}
              </label>
              <div className="group relative">
                <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
                <div className="absolute right-0 top-6 w-64 bg-gray-900 text-white text-xs rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  {t('savingsCalculator.inputs.vetVisits.tooltip')}
                </div>
              </div>
            </div>
            <input
              type="number"
              min="0"
              value={inputs.vetVisits || ''}
              onChange={(e) => handleInputChange('vetVisits', e.target.value)}
              placeholder={t('savingsCalculator.inputs.vetVisits.placeholder')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Vaccines */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <label className="font-medium text-gray-900">
                {t('savingsCalculator.inputs.vaccines.label')}
              </label>
              <div className="group relative">
                <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
                <div className="absolute right-0 top-6 w-64 bg-gray-900 text-white text-xs rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  {t('savingsCalculator.inputs.vaccines.tooltip')}
                </div>
              </div>
            </div>
            <input
              type="number"
              min="0"
              value={inputs.vaccines || ''}
              onChange={(e) => handleInputChange('vaccines', e.target.value)}
              placeholder={t('savingsCalculator.inputs.vaccines.placeholder')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Parasite Treatments */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <label className="font-medium text-gray-900">
                {t('savingsCalculator.inputs.parasiteTreatments.label')}
              </label>
              <div className="group relative">
                <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
                <div className="absolute right-0 top-6 w-64 bg-gray-900 text-white text-xs rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  {t('savingsCalculator.inputs.parasiteTreatments.tooltip')}
                </div>
              </div>
            </div>
            <input
              type="number"
              min="0"
              value={inputs.parasiteTreatments || ''}
              onChange={(e) => handleInputChange('parasiteTreatments', e.target.value)}
              placeholder={t('savingsCalculator.inputs.parasiteTreatments.placeholder')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Nail Clipping */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <label className="font-medium text-gray-900">
                {t('savingsCalculator.inputs.nailClipping.label')}
              </label>
              <div className="group relative">
                <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
                <div className="absolute right-0 top-6 w-64 bg-gray-900 text-white text-xs rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  {t('savingsCalculator.inputs.nailClipping.tooltip')}
                </div>
              </div>
            </div>
            <input
              type="number"
              min="0"
              value={inputs.nailClipping || ''}
              onChange={(e) => handleInputChange('nailClipping', e.target.value)}
              placeholder={t('savingsCalculator.inputs.nailClipping.placeholder')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Virtual Consultations */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <label className="font-medium text-gray-900">
                {t('savingsCalculator.inputs.virtualConsultations.label')}
              </label>
              <div className="group relative">
                <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
                <div className="absolute right-0 top-6 w-64 bg-gray-900 text-white text-xs rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  {t('savingsCalculator.inputs.virtualConsultations.tooltip')}
                </div>
              </div>
            </div>
            <input
              type="number"
              min="0"
              value={inputs.virtualConsultations || ''}
              onChange={(e) => handleInputChange('virtualConsultations', e.target.value)}
              placeholder={t('savingsCalculator.inputs.virtualConsultations.placeholder')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Daycare Visits */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <label className="font-medium text-gray-900">
                {t('savingsCalculator.inputs.daycareVisits.label')}
              </label>
              <div className="group relative">
                <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" />
                <div className="absolute right-0 top-6 w-64 bg-gray-900 text-white text-xs rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  {t('savingsCalculator.inputs.daycareVisits.tooltip')}
                </div>
              </div>
            </div>
            <input
              type="number"
              min="0"
              value={inputs.daycareVisits || ''}
              onChange={(e) => handleInputChange('daycareVisits', e.target.value)}
              placeholder={t('savingsCalculator.inputs.daycareVisits.placeholder')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={handleCalculate}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            {t('savingsCalculator.calculate')}
          </button>
          <button
            onClick={resetCalculator}
            className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            {t('savingsCalculator.reset')}
          </button>
        </div>

        {/* Results */}
        <AnimatePresence>
          {showResults && results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {t('savingsCalculator.results.title')}
              </h3>

              {/* Without Subscription */}
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">
                    {t('savingsCalculator.results.withoutSubscription')}
                  </span>
                  <span className="text-2xl font-bold text-gray-900">
                    €{results.withoutSubscription.toFixed(0)}
                  </span>
                </div>
              </div>

              {/* Tier Results */}
              <div className="space-y-4">
                {results.tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`rounded-lg p-6 border-2 ${
                      tier.name === results.recommendedTier.name
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          {t(`tiers.${tier.name}.name`)}
                        </h4>
                        {tier.name === results.recommendedTier.name && (
                          <span className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold mt-1">
                            <TrendingDown className="w-4 h-4" />
                            {t('savingsCalculator.results.bestValue')}
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">
                          {t('savingsCalculator.results.monthlyCost')}
                        </div>
                        <div className="text-xl font-bold text-gray-900">
                          €{tier.monthlyCost}/{t('tiers.perMonth')}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">
                          Total Annual Cost
                        </div>
                        <div className="text-lg font-semibold text-gray-900">
                          €{tier.annualCost.toFixed(0)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">
                          {t('savingsCalculator.results.annualSavings')}
                        </div>
                        <div className={`text-lg font-semibold ${
                          tier.savings > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {tier.savings > 0 ? '+' : ''}€{tier.savings.toFixed(0)}
                          {tier.savings > 0 && (
                            <span className="text-sm ml-1">
                              ({tier.savingsPercent.toFixed(0)}%)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {tier.name === results.recommendedTier.name && (
                      <p className="mt-4 text-sm text-gray-600 italic">
                        {t(`savingsCalculator.tierRecommendations.${tier.name}`)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
