export default function Logo({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <polygon points="10,10 40,10 70,40 40,70 10,40" fill="#F5D547" />
      <polygon points="30,30 60,30 90,60 60,90 30,60" fill="#3D3D3D" />
    </svg>
  )
}

