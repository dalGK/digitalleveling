export const size = { width: 180, height: 180 }
export const contentType = "image/svg+xml"

export default function AppleIcon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
    <rect width="180" height="180" fill="#000000" rx="40"/>
    <rect x="3" y="3" width="174" height="174" fill="none" stroke="#FEC73F" stroke-width="6" rx="37"/>
    <text x="90" y="122" text-anchor="middle" fill="#FEC73F" font-size="72" font-weight="800" font-family="sans-serif">DL</text>
  </svg>`

  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml" },
  })
}
