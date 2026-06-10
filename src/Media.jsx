import { useEffect, useRef } from 'react'

// Renderizza un asset video o immagine in modo uniforme.
// IMPORTANTE: i video NON usano autoPlay. Il play/pausa è gestito da App e
// avviene SOLO sulla slide attiva — così non si saturano i decoder video di
// Chrome (con troppi video insieme alcuni si bloccano e non avanzano).
export default function Media({ media, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    // forza la proprietà muted (l'attributo da solo non basta in React)
    v.muted = true
    v.defaultMuted = true
  }, [])

  if (!media) return null

  if (media.type === 'video') {
    const restart = (e) => {
      const v = e.currentTarget
      v.currentTime = 0
      const p = v.play()
      if (p && p.catch) p.catch(() => {})
    }
    return (
      <video
        ref={ref}
        className={`media-el ${className}`}
        src={media.src}
        poster={media.poster}
        muted
        loop
        playsInline
        preload="auto"
        onEnded={restart}
      />
    )
  }
  return <img className={`media-el ${className}`} src={media.src} alt={media.alt || ''} />
}
