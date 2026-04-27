import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#000000",
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "6px solid #FEC73F",
        }}
      >
        <span
          style={{
            color: "#FEC73F",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: -2,
            fontFamily: "sans-serif",
          }}
        >
          DL
        </span>
      </div>
    ),
    { ...size }
  )
}