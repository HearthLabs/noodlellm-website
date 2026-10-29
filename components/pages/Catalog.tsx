import { SITE } from "@/lib/site";
import { strings, type Locale } from "@/lib/i18n";
import catalog from "@/public/catalog.json";

/**
 * The model catalog, for people: every model the app's store offers, with what it is for
 * and what it needs. Read from public/catalog.json at build time, the same file the app
 * reads, so the page changes whenever the catalog is published (each publish is a push to
 * main, which rebuilds the site).
 */

type Model = (typeof catalog.models)[number];
type I18n = Partial<Record<Locale, string>>;

/** Shown as GB because that is what a computer's specs say. Rounded up: never promise less. */
const gb = (bytes: number) => Math.max(1, Math.ceil(bytes / 1e9));
const ramGb = (mb: number) => Math.ceil(mb / 1000);

/** The smallest file is what the app picks on a machine that only just fits, so it sets the floor. */
function smallest(m: Model) {
  return m.files.reduce((a, b) => (b.size_bytes < a.size_bytes ? b : a));
}

const MODELS = catalog.models
  .filter((m) => m.published)
  .sort((a, b) => smallest(a).min_ram_mb - smallest(b).min_ram_mb || a.name.localeCompare(b.name));

const CREATORS = Object.fromEntries(catalog.creators.map((c) => [c.handle, c.display_name]));

export default function Catalog({ locale }: { locale: Locale }) {
  const t = strings(locale).catalog;

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-dim">{t.lead}</p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {MODELS.map((m) => {
          const f = smallest(m);
          const largest = Math.max(...m.files.map((x) => x.size_bytes));
          const tagline = (m.tagline_i18n as I18n)[locale] ?? m.tagline;
          const bestAt = (m.best_at_i18n as Partial<Record<Locale, string[]>>)[locale] ?? m.best_at;
          return (
            <div key={m.id} className="flex flex-col rounded-xl border border-edge bg-surface-1/50 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h2 className="text-lg font-semibold tracking-tight">{m.name}</h2>
                <span className="text-xs text-ink-faint">{t.by(CREATORS[m.creator_handle] ?? m.creator_handle)}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{tagline}</p>

              {bestAt.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {bestAt.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-sm text-ink-dim">
                      <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}

              <dl className="mt-auto grid grid-cols-2 gap-3 pt-5 text-sm">
                <div className="rounded-md bg-surface-2/60 px-3 py-2">
                  <dt className="text-xs text-ink-faint">{t.size}</dt>
                  <dd className="mt-0.5 font-medium">
                    {gb(f.size_bytes) === gb(largest) ? t.gb(gb(f.size_bytes)) : t.gbRange(gb(f.size_bytes), gb(largest))}
                  </dd>
                </div>
                <div className="rounded-md bg-surface-2/60 px-3 py-2">
                  <dt className="text-xs text-ink-faint">{t.ram}</dt>
                  <dd className="mt-0.5 font-medium">{t.ramAtLeast(ramGb(f.min_ram_mb))}</dd>
                </div>
              </dl>
              {m.vision && <p className="mt-3 text-xs font-medium text-accent">{t.vision}</p>}
            </div>
          );
        })}
      </div>

      <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-faint">{t.note}</p>
      <a
        href={SITE.installerUrl}
        className="mt-6 inline-block rounded-md bg-accent px-4 py-2 text-sm font-medium text-surface-0 hover:brightness-110"
      >
        {t.cta}
      </a>
    </main>
  );
}
