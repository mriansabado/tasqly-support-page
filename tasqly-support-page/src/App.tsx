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

  return (
    <div className="min-h-dvh bg-[radial-gradient(1000px_600px_at_30%_-10%,rgba(73,194,255,0.35),transparent_60%),radial-gradient(800px_500px_at_90%_10%,rgba(31,131,245,0.25),transparent_55%),linear-gradient(to_bottom,theme(colors.ink.950),theme(colors.ink.900),theme(colors.ink.950))]">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-ink-950 focus:shadow"
        href="#main"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/65 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-2xl bg-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10)]">
              <img
                src={tasqlyLogo}
                alt="Tasqly"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-white">
                Tasqly Support
              </div>
              <div className="text-xs text-white/60">Tasqly (Gig Flow)</div>
            </div>
          </div>

          <nav
            className="flex items-center gap-3 text-sm text-white/75"
            aria-label="Primary"
          >
            <a className="rounded-lg px-2 py-1 hover:text-white" href="#contact">
              Contact
            </a>
            <a className="rounded-lg px-2 py-1 hover:text-white" href="#faq">
              FAQ
            </a>
            <a className="rounded-lg px-2 py-1 hover:text-white" href="#privacy">
              Privacy
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="mx-auto max-w-5xl px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                <span className="h-4 w-4 overflow-hidden rounded bg-white/10 ring-1 ring-white/10">
                  <img
                    src={tasqlyLogo}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                Freelance, organized
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Help with Tasqly <span className="text-white/60">(Gig Flow)</span>
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
                Tasqly is a planner for freelancers: schedule sessions, manage
                clients, track progress, and export invoices — all without an
                account.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-ink-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-white/95"
                  href="#contact"
                >
                  Contact support
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10)] transition hover:-translate-y-0.5 hover:bg-white/15"
                  href="#faq"
                >
                  Browse FAQs
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-2 text-xs text-white/70">
                {['stay organized', 'manage clients', 'export invoices', 'track metrics'].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 px-3 py-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(73,194,255,0.22),transparent_60%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.6rem] bg-white/5 p-5 shadow-glow ring-1 ring-white/10">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">
                    Support shortcuts
                  </div>
                  <div className="text-xs text-white/60">Fast answers</div>
                </div>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl bg-ink-900/70 p-4 ring-1 ring-white/10">
                    <div className="text-xs font-medium text-white/60">
                      Planner
                    </div>
                    <div className="mt-1 text-sm text-white/80">
                      Weekly repeats, session details, quick edits.
                    </div>
                  </div>
                  <div className="rounded-2xl bg-ink-900/70 p-4 ring-1 ring-white/10">
                    <div className="text-xs font-medium text-white/60">
                      Invoices
                    </div>
                    <div className="mt-1 text-sm text-white/80">
                      Month totals + iOS Share/Print to save as PDF.
                    </div>
                  </div>
                  <div className="rounded-2xl bg-ink-900/70 p-4 ring-1 ring-white/10">
                    <div className="text-xs font-medium text-white/60">
                      Privacy
                    </div>
                    <div className="mt-1 text-sm text-white/80">
                      Local-first, no ads, no account required.
                    </div>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="text-xs text-white/60">Tip</div>
                  <div className="mt-1 text-sm text-white/75">
                    When emailing support, include your iOS version and the app
                    version from Settings.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Contact
              </h2>
              <p className="mt-2 text-sm text-white/65">
                Email is the fastest way to reach us.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-white/5 p-5 shadow-glow ring-1 ring-white/10 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs font-medium text-white/60">
                  Support email
                </div>
                <a
                  className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-white no-underline hover:underline"
                  href={mailto}
                >
                  {SUPPORT_EMAIL}
                </a>
                <div className="mt-1 text-sm text-white/60">
                  {RESPONSE_TIME}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10)] transition hover:bg-white/15"
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
                  className="pt-2 text-xs text-white/60"
                  aria-live="polite"
                >
                  {copied === 'ok' && 'Copied'}
                  {copied === 'fail' && 'Copy failed'}
                  {copied === 'idle' && '\u00A0'}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-ink-900/60 p-4 text-sm text-white/70 ring-1 ring-white/10">
              <span className="font-semibold text-white">Include:</span> your
              iOS version, your app version, and what you tapped right before the
              issue.
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              FAQ
            </h2>
            <p className="mt-2 text-sm text-white/65">
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
                className="group rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 open:bg-white/7 sm:p-5"
              >
                <summary className="cursor-pointer list-none select-none text-sm font-semibold text-white">
                  <span className="inline-flex items-center gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-lg bg-white/10 text-white/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10)]">
                      <span className="block text-base leading-none transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                    {q}
                  </span>
                </summary>
                <div className="mt-3 text-sm leading-relaxed text-white/70">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section
          id="privacy"
          className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Privacy &amp; Data
            </h2>
            <p className="mt-2 text-sm text-white/65">
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
                className="rounded-3xl bg-white/5 p-5 shadow-glow ring-1 ring-white/10"
              >
                <h3 className="text-sm font-semibold text-white">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <span className="font-semibold text-white/75">Tasqly</span> ·
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
