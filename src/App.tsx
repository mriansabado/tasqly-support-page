import { useMemo, useState } from 'react'
import tasqlyLogo from './assets/tasqly-logo (2).png'

const SUPPORT_EMAIL = 'SUPPORT_EMAIL_HERE'
const RESPONSE_TIME = 'Typically within 24–48 hours'
const CURRENT_VERSION = 'v1.0.x'

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Fallback for older browsers / denied permissions
    try {
      const el = document.createElement('textarea')
      el.value = text
      el.setAttribute('readonly', 'true')
      el.style.position = 'fixed'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      el.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(el)
      return ok
    } catch {
      return false
    }
  }
}

function App() {
  const [copied, setCopied] = useState<'idle' | 'ok' | 'fail'>('idle')

  const mailto = useMemo(() => `mailto:${SUPPORT_EMAIL}`, [])
  const appStoreUrl = 'APP_STORE_LINK_HERE'

  return (
    <div className="min-h-dvh bg-[radial-gradient(1100px_680px_at_15%_-10%,rgba(81,229,230,0.40),transparent_60%),radial-gradient(950px_560px_at_100%_5%,rgba(252,96,72,0.28),transparent_55%),radial-gradient(900px_520px_at_35%_105%,rgba(170,204,53,0.20),transparent_55%),radial-gradient(800px_520px_at_85%_110%,rgba(251,191,53,0.22),transparent_58%),linear-gradient(to_bottom,#12314f,#0f2a44,#12314f)]">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-paper focus:px-4 focus:py-2 focus:text-primary focus:shadow"
        href="#main"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-paper/10 bg-primary/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-2xl bg-paper/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]">
              <img
                src={tasqlyLogo}
                alt="Tasqly"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-paper">
                Tasqly Support
              </div>
              <div className="text-xs text-paper/65">Tasqly (Gig Flow)</div>
            </div>
          </div>

          <nav
            className="flex items-center gap-3 text-sm text-paper/75"
            aria-label="Primary"
          >
            <a className="rounded-lg px-2 py-1 hover:text-paper" href="#overview">
              Overview
            </a>
            <a className="rounded-lg px-2 py-1 hover:text-paper" href="#features">
              Features
            </a>
            <a className="hidden rounded-lg px-2 py-1 hover:text-paper sm:inline" href="#contact">
              Support
            </a>
            <a
              className="inline-flex items-center justify-center rounded-xl bg-aqua/20 px-3 py-1.5 text-xs font-semibold text-paper ring-1 ring-aqua/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-aqua/25"
              href="#contact"
            >
              Get help
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="overview" className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(81,229,230,0.45),transparent_62%)] blur-2xl" />
                  <div className="relative h-24 w-24 overflow-hidden rounded-[1.9rem] bg-paper/10 ring-1 ring-paper/20 shadow-glow sm:h-28 sm:w-28">
                    <img
                      src={tasqlyLogo}
                      alt="Tasqly"
                      className="h-full w-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold tracking-tight text-paper">
                    Tasqly <span className="text-paper/65">(Gig Flow)</span>
                  </p>
                  <p className="mt-1 text-sm text-paper/75">
                    Freelance planning made easy
                  </p>
                </div>
              </div>

              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
                Stay organized, look professional, get paid.
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
                Plan sessions on a calendar, manage clients, track success metrics,
                and export invoices with clean month totals — all without an account.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-aqua px-4 py-2 text-sm font-semibold text-primary shadow-glow transition hover:-translate-y-0.5 hover:bg-aqua/95"
                  href={appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Tasqly
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-paper/10 px-4 py-2 text-sm font-semibold text-paper ring-1 ring-paper/15 transition hover:-translate-y-0.5 hover:bg-paper/15"
                  href="#features"
                >
                  See features
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-coral/15 px-4 py-2 text-sm font-semibold text-paper ring-1 ring-coral/30 transition hover:-translate-y-0.5 hover:bg-coral/20"
                  href="#contact"
                >
                  Need help?
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-2 text-xs text-paper/85">
                {[
                  { t: 'Planner', c: 'bg-aqua/18 ring-aqua/35' },
                  { t: 'Clients', c: 'bg-lime/18 ring-lime/35' },
                  { t: 'Invoices', c: 'bg-amber/18 ring-amber/35' },
                  { t: 'Metrics', c: 'bg-coral/18 ring-coral/35' },
                ].map((x) => (
                  <span
                    key={x.t}
                    className={`rounded-full px-3 py-1 ring-1 ${x.c} shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]`}
                  >
                    {x.t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(252,96,72,0.22),transparent_65%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.9rem] bg-paper/5 p-6 shadow-glow ring-1 ring-paper/12">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-paper">What you get</div>
                  <div className="text-xs text-paper/65">Designed for freelancers</div>
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    {
                      t: 'Planner that matches real weeks',
                      d: 'Calendar sessions with weekly repeats and quick edits.',
                      c: 'border-l-aqua/70',
                    },
                    {
                      t: 'Clients, notes, and profile photos',
                      d: 'Keep context and updates in one place.',
                      c: 'border-l-lime/70',
                    },
                    {
                      t: 'Invoices with month totals',
                      d: 'Share/Print on iOS to save as PDF and send fast.',
                      c: 'border-l-amber/70',
                    },
                    {
                      t: 'Success metrics over time',
                      d: 'Add readings that help you spot progress at a glance.',
                      c: 'border-l-coral/70',
                    },
                  ].map((x) => (
                    <div
                      key={x.t}
                      className={`rounded-2xl bg-primary/40 p-4 ring-1 ring-paper/10 border-l-4 ${x.c}`}
                    >
                      <div className="text-sm font-semibold text-paper">{x.t}</div>
                      <div className="mt-1 text-sm text-paper/75">{x.d}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-paper/5 p-4 ring-1 ring-paper/10">
                  <div className="text-xs font-medium text-paper/70">Local-first</div>
                  <div className="mt-1 text-sm text-paper/80">
                    No account required. No ads. No subscriptions. Your data stays on your device.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight text-paper">Features</h2>
            <p className="text-sm text-paper/75">
              Built to help freelancers run a smoother workflow — planning to invoices.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {[
              {
                t: 'Planner',
                d: 'Create sessions, repeat weekly, and keep a clear view of your schedule.',
                a: 'Weekly repeats · quick edits · clean calendar',
                c: 'from-aqua/30 to-paper/5 ring-aqua/35',
              },
              {
                t: 'Client management',
                d: 'Edit client details anytime and add a profile photo (with iOS permissions).',
                a: 'Profiles · notes · photos',
                c: 'from-lime/25 to-paper/5 ring-lime/35',
              },
              {
                t: 'Success metrics',
                d: 'Add readings over time so progress and patterns are easy to see.',
                a: 'Lightweight entries · dates · values',
                c: 'from-coral/25 to-paper/5 ring-coral/35',
              },
              {
                t: 'Invoices & PDFs',
                d: 'Generate invoices for a month with totals, then share via iOS Share/Print.',
                a: 'Month totals · PDF share · professional look',
                c: 'from-amber/30 to-paper/5 ring-amber/35',
              },
            ].map((x) => (
              <div
                key={x.t}
                className={`rounded-3xl bg-gradient-to-br ${x.c} p-6 ring-1 shadow-glow`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-paper">{x.t}</div>
                    <p className="mt-2 text-sm leading-relaxed text-paper/80">{x.d}</p>
                  </div>
                  <span className="rounded-full bg-paper/10 px-3 py-1 text-xs font-semibold text-paper ring-1 ring-paper/15">
                    Tasqly
                  </span>
                </div>
                <div className="mt-4 text-xs text-paper/75">{x.a}</div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-3xl bg-paper/5 p-6 ring-1 ring-paper/10 shadow-glow">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-paper">Ready to try it?</div>
                <div className="mt-1 text-sm text-paper/75">
                  Download Tasqly and start planning your next week in minutes.
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-aqua px-4 py-2 text-sm font-semibold text-primary shadow-glow transition hover:-translate-y-0.5 hover:bg-aqua/95"
                  href={appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Tasqly
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-paper/10 px-4 py-2 text-sm font-semibold text-paper ring-1 ring-paper/15 transition hover:-translate-y-0.5 hover:bg-paper/15"
                  href="#contact"
                >
                  Contact support
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-paper">
                Contact
              </h2>
              <p className="mt-2 text-sm text-paper/70">
                Email is the fastest way to reach us.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-paper/5 p-5 shadow-glow ring-1 ring-paper/10 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs font-medium text-paper/70">
                  Support email
                </div>
                <a
                  className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-paper no-underline hover:underline"
                  href={mailto}
                >
                  {SUPPORT_EMAIL}
                </a>
                <div className="mt-1 text-sm text-paper/70">
                  {RESPONSE_TIME}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl bg-aqua/15 px-4 py-2 text-sm font-semibold text-paper ring-1 ring-aqua/30 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10)] transition hover:bg-aqua/20"
                  onClick={async () => {
                    setCopied('idle')
                    const ok = await copyText(SUPPORT_EMAIL)
                    setCopied(ok ? 'ok' : 'fail')
                    window.setTimeout(() => setCopied('idle'), 1600)
                  }}
                  aria-label="Copy support email to clipboard"
                >
                  Copy email
                </button>
                <div
                  className="pt-2 text-xs text-paper/70"
                  aria-live="polite"
                >
                  {copied === 'ok' && 'Copied'}
                  {copied === 'fail' && 'Copy failed'}
                  {copied === 'idle' && '\u00A0'}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-primary/55 p-4 text-sm text-paper/80 ring-1 ring-paper/10">
              <span className="font-semibold text-paper">Include:</span> your
              iOS version, your app version, and what you tapped right before the
              issue.
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-paper">
              FAQ
            </h2>
            <p className="mt-2 text-sm text-paper/70">
              Concrete answers for real workflows.
            </p>
          </div>

          <div className="mt-6 grid gap-3">
            {[
              {
                q: 'What does Tasqly (Gig Flow) do?',
                a: 'Tasqly is a simple workflow for gig sessions: plan them on the Planner, keep client notes and photos, record success metrics, and generate invoices with monthly totals.',
              },
              {
                q: 'How do I get started?',
                a: 'Create a client first, then add sessions in the Planner. Once you have sessions and readings, generate an invoice for a month and share a PDF from iOS.',
              },
              {
                q: 'Planner: how do sessions and weekly repeats work?',
                a: 'Add a session on a date/time, then set it to repeat weekly (if enabled). Repeats are best for stable schedules. If your week changes, edit or remove the series and create a new one.',
              },
              {
                q: 'Clients: can I edit details later (and add a photo)?',
                a: 'Yes. Open a client profile to update details and tap the photo area to set/change the profile image. If the picker doesn’t open, check iOS Settings > Privacy & Security > Photos and allow access for Tasqly.',
              },
              {
                q: 'Success metrics: how do I add readings?',
                a: 'Open a client and add a reading (date + value) in Success Metrics. Readings are designed to be quick entries you can track over time.',
              },
              {
                q: 'Invoices: what totals are shown?',
                a: 'Invoices include the sessions for the selected month and show month totals so you can quickly verify the period’s earnings.',
              },
              {
                q: 'Invoices: how do I share or save a PDF?',
                a: 'Use the iOS Share/Print flow. You can “Print”, pinch-out to the preview, then share/save as a PDF—or share directly to Files, Mail, Messages, etc. (Options vary by iOS/apps.)',
              },
              {
                q: 'Branding: can I add my logo?',
                a: 'Yes. Set your branding logo in Settings. It appears on the Planner header and on invoices so your PDFs look consistent.',
              },
              {
                q: 'Theme: does Tasqly support light/dark mode?',
                a: 'Yes. Tasqly supports light and dark mode. If it looks “stuck”, check iOS Appearance and any in-app theme setting.',
              },
              {
                q: 'Data & privacy: do I need an account? Are there ads/subscriptions?',
                a: 'No account required. Tasqly is local-first: your data stays on your device. There are no ads and no subscriptions.',
              },
              {
                q: 'Backups / switching phones: will my data sync?',
                a: 'Tasqly does not currently include cross-device sync. If you switch phones, restore your new device from an iCloud (or Finder) backup that includes Tasqly’s app data.',
              },
              {
                q: 'Troubleshooting: crashes or blank screens',
                a: 'Force quit and reopen. If it repeats, restart your phone. If it persists, email support with what you were doing, your iOS version, and your app version.',
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl bg-paper/5 p-4 ring-1 ring-paper/10 open:bg-paper/7 sm:p-5"
              >
                <summary className="cursor-pointer list-none select-none text-sm font-semibold text-paper">
                  <span className="inline-flex items-center gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-lg bg-paper/10 text-paper/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]">
                      <span className="block text-base leading-none transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                    {q}
                  </span>
                </summary>
                <div className="mt-3 text-sm leading-relaxed text-paper/80">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section
          id="privacy"
          className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-paper">
              Privacy &amp; Data
            </h2>
            <p className="mt-2 text-sm text-paper/70">
              Plain language, no overclaims.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                t: 'Your data stays on your device',
                d: 'Tasqly is built for on-device storage. No required sign-in. No ads.',
              },
              {
                t: 'No subscriptions',
                d: 'Tasqly does not require a subscription for core features. If that ever changes, this page and the App Store listing will be updated clearly.',
              },
              {
                t: 'App Store privacy labels',
                d: 'The App Store privacy labels are the authoritative source for what data is collected (if any). Email us if anything is unclear.',
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-3xl bg-paper/5 p-5 shadow-glow ring-1 ring-paper/10"
              >
                <h3 className="text-sm font-semibold text-paper">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/80">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-paper/10 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-paper/65 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <span className="font-semibold text-paper/85">Tasqly</span> ·
              Support
            </div>
            <div className="flex flex-col gap-1 sm:items-end">
              <div>Current version: {CURRENT_VERSION}</div>
              <div>© {new Date().getFullYear()} Tasqly</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
