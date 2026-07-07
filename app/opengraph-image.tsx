import { ImageResponse } from "next/og";
import { site } from "@/lib/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0a0c",
          color: "#ededf0",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: 3,
            color: "#9b9ba6",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#34d399",
            }}
          />
          OPERATIONAL — REMOTE · EU/AMERICAS
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: -2 }}>
            Juan Pablo Ramirez
          </div>
          <div style={{ fontSize: 30, color: "#7de2f0", letterSpacing: 1 }}>
            Technical Support Engineer · WebOps · AI Workflow Systems
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#6e6e7a",
            letterSpacing: 2,
          }}
        >
          <div>450+ accounts · $160K+ MRR · 4,800+ customers</div>
          <div>Málaga, ES</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
