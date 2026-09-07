import { ImageResponse } from "next/og";

import { DEFAULT_TITLE } from "@/lib/site";

/**
 * The social card, drawn in the approved identity: near-white paper, ink
 * setting, and the one brand accent, the purple to pink to orange gradient,
 * as a rule above the line and as the Loop mark.
 *
 * Generated rather than shipped as a binary so it stays in step with the
 * palette in globals.css, and so there is no separate asset to keep in sync
 * with a design that is still moving.
 */
export const alt = DEFAULT_TITLE;

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

const PAPER = "#ffffff";
const INK = "#0f172a";
const SLATE = "#475569";
const MUTED = "#64748b";
const GRADIENT = "linear-gradient(100deg, #7c3aed, #ec4899, #fb923c)";

export default function Image(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: PAPER,
          padding: "72px 80px",
        }}
      >
        {/* The gradient rule: the brand's single accent, top of the card. */}
        <div style={{ display: "flex", width: "100%", height: 10, borderRadius: 999, backgroundImage: GRADIENT }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", width: 20, height: 20, borderRadius: 999, backgroundImage: GRADIENT }} />
            <div
              style={{
                display: "flex",
                marginLeft: 14,
                fontSize: 24,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: MUTED,
              }}
            >
              Looped
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 68,
              lineHeight: 1.12,
              letterSpacing: -1.5,
              color: INK,
              maxWidth: 940,
            }}
          >
            The art of events is yours. The intelligence is Looped.
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 30,
              lineHeight: 1.4,
              color: SLATE,
              maxWidth: 900,
            }}
          >
            The AI operating system for conference and awards businesses.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: MUTED }}>
          One operating system that holds the picture of every event you run.
        </div>
      </div>
    ),
    size,
  );
}
