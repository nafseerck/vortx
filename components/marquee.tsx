import { Snowflake } from 'lucide-react'

const items = [
  'Hypercars',
  'Motorcycles',
  'Classic restorations',
  'EV battery bays',
  'Superyachts',
  'Private aviation',
  'Injection molds',
  'Food production lines',
  'Electrical cabinets',
]

export function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="marquee-mask overflow-hidden border-y border-white/5 py-6" aria-hidden="true">
      <div className="marquee">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 pr-8 font-display text-2xl font-semibold uppercase tracking-tight text-white/25 sm:text-4xl"
          >
            {item}
            <Snowflake className="size-5 text-primary/60 sm:size-7" />
          </span>
        ))}
      </div>
    </div>
  )
}
