"use client";

import Image from "next/image";
import { useState } from "react";

type Shot = {
  tab: string;
  title: string;
  body: string;
  alt: string;
  src: string;
  width: number;
  height: number;
  narrow?: boolean;
};

/**
 * The app's screenshots right under the download, one tab each, so the first screen shows
 * the real thing: installing a model with one button, the store that picks models for this
 * computer, a chat answering from your files, teaching it your style, and the phone app.
 * Every screenshot is rendered and the ones not chosen are hidden, so all of them are in the
 * page for search engines and load without waiting for a click.
 */
export default function PreviewTabs({ shots }: { shots: Shot[] }) {
  const [current, setCurrent] = useState(0);
  const shown = shots[current];

  return (
    <div className="mt-14">
      <div className="mb-4 grid gap-4">
        <div role="tablist" className="flex w-fit max-w-full flex-wrap gap-1.5 rounded-lg border border-edge bg-surface-1 p-1 text-xs">
          {shots.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === current}
              onClick={() => setCurrent(i)}
              className={
                i === current
                  ? "rounded bg-surface-2 px-3 py-1.5 font-medium text-ink"
                  : "rounded px-3 py-1.5 text-ink-dim hover:text-ink"
              }
            >
              {i + 1}. {s.tab}
            </button>
          ))}
        </div>
        <div>
          <h2 className="text-lg font-medium">{shown.title}</h2>
          <p className="max-w-3xl text-sm text-ink-dim">{shown.body}</p>
        </div>
      </div>

      {shots.map((s, i) => (
        <div
          key={s.src}
          role="tabpanel"
          hidden={i !== current}
          className="overflow-hidden rounded-xl border border-edge bg-surface-1 shadow-2xl shadow-black/60"
        >
          {s.narrow ? (
            <div className="flex justify-center px-6 pt-8">
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                className="block h-auto w-full max-w-xs rounded-t-2xl border border-b-0 border-edge"
              />
            </div>
          ) : (
            <Image src={s.src} alt={s.alt} width={s.width} height={s.height} className="block h-auto w-full" />
          )}
        </div>
      ))}
    </div>
  );
}
