import { useEffect, useMemo, useState } from 'react'
import tasqlyLogo from './assets/tasqly-logo (2).png'
import mobileScreenshotPlanner from './assets/tasqly-mobile-screenshot.png'
import mobileScreenshotClient from './assets/tasqly-mobile-screenshot2.png'
import mobileScreenshotMetrics from './assets/tasqly-metrics-screenshot2.png'
import ipadScreenshotPlanner from './assets/tasqly-ipad-screenshots.png'

const SUPPORT_EMAIL = 'ian@maunadigital.com'
const COMPANY_NAME = 'Mauna Digital'
const SUPPORT_SITE_URL = 'https://tasqly-support-page.vercel.app/'
const PRIVACY_EFFECTIVE_DATE = 'April 7, 2026'
const PRIVACY_LAST_UPDATED = 'April 7, 2026'
const RESPONSE_TIME = 'Typically within 24 to 48 hours'
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

  useEffect(() => {
    const openPrivacyFromHash = () => {
      if (window.location.hash !== '#privacy-policy') return
      const el = document.getElementById('privacy-policy-details')
      if (el instanceof HTMLDetailsElement) el.open = true
    }
    openPrivacyFromHash()
    window.addEventListener('hashchange', openPrivacyFromHash)
    return () => window.removeEventListener('hashchange', openPrivacyFromHash)
  }, [])

  const mailto = useMemo(() => `mailto:${SUPPORT_EMAIL}`, [])
  const appStoreUrl = 'https://apps.apple.com/us/app/tasqly/id6761040872'
  const appStoreCtaClassName =
    'inline-flex min-h-12 items-center justify-center rounded-2xl bg-aqua px-7 py-3.5 text-base font-bold tracking-tight text-primary shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_8px_32px_rgba(81,229,230,0.4),0_20px_50px_rgba(0,0,0,0.45)] transition hover:-translate-y-1 hover:bg-aqua/95 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_12px_44px_rgba(81,229,230,0.55),0_24px_60px_rgba(0,0,0,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua/70 active:translate-y-0 sm:min-h-[3.25rem] sm:px-8 sm:py-4 sm:text-lg'

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
              <div className="text-xs text-paper/65">
                Lightweight planner for freelancers, by a freelancer
              </div>
            </div>
          </div>

          <nav
            className="flex items-center gap-3 text-sm text-paper/75"
            aria-label="Primary"
          >
            <a className="rounded-lg px-2 py-1 hover:text-paper" href="#overview">
              Overview
            </a>
            <a className="rounded-lg px-2 py-1 hover:text-paper" href="#screenshots">
              Screenshots
            </a>
            <a className="rounded-lg px-2 py-1 hover:text-paper" href="#features">
              Features
            </a>
            <a
              className="hidden rounded-lg px-2 py-1 hover:text-paper lg:inline"
              href="#privacy-policy"
            >
              Privacy Policy
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
          <div className="flex flex-col gap-14">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -inset-8 rounded-[2rem] bg-[radial-gradient(closest-side,rgba(81,229,230,0.45),transparent_62%)] blur-2xl" />
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

                <p className="mt-5 text-pretty text-sm text-paper/75 sm:text-base">
                  By a freelancer, for freelancers
                </p>
              </div>

              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
                Stay organized, plan your week, stress less.
              </h1>
              <p className="mt-4 text-pretty text-base leading-relaxed text-paper/80 sm:text-lg">
                A lightweight app for iPhone and iPad that helps freelancers keep the
                moving parts together: sessions, clients, notes, invoices, and simple
                progress metrics. Tasqly is built for real days between calls and errands,
                not perfect routines. No account, no ads, no subscription - just a clean
                tool that stays out of your way. One purchase on the App Store ($4.99), and
                you are good.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4">
                <a
                  className={appStoreCtaClassName}
                  href={appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Tasqly
                </a>
                <div className="flex flex-wrap justify-center gap-3">
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
                <div className="text-xs text-paper/70">
                  Built to be useful on day one, not bloated over time.
                </div>
              </div>

              <div className="mt-7 flex flex-wrap justify-center gap-2 text-xs text-paper/85">
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
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-paper">What you get</div>
                  <div className="max-w-[14rem] text-right text-xs text-paper/65 sm:max-w-none">
                    A simple toolkit, not enterprise software
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    {
                      t: 'Planner that matches real weeks',
                      d: 'See what’s on your plate: sessions, weekly repeats, and quick edits.',
                      c: 'border-l-aqua/70',
                    },
                    {
                      t: 'Clients, notes, and profile photos',
                      d: 'Keep names, context, and follow ups where you’ll actually find them.',
                      c: 'border-l-lime/70',
                    },
                    {
                      t: 'Invoices with month totals',
                      d: 'Share or Print on iOS to save as PDF and send fast.',
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
                  <div className="text-xs font-medium text-paper/70">
                    On your phone, buy once
                  </div>
                  <div className="mt-1 text-sm text-paper/80">
                    No account required. No ads. Pay once on the App Store ($4.99), with no
                    subscription. If Tasqly helps you feel a little less scattered week to
                    week, it has done its job.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="screenshots"
          className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14"
          aria-labelledby="screenshots-heading"
        >
          <div className="flex flex-col gap-2">
            <h2
              id="screenshots-heading"
              className="text-2xl font-semibold tracking-tight text-paper"
            >
              Screenshots
            </h2>
            <p className="text-sm text-paper/75">
              We built Tasqly around the iPhone you already use every day. Your week, your clients,
              and the notes that keep you organized are a tap or two away, easy to use with one hand
              while you are between sessions or on the go. Your information stays on your phone
              unless you send it yourself.
            </p>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-10">
            <figure className="mx-auto w-full max-w-[280px] sm:max-w-none">
              <div className="relative overflow-hidden rounded-[2rem] bg-paper/5 shadow-glow ring-1 ring-paper/15">
                <div className="absolute -inset-px rounded-[2rem] bg-[linear-gradient(145deg,rgba(81,229,230,0.12),transparent_45%,rgba(252,96,72,0.08))] pointer-events-none" />
                <img
                  src={mobileScreenshotPlanner}
                  alt="Tasqly Planner on iPhone: monthly calendar with session dots and the day’s sessions list"
                  className="relative w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                  width={1206}
                  height={2622}
                />
              </div>
              <figcaption className="mt-3 text-center text-xs font-medium text-paper/65">
                Planner: calendar &amp; sessions
              </figcaption>
            </figure>
            <figure className="mx-auto w-full max-w-[280px] sm:max-w-none">
              <div className="relative overflow-hidden rounded-[2rem] bg-paper/5 shadow-glow ring-1 ring-paper/15">
                <div className="absolute -inset-px rounded-[2rem] bg-[linear-gradient(145deg,rgba(252,96,72,0.10),transparent_45%,rgba(81,229,230,0.10))] pointer-events-none" />
                <img
                  src={mobileScreenshotClient}
                  alt="Tasqly client profile on iPhone: contact details, notes, success metrics, and monthly invoice"
                  className="relative w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                  width={1206}
                  height={2622}
                />
              </div>
              <figcaption className="mt-3 text-center text-xs font-medium text-paper/65">
                Client profile: notes &amp; metrics
              </figcaption>
            </figure>
            <figure className="mx-auto w-full max-w-[280px] sm:max-w-none">
              <div className="relative overflow-hidden rounded-[2rem] bg-paper/5 shadow-glow ring-1 ring-paper/15">
                <div className="absolute -inset-px rounded-[2rem] bg-[linear-gradient(145deg,rgba(170,204,53,0.14),transparent_45%,rgba(81,229,230,0.10))] pointer-events-none" />
                <img
                  src={mobileScreenshotMetrics}
                  alt="Tasqly success metrics screen on iPhone: track readings over time with history and latest value"
                  className="relative w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                  width={1320}
                  height={2868}
                />
              </div>
              <figcaption className="mt-3 text-center text-xs font-medium text-paper/65">
                Success metrics: readings over time
              </figcaption>
            </figure>
          </div>

          <div className="mt-14 border-t border-paper/10 pt-12">
            <h3 className="text-lg font-semibold tracking-tight text-paper">iPad</h3>
            <p className="mt-2 max-w-2xl text-sm text-paper/75">
              The same app scales nicely on iPad, with comfortable typography, roomy layouts, and a
              planner view that keeps the month and today’s sessions side by side.
            </p>
            <figure className="mx-auto mt-8 w-full max-w-2xl lg:max-w-3xl">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-paper/5 shadow-glow ring-1 ring-paper/15 sm:rounded-[2rem]">
                <div className="pointer-events-none absolute -inset-px rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(170,204,53,0.12),transparent_50%,rgba(81,229,230,0.10))] sm:rounded-[2rem]" />
                <img
                  src={ipadScreenshotPlanner}
                  alt="Tasqly Planner on iPad: split layout with monthly calendar and the selected day’s sessions list"
                  className="relative w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                  width={2064}
                  height={2752}
                />
              </div>
              <figcaption className="mt-3 text-center text-xs font-medium text-paper/65">
                iPad: calendar &amp; day list together
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight text-paper">Features</h2>
            <p className="text-sm text-paper/75">
              Helpful tools for the messy middle of freelance work (planning, people, progress,
              and paperwork) without the weight of a full CRM.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {[
              {
                t: 'Planner',
                d: 'Create sessions, repeat weekly, and keep a clear view of your schedule.',
                a: 'Weekly repeats, quick edits, clean calendar',
                c: 'from-aqua/30 to-paper/5 ring-aqua/35',
              },
              {
                t: 'Client management',
                d: 'Edit client details anytime and add a profile photo (with iOS permissions).',
                a: 'Profiles, notes, photos',
                c: 'from-lime/25 to-paper/5 ring-lime/35',
              },
              {
                t: 'Success metrics',
                d: 'Add readings over time so progress and patterns are easy to see.',
                a: 'Lightweight entries, dates, values',
                c: 'from-coral/25 to-paper/5 ring-coral/35',
              },
              {
                t: 'Invoices & PDFs',
                d: 'Generate invoices for a month with totals, then share via iOS Share or Print.',
                a: 'Month totals, PDF share, clear layout',
                c: 'from-amber/30 to-paper/5 ring-amber/35',
              },
            ].map((x) => (
              <div
                key={x.t}
                className={`rounded-3xl bg-gradient-to-br ${x.c} p-6 ring-1 shadow-glow`}
              >
                <div>
                  <div className="text-sm font-semibold text-paper">{x.t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-paper/80">{x.d}</p>
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
                  One purchase on the App Store. Keep it for as long as Tasqly stays there.
                  Download and plan your next week in minutes.
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  className={appStoreCtaClassName}
                  href={appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Tasqly
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-paper/10 px-4 py-2 text-sm font-semibold text-paper ring-1 ring-paper/15 transition hover:-translate-y-0.5 hover:bg-paper/15 sm:shrink-0"
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
                Email is the fastest way to reach the developer, another freelancer, happy to help.
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
              Straight answers for how freelancers actually use the app.
            </p>
          </div>

          <div className="mt-6 grid gap-3">
            {[
              {
                q: 'What does Tasqly do?',
                a: 'Tasqly is a lightweight iPhone and iPad app for freelance work: plan sessions on the Planner, keep client notes and photos, track success metrics, and generate invoices with monthly totals. It’s built to organize your week and the details around your clients without a heavy CRM.',
              },
              {
                q: 'Pricing: subscription or one time?',
                a: 'It is a one-time App Store purchase ($4.99), no subscription. We keep pricing simple: buy it once, use it as long as it is supported on the App Store.',
              },
              {
                q: 'How do I get started?',
                a: 'Create a client first, then add sessions in the Planner. Once you have sessions and readings, generate an invoice for a month and share a PDF from iOS.',
              },
              {
                q: 'Planner: how do sessions and weekly repeats work?',
                a: 'Add a session on a date and time, then set it to repeat weekly (if enabled). Repeats are best for stable schedules. If your week changes, edit or remove the series and create a new one.',
              },
              {
                q: 'Clients: can I edit details later (and add a photo)?',
                a: 'Yes. Open a client profile to update details and tap the photo area to set or change the profile image. If the picker doesn’t open, check iOS Settings > Privacy & Security > Photos and allow access for Tasqly.',
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
                a: 'Use the iOS Share or Print flow. You can “Print”, pinch out to the preview, then share or save as a PDF, or share directly to Files, Mail, Messages, and more. (Options vary by iOS version and apps.)',
              },
              {
                q: 'Branding: can I add my logo?',
                a: 'Yes. Set your branding logo in Settings. It appears on the Planner header and on invoices so your PDFs look consistent.',
              },
              {
                q: 'Theme: does Tasqly support light and dark mode?',
                a: 'Yes. Tasqly supports light and dark mode. If it looks “stuck”, check iOS Appearance and any in app theme setting.',
              },
              {
                q: 'Data and privacy: do I need an account? Are there ads or subscriptions?',
                a: 'No account required. Your data stays on your device. There are no ads and no subscriptions. It is a buy once app on the App Store.',
              },
              {
                q: 'Backups and switching phones: will my data sync?',
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
          <div className="relative pb-2 pt-1 sm:pb-3 sm:pt-2">
            <div
              className="pointer-events-none absolute inset-0 translate-x-2 translate-y-5 rounded-[1.85rem] bg-gradient-to-br from-aqua/35 via-primary to-lime/25 opacity-95 shadow-[14px_20px_0_rgba(0,0,0,0.42),0_0_0_1px_rgba(81,229,230,0.2)] ring-1 ring-lime/25 sm:translate-x-3 sm:translate-y-6 sm:rounded-[2rem]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.25rem] bg-[radial-gradient(closest-side,rgba(81,229,230,0.22),transparent_70%),radial-gradient(closest-side,rgba(170,204,53,0.14),transparent_72%)] blur-2xl"
              aria-hidden
            />

            <div className="relative overflow-hidden rounded-[1.85rem] border-2 border-aqua/55 bg-gradient-to-b from-paper/[0.14] via-paper/[0.06] to-primary/70 p-6 shadow-[0_1px_0_rgba(255,255,255,0.16)_inset,0_22px_56px_rgba(0,0,0,0.5),0_0_48px_rgba(81,229,230,0.14)] ring-1 ring-paper/20 sm:rounded-[2rem] sm:p-8">
              <div
                className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full bg-aqua/20 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-lime/15 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua/50 to-transparent"
                aria-hidden
              />

              <div className="relative">
                <h2 className="text-2xl font-semibold tracking-tight text-paper">
                  Privacy &amp; Data
                </h2>
                <p className="mt-2 text-sm text-paper/70">
                  Plain language, no overclaims.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {[
                    {
                      t: 'Your data stays on your device',
                      d: 'Tasqly is built for on-device storage. No required sign-in. No ads. Buy once.',
                    },
                    {
                      t: 'One time purchase',
                      d: 'Buy once on the App Store and use Tasqly for as long as it stays listed and supported there. No subscription tiers. If the model ever changed, this page and the App Store listing would be updated clearly.',
                    },
                    {
                      t: 'App Store privacy labels',
                      d: 'The App Store privacy labels are the authoritative source for what data is collected (if any). Email us if anything is unclear.',
                    },
                  ].map((c) => (
                    <div
                      key={c.t}
                      className="rounded-2xl border border-paper/12 bg-primary/45 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_28px_rgba(0,0,0,0.35)] ring-1 ring-aqua/15"
                    >
                      <h3 className="text-sm font-semibold text-paper">{c.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-paper/80">
                        {c.d}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-center text-sm text-paper/80">
                  <a
                    className="font-semibold text-aqua no-underline hover:underline"
                    href="#privacy-policy"
                  >
                    Read the full Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="privacy-policy"
          className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14"
          aria-labelledby="privacy-policy-heading"
        >
          <article className="rounded-3xl bg-paper/5 p-6 shadow-glow ring-1 ring-paper/10 sm:p-8">
            <details
              id="privacy-policy-details"
              className="group rounded-2xl open:bg-paper/[0.04]"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-xl select-none [&::-webkit-details-marker]:hidden">
                <div className="min-w-0">
                  <h2
                    id="privacy-policy-heading"
                    className="text-2xl font-semibold tracking-tight text-paper"
                  >
                    Privacy Policy
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-paper/75">
                    <strong className="text-paper">Effective date:</strong>{' '}
                    {PRIVACY_EFFECTIVE_DATE}
                    <span className="text-paper/50"> · </span>
                    <strong className="text-paper">Last updated:</strong>{' '}
                    {PRIVACY_LAST_UPDATED}
                  </p>
                  <p className="mt-2 text-xs text-paper/65">
                    Tap to expand or collapse the full policy.
                  </p>
                </div>
                <span
                  className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-paper/10 text-lg font-light text-paper/80 ring-1 ring-paper/15 transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <div className="mt-6 border-t border-paper/10 pt-6">
                <p className="text-sm leading-relaxed text-paper/80">
                  Tasqly (“we,” “our,” or “us”) respects your privacy. This
                  Privacy Policy explains how information is handled when you
                  use the Tasqly mobile app.
                </p>
              </div>

              <div className="mt-6 space-y-8 text-sm leading-relaxed text-paper/85">
              <section aria-labelledby="pp-1">
                <h3 id="pp-1" className="text-base font-semibold text-paper">
                  1. Overview
                </h3>
                <p className="mt-2">
                  Tasqly is a lightweight productivity app for freelancers and
                  independent workers, built by a freelancer. Core app data is
                  stored locally on your device.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-paper/80">
                  <li>No account is required to use core features.</li>
                  <li>
                    We do not run a user cloud backend for storing your
                    planner and client content.
                  </li>
                  <li>We do not show third-party ads.</li>
                  <li>
                    The app is sold as a one time purchase on the Apple App Store
                    (not a subscription).
                  </li>
                </ul>
              </section>

              <section aria-labelledby="pp-2">
                <h3 id="pp-2" className="text-base font-semibold text-paper">
                  2. Information You Provide in the App
                </h3>
                <p className="mt-2">You may choose to enter information such as:</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-paper/80">
                  <li>Client names and contact details</li>
                  <li>Session notes and planning data</li>
                  <li>Quick notes</li>
                  <li>Success metrics and readings</li>
                  <li>Optional profile details</li>
                  <li>
                    Optional branding or logo images selected from your photo
                    library
                  </li>
                </ul>
                <p className="mt-3">
                  This information is stored on your device for app
                  functionality.
                </p>
              </section>

              <section aria-labelledby="pp-3">
                <h3 id="pp-3" className="text-base font-semibold text-paper">
                  3. Photo Library Access
                </h3>
                <p className="mt-2">
                  If you choose to add a client photo or company logo, the app
                  requests photo library permission. This access is only used to
                  let you select images for use in the app and in exported documents.
                </p>
              </section>

              <section aria-labelledby="pp-4">
                <h3 id="pp-4" className="text-base font-semibold text-paper">
                  4. Data Storage and Sharing
                </h3>
                <p className="mt-2">
                  Your app content is stored locally on your device (for example,
                  local app storage or database). Tasqly does not require an
                  account and does not upload your planner and client content to a
                  cloud backend operated by Tasqly for normal app use.
                </p>
                <p className="mt-3">
                  When you use sharing and export features (for example, generating
                  and sharing a PDF), data is processed on-device and then
                  shared only through destinations you choose (such as Mail,
                  Messages, Files, or other share targets).
                </p>
              </section>

              <section aria-labelledby="pp-5">
                <h3 id="pp-5" className="text-base font-semibold text-paper">
                  5. Analytics, Ads, and Tracking
                </h3>
                <p className="mt-2">At this time:</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-paper/80">
                  <li>We do not integrate third-party ad networks.</li>
                  <li>We do not use subscription paywalls inside the app.</li>
                  <li>We do not use in app behavioral advertising tracking.</li>
                </ul>
                <p className="mt-3">
                  If this changes in a future release, we will update this Privacy
                  Policy and App Store privacy disclosures.
                </p>
              </section>

              <section aria-labelledby="pp-6">
                <h3 id="pp-6" className="text-base font-semibold text-paper">
                  6. App Store and Platform Data
                </h3>
                <p className="mt-2">
                  Apple and other platform providers may collect certain
                  diagnostic, usage, or device information under their own terms
                  and privacy policies. That processing is governed by those
                  providers, not this Privacy Policy.
                </p>
              </section>

              <section aria-labelledby="pp-7">
                <h3 id="pp-7" className="text-base font-semibold text-paper">
                  7. Data Retention and Deletion
                </h3>
                <p className="mt-2">
                  Because core data is stored on your device, you control
                  retention. You can remove data by deleting items in the app or
                  uninstalling the app. If you export or share files, copies
                  may remain in the apps and services you shared them with.
                </p>
              </section>

              <section aria-labelledby="pp-8">
                <h3 id="pp-8" className="text-base font-semibold text-paper">
                  8. Children’s Privacy
                </h3>
                <p className="mt-2">
                  Tasqly is not directed to children under 13, and we do not
                  knowingly collect personal information from children through an
                  account system hosted by Tasqly.
                </p>
              </section>

              <section aria-labelledby="pp-9">
                <h3 id="pp-9" className="text-base font-semibold text-paper">
                  9. International Users
                </h3>
                <p className="mt-2">
                  If you use the app outside your home country, local laws may
                  differ regarding privacy rights. We aim to handle data
                  practices transparently regardless of region.
                </p>
              </section>

              <section aria-labelledby="pp-10">
                <h3 id="pp-10" className="text-base font-semibold text-paper">
                  10. Changes to This Privacy Policy
                </h3>
                <p className="mt-2">
                  We may update this Privacy Policy from time to time. Updates
                  will be reflected by revising the “Last updated” date above.
                </p>
              </section>

              <section aria-labelledby="pp-11">
                <h3 id="pp-11" className="text-base font-semibold text-paper">
                  11. Contact
                </h3>
                <p className="mt-2">
                  If you have privacy questions, contact us at:
                </p>
                <ul className="mt-3 list-none space-y-2 text-paper/85">
                  <li>
                    <strong className="text-paper">Email:</strong>{' '}
                    <a href={mailto} className="text-aqua">
                      {SUPPORT_EMAIL}
                    </a>
                  </li>
                  <li>
                    <strong className="text-paper">
                      Developer or company name:
                    </strong>{' '}
                    {COMPANY_NAME}
                  </li>
                  <li>
                    <strong className="text-paper">Website and support URL:</strong>{' '}
                    <a
                      href={SUPPORT_SITE_URL}
                      className="break-all text-aqua"
                    >
                      {SUPPORT_SITE_URL}
                    </a>
                  </li>
                </ul>
              </section>
              </div>
            </details>
          </article>
        </section>

        <footer className="border-t border-paper/10 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-paper/65 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <span>
                <span className="font-semibold text-paper/85">Tasqly Support</span>
                , by a freelancer, for freelancers
              </span>
              <a
                className="text-paper/75 no-underline hover:text-paper hover:underline"
                href="#privacy-policy"
              >
                Privacy Policy
              </a>
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
