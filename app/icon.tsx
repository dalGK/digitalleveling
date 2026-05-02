export const size = { width: 32, height: 32 }
export const contentType = "image/svg+xml"

export default function Icon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <rect width="32" height="32" fill="#000000" rx="6"/>
    <rect x="0.75" y="0.75" width="30.5" height="30.5" fill="none" stroke="#FEC73F" stroke-width="1.5" rx="5.25"/>
    <text x="16" y="22" text-anchor="middle" fill="#FEC73F" font-size="14" font-weight="800" font-family="sans-serif">DL</text>
  </svg>`

  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml" },
  })
}
