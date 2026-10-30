import { ImageResponse } from "next/og"

// iOS no acepta SVG como apple-touch-icon: se genera un PNG
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          border: "6px solid #FEC73F",
          borderRadius: 40,
          color: "#FEC73F",
          fontSize: 72,
          fontWeight: 800,
        }}
      >
        DL
      </div>
    ),
    size,
  )
}
