'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, Sparkles, TrendingUp, ShieldCheck, Droplets, MapPin, ArrowRight } from 'lucide-react'
import { VaporParticles } from '@/components/vapor-particles'

export function IntroVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime
      const total = videoRef.current.duration
      if (total > 0) {
        setProgress((current / total) * 100)
      }
    }
  }

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-background text-foreground flex flex-col justify-between pt-24 pb-12">
      {/* Background Lighting & FX */}
      <VaporParticles />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/80 to-background" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header Badge */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-950/40">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-cyan-500" />
            </span>
            <MapPin className="size-3.5 text-cyan-400" aria-hidden="true" />
            BLASTX Dubai, UAE
            <span className="text-white/20">|</span>
            Official Video Showcase
          </div>

          {/* <h1 className="mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-none sm:text-6xl md:text-7xl">
            <span className="text-gradient-ice drop-shadow-[0_0_35px_rgba(34,211,238,0.35)]">BLASTX</span>{' '}
            <span className="text-foreground">Dry Ice Sublimation</span>
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            Experience next-generation precision eco-cleaning. Zero water, zero chemicals, non-abrasive CO<sub>2</sub> engineering.
          </p> */}
        </div>

        {/* Video Player Card */}
        <div className="relative mt-6 sm:mt-8 overflow-hidden rounded-3xl border border-cyan-500/30 bg-card/40 p-2 sm:p-3 shadow-2xl backdrop-blur-xl group">
          {/* Subtle Glow Border */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-primary/20 to-blue-600/20 opacity-50 blur-lg transition-opacity group-hover:opacity-80" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-2xl bg-black aspect-video sm:aspect-[16/9] min-h-[420px] sm:min-h-[540px] md:min-h-[640px] flex items-center justify-center">
            <video
              ref={videoRef}
              src="/intro_video.mp4"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              className="h-full w-full object-cover"
            />

            {/* Video Controls Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 sm:p-6 opacity-95 transition-opacity">
              {/* Progress Bar */}
              <div className="mb-3 h-1 w-full overflow-hidden rounded-full bg-white/20">
                <div
                  className="h-full bg-cyan-400 transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="flex size-10 items-center justify-center rounded-full bg-white/10 backdrop-blur text-white hover:bg-cyan-500 hover:text-black transition-colors"
                    aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                  >
                    {isPlaying ? <Pause className="size-5" /> : <Play className="size-5 fill-current ml-0.5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="flex size-10 items-center justify-center rounded-full bg-white/10 backdrop-blur text-white hover:bg-cyan-500 hover:text-black transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
                  </button>

                  <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full">
                    HD Presentation
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleFullscreen}
                    className="flex size-10 items-center justify-center rounded-full bg-white/10 backdrop-blur text-white hover:bg-cyan-500 hover:text-black transition-colors"
                    aria-label="Fullscreen"
                  >
                    <Maximize className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portal Selection Navigation Cards */}
        {/* <div className="mt-12 grid gap-6 md:grid-cols-2">
          <a
            href="/investor-area"
            className="group relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-card/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-950/20 hover:shadow-2xl hover:shadow-cyan-500/10"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400 ring-1 ring-cyan-500/30">
                <TrendingUp className="size-6" />
              </span>
              <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
                Investor Deck
              </span>
            </div>

            <h2 className="mt-6 font-display text-2xl font-bold text-foreground group-hover:text-cyan-300 transition-colors">
              Investor &amp; Business Area
            </h2>

            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Access financial projections, CAPEX breakdown, unit economics, market opportunity in Dubai, and scaling roadmap.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-400">
              <span>Explore Investor Pitch</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>

          <a
            href="/customers"
            className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-card/90 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/30">
                <Droplets className="size-6" />
              </span>
              <span className="rounded-full border border-border/80 bg-card px-3 py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Client Services
              </span>
            </div>

            <h2 className="mt-6 font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              Client &amp; Service Portal
            </h2>

            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Explore hypercar detailing, marine vessel maintenance, industrial cleaning services, before/after showcases, and booking options.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
              <span>Visit Client Area</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        </div> */}

        {/* Feature Badges */}
        {/* <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-muted-foreground sm:text-sm">
          <span className="flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 backdrop-blur">
            <Droplets className="size-4 text-cyan-400" />
            100% Waterless Sublimation
          </span>
          <span className="flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 backdrop-blur">
            <ShieldCheck className="size-4 text-emerald-400" />
            Zero Secondary Chemical Waste
          </span>
          <span className="flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 backdrop-blur">
            <Sparkles className="size-4 text-cyan-400" />
            Dubai &amp; UAE Precision Detailing
          </span>
        </div> */}
      </div>
    </section>
  )
}
