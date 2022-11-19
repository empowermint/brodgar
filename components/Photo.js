// import Image from "next/image"

export default function Photo({src, alt}) {
  return (
    <div className="poem-photo">
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}
