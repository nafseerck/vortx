import { Gauge, Zap, Warehouse } from 'lucide-react'

export interface CapexItem {
  icon: typeof Gauge
  name: string
  desc: string
  costAmount: number
  costFormatted: string
}

export const CAPEX_DATA = {
  items: [
    {
      icon: Gauge,
      name: 'Atlas Copco GA22VSDFF',
      desc: '22 kW VSD compressor with integrated dryer & filter, ensuring continuous dry-air supply.',
      costAmount: 43050,
    },
    {
      icon: Zap,
      name: 'CMW ATX25E v2 Blasting Unit',
      desc: 'Heavy-duty precision blasting machine — the operational core of every job.',
      costAmount: 40400,
    },
    {
      icon: Warehouse,
      name: 'Facility setup',
      desc: 'Warehouse retrofit: 3-phase electrical upgrades, soundproofing, and deposit.',
      costAmount: 85000,
    },
  ],
  workingCapitalBuffer: 31550, // Padds total investment to rounded ~200k
}

export const FINANCIAL_OPERATIONS_DATA = {
  avgTicketPrice: 1500,
  targetJobsPerMonth: 30,
  cappedMonthlyOpex: 27500,
  fixedLeaseCap: 5000,
}

// Automated Financial Calculations
export function getFinancialModel() {
  const itemizedCapexTotal = CAPEX_DATA.items.reduce((acc, item) => acc + item.costAmount, 0)
  const totalCapexWithBuffer = itemizedCapexTotal + CAPEX_DATA.workingCapitalBuffer
  const roundedCapexDisplay = Math.round(totalCapexWithBuffer / 50000) * 50000 // ~200,000

  const monthlyTargetRevenue = FINANCIAL_OPERATIONS_DATA.avgTicketPrice * FINANCIAL_OPERATIONS_DATA.targetJobsPerMonth
  const monthlyNetProfit = monthlyTargetRevenue - FINANCIAL_OPERATIONS_DATA.cappedMonthlyOpex
  const operatingProfitMargin = ((monthlyNetProfit / monthlyTargetRevenue) * 100).toFixed(1)

  // Breakeven calculations (in months)
  const breakevenExactMonths = itemizedCapexTotal / monthlyNetProfit
  const breakevenBufferedMonths = totalCapexWithBuffer / monthlyNetProfit

  const breakevenLow = Math.floor(breakevenExactMonths)
  const breakevenHigh = Math.ceil(breakevenExactMonths)
  const breakevenHorizon = `${breakevenLow} – ${breakevenHigh} months`

  return {
    itemizedCapexTotal,
    totalCapexWithBuffer,
    roundedCapexDisplay,
    monthlyTargetRevenue,
    monthlyNetProfit,
    operatingProfitMargin,
    breakevenExactMonths,
    breakevenBufferedMonths,
    breakevenHorizon,
  }
}
