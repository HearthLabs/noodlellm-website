import Link from "next/link";
import { SITE } from "@/lib/site";
import { href, strings, type Locale } from "@/lib/i18n";
import PreviewTabs from "@/components/PreviewTabs";

/**
 * The sections the homepage is built from.
 *
 * Originally the homepage.
 *
 * It argues before it lists. Everybody arriving already uses a cloud AI or has heard of
 * one, and already knows those are cleverer; a page that pretends otherwise loses them in
 * the first sentence. So it concedes that at the very top, in the headline, and then spends
 * the next screen on why cleverness was never the whole question -- who sets the terms, what
 * "good enough" means, what trying again costs, where the files go, what you own. The
 * features come after, as the evidence for an argument already made.
 *
 * Two rules from before still hold. Nothing here needs looking up: not VRAM, not inference,
 * not quantization -- the people who need this most are bookkeepers and solicitors. And it
 * shows rather than claims: the screenshot is the real app on a real machine.
 */

const ICON = "h-5 w-5 shrink-0 stroke-accent";

function IconUnlimited() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={ICON} aria-hidden="true">
      <path d="M6.5 8.5a3.5 3.5 0 1 0 0 7c2 0 3-1.5 5.5-3.5s3.5-3.5 5.5-3.5a3.5 3.5 0 1 1 0 7c-2 0-3-1.5-5.5-3.5S8.5 8.5 6.5 8.5Z" />
    </svg>
  );
}
function IconFiles() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={ICON} aria-hidden="true">
      <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l-6-6Z" />
      <path d="M13 3v6h6M9 14h6M9 17.5h4" />
    </svg>
  );
}
function IconEasy() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={ICON} aria-hidden="true">
      <path d="M9 4.5v-1M4.5 9h-1M6.2 6.2 5.5 5.5M11.8 6.2l.7-.7M6.2 11.8l-.7.7" />
      <path d="M9.5 9.5 20 13.5l-4.6 1.9L13.5 20 9.5 9.5Z" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={ICON} aria-hidden="true">
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" strokeLinecap="round" />
    </svg>
  );
}
function IconGauge() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={ICON} aria-hidden="true">
      <path d="M4 17a8 8 0 1 1 16 0" />
      <path d="M12 17l4.5-5" strokeLinecap="round" />
    </svg>
  );
}
function IconOffline() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={ICON} aria-hidden="true">
      <path d="M3 3l18 18" strokeLinecap="round" />
      <path d="M5.5 10.5a9 9 0 0 1 4-2.3M2.5 7.5a13 13 0 0 1 4-2.6M17 8.6a9 9 0 0 1 1.6 1.1M14 5.3a13 13 0 0 1 3.6 1.8M8.8 14a5 5 0 0 1 5.4.6M12 19h.01" />
    </svg>
  );
}
function IconTeach() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={ICON} aria-hidden="true">
      <path d="M2.5 9 12 4.5 21.5 9 12 13.5 2.5 9Z" strokeLinejoin="round" />
      <path d="M6.5 11v4.5c1.5 1.4 3.4 2 5.5 2s4-.6 5.5-2V11M21.5 9v5" strokeLinecap="round" />
    </svg>
  );
}
function IconSteady() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={ICON} aria-hidden="true">
      <path d="M12 3.5 19 6.5v5c0 4.3-2.9 7.6-7 9-4.1-1.4-7-4.7-7-9v-5l7-3Z" />
      <path d="m9 12 2.2 2.2L15.5 10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconMemory() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className={ICON} aria-hidden="true">
      <rect x="4.5" y="3.5" width="15" height="17" rx="2" />
      <path d="M8 8h8M8 11.5h8M8 15h5" strokeLinecap="round" />
    </svg>
  );
}
// The icons pair with the cards in the strings by position; the words are per language,
// the pictures are not.
const INDIVIDUAL_ICONS = [IconFiles, IconMemory, IconEasy, IconUnlimited, IconPhone, IconTeach];

// The screenshots under the download, in the order of `home.preview` in the strings.
const PREVIEW_SHOTS = [
  { src: "/shots/install.webp", width: 1400, height: 878 },
  { src: "/shots/model-store.webp", width: 1140, height: 565 },
  { src: "/shots/app.webp", width: 2560, height: 1640 },
  { src: "/shots/your-style.webp", width: 806, height: 430 },
  // A phone screen is tall and narrow, so it is shown at phone size, centred.
  { src: "/shots/phone.webp", width: 645, height: 650, narrow: true },
];

function Card({ Icon, t, b, soon }: { Icon: () => React.JSX.Element; t: string; b: string; soon?: string }) {
  return (
    <div className="rounded-lg border border-edge bg-surface-1 p-5">
      <div className="flex items-center justify-between">
        <Icon />
        {soon && (
          <span className="rounded bg-surface-2 px-2 py-0.5 text-[11px] font-medium text-accent">{soon}</span>
        )}
      </div>
      <h3 className="mt-3 text-base font-medium">{t}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">{b}</p>
    </div>
  );
}

/**
 * Downloads the Windows installer directly. The Mac build is not offered yet, so it shows as
 * coming soon instead of a link. The first-run warning sits under the price, folded away.
 */
function DownloadButton({ locale, label }: { locale: Locale; label: string }) {
  const t = strings(locale);
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={SITE.installerUrl}
          className="inline-block rounded-md bg-accent px-6 py-3 font-medium text-surface-0 hover:brightness-110"
        >
          {label}
        </a>
        <span className="inline-block cursor-default rounded-md border border-edge px-6 py-3 font-medium text-ink-faint">
          {t.home.macSoon}
        </span>
      </div>
    </div>
  );
}


export function Hero({ locale }: { locale: Locale }) {
  const t = strings(locale).home;
  return (
    <>
    {/* ----------------------------------------------------------------- hero */}
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-16">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-edge bg-surface-1 px-3 py-1 text-xs text-ink-dim">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span>{t.heroBadge}</span>
      </div>

      <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
        {t.heroTitle}
      </h1>

      <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-dim sm:text-xl">
        {t.heroBody(SITE.name)}
      </p>


      <div id="download" className="mt-9 scroll-mt-20">
        <DownloadButton locale={locale} label={t.download} />
        <p className="mt-3 text-sm text-ink-dim">
          {t.trial}{" "}
          <Link href={href(locale, "/pricing")} className="underline underline-offset-4 hover:text-ink">
            {t.fromPrice}
          </Link>
        </p>
        <p className="mt-1.5 text-xs text-ink-faint">{t.requires}</p>
        <details className="group mt-3">
          <summary className="cursor-pointer list-none text-xs text-ink-faint underline underline-offset-4 hover:text-ink-dim [&::-webkit-details-marker]:hidden">
            {t.installHelp}
          </summary>
          <p className="mt-2.5 max-w-xl rounded-lg border border-edge bg-surface-1 p-3.5 text-xs text-ink-dim">
            {strings(locale).nav.smartscreen}
          </p>
        </details>
      </div>

      <PreviewTabs
        shots={t.preview.map((p, i) => ({
          tab: p.tab,
          title: p.title,
          body: p.body(SITE.name),
          alt: p.alt(SITE.name),
          ...PREVIEW_SHOTS[i],
        }))}
      />
    </section>
    </>
  );
}


export function Why({ locale }: { locale: Locale }) {
  const t = strings(locale).home;
  return (
    <>
    {/* ------------------------------------------------- the argument, in full */}
    {/* Numbered boxes in the same style as the cards above, so the page reads as one piece. */}
    <section id="why-local">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{t.whyTitle}</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-dim">{t.whyIntro}</p>

        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {t.why.map((point, i) => (
            <li key={point.t} className="rounded-lg border border-edge bg-surface-1 p-5">
              <span aria-hidden className="text-sm font-semibold tabular-nums text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-medium">{point.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">{point.b}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
    </>
  );
}



export function IndividualBlock({ locale }: { locale: Locale }) {
  const t = strings(locale).home;
  return (
    <>
    {/* ------------------------------------------------------ for individuals */}
    <section id="features" className="border-y border-edge bg-surface-1/40">
      <div className="mx-auto max-w-5xl px-6 pt-20 pb-16">
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{t.individualTitle}</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-dim">{t.individualIntro}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.individual.map((f, i) => (
            <Card key={f.t} Icon={INDIVIDUAL_ICONS[i]} t={f.t} b={f.b} soon={f.soon ? t.soon : undefined} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}


