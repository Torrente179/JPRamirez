"use client";

import { useSyncExternalStore } from "react";

const format = () =>
  new Date().toLocaleTimeString("en-GB", {
    timeZone: "Europe/Madrid",
    hour: "2-digit",
    minute: "2-digit",
  });

/** Ticks on the minute boundary, so the display never lags. */
function subscribe(onChange: () => void) {
  let interval: number | undefined;
  const timeout = window.setTimeout(() => {
    onChange();
    interval = window.setInterval(onChange, 60_000);
  }, 60_000 - (Date.now() % 60_000));
  return () => {
    window.clearTimeout(timeout);
    if (interval) window.clearInterval(interval);
  };
}

/** Live local time in Málaga. The server renders a fixed-width placeholder. */
export function MalagaClock({ className }: { className?: string }) {
  const time = useSyncExternalStore(subscribe, format, () => "--:--");

  return (
    <time className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {time}
    </time>
  );
}
