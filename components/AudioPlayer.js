export default function AudioPlayer({src}) {
  return (
    <audio controls>
      <source src={src} type="audio/mp3" />
      <a class="button" type="audio/mp3" href={src} download>Download Track Audio (MP3)</a>
    </audio>
  )
}
