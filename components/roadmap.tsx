import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Launch & establish',
    body: 'Secure facility, deploy premium hardware, and validate the model on conservative automotive volume in Dubai.',
    active: true,
  },
  {
    phase: 'Phase 2',
    title: 'Scale B2B contracts',
    body: 'Leverage overhead capacity to sign recurring commercial and industrial maintenance contracts.',
    active: false,
  },
  {
    phase: 'Phase 3',
    title: 'Mobile & multi-bay',
    body: 'Expand into mobile on-site units and additional bays to serve EV fleets and regional facilities.',
    active: false,
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="relative isolate overflow-hidden">
      <img
        src="/images/industrial.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-background/80" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Growth Roadmap"
          title={<>A conservative base, a scalable future</>}
          description="Phase 1 is engineered so its spare capacity becomes the launchpad for higher-margin recurring revenue."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {phases.map((p, i) => (
            <Reveal key={p.phase} delay={i * 100}>
              <li
                className={`relative flex h-full flex-col rounded-2xl border p-6 backdrop-blur ${
                  p.active
                    ? 'border-primary/50 bg-primary/10 glow-ring'
                    : 'border-border/60 bg-card/50'
                }`}
              >
                <span
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    p.active ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {p.phase}
                  {p.active ? ' · Now' : ''}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
