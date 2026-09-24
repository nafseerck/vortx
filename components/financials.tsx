import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { getFinancialModel, FINANCIAL_OPERATIONS_DATA } from '@/lib/financials'

export function Financials() {
  const model = getFinancialModel()

  const stats = [
    { value: `AED ${(FINANCIAL_OPERATIONS_DATA.avgTicketPrice / 1000).toFixed(1)}k`, label: 'Avg. ticket price' },
    { value: `${FINANCIAL_OPERATIONS_DATA.targetJobsPerMonth}`, label: 'Target jobs / month' },
    { value: `AED ${(model.monthlyTargetRevenue / 1000).toFixed(0)}k`, label: 'Monthly target revenue' },
  ]

  const rows = [
    {
      metric: 'Target volume',
      figure: `${FINANCIAL_OPERATIONS_DATA.targetJobsPerMonth} jobs / month`,
      insight:
        'Highly conservative baseline (≈ 1 job/day). Leaves massive overhead capacity for Phase 2 scaling.',
    },
    {
      metric: 'Capped OPEX',
      figure: `AED ${FINANCIAL_OPERATIONS_DATA.cappedMonthlyOpex.toLocaleString()} / month`,
      insight:
        `Lean operations prioritizing fixed costs: warehouse lease & utilities strictly capped at AED ${FINANCIAL_OPERATIONS_DATA.fixedLeaseCap.toLocaleString()} in industrial zones.`,
    },
    {
      metric: 'Net profit (monthly)',
      figure: `AED ${model.monthlyNetProfit.toLocaleString()} / month`,
      insight: `Yields an exceptionally strong ~${model.operatingProfitMargin}% operating profit margin.`,
    },
    {
      metric: 'Breakeven horizon',
      figure: model.breakevenHorizon,
      insight:
        'Rapid payback driven by high margins and low capital risk (assets hold strong resale value).',
    },
  ]

  return (
    <section id="financials" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Financial Projections"
        title={<>Lean capital, rapid returns</>}
        description="Our model is built on lean initial capital expenditure and tightly controlled operational overhead, ensuring a rapid path to profitability on conservative volume estimates."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card to-card/40 p-6">
              <div
                className="absolute -right-6 -top-6 size-24 rounded-full bg-primary/15 blur-2xl"
                aria-hidden="true"
              />
              <div className="font-display text-4xl font-bold text-gradient-ice sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-10">
        <div className="overflow-hidden rounded-2xl border border-border/60">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
                <th scope="col" className="px-5 py-4 font-semibold">Metric</th>
                <th scope="col" className="px-5 py-4 font-semibold">Target</th>
                <th scope="col" className="hidden px-5 py-4 font-semibold md:table-cell">
                  Strategic insight
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.metric}
                  className="border-t border-border/50 transition-colors hover:bg-card/60"
                >
                  <th scope="row" className="px-5 py-4 font-semibold text-foreground">
                    {r.metric}
                  </th>
                  <td className="px-5 py-4 font-medium text-primary">{r.figure}</td>
                  <td className="px-5 py-4 text-muted-foreground">
                    <span className="md:hidden font-medium text-foreground">Insight: </span>
                    {r.insight}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  )
}
