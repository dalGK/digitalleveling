import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#000000",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1.5px solid #FEC73F",
        }}
      >
        <span
          style={{
            color: "#FEC73F",
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: -0.5,
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