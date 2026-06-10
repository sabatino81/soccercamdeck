import { useCallback, useEffect, useRef, useState } from 'react'
import { slides } from './slides.jsx'
import Script from './Script.jsx'

export default function App() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState('forward')
  const [view, setView] = useState(() =>
    window.location.hash === '#script' ? 'script' : 'deck',
  )
  const lockedRef = useRef(false)
  const deckRef = useRef(null)
  const total = slides.length

  // tieni la vista sincronizzata con l'hash dell'URL (condivisibile)
  const viewRef = useRef(view)
  useEffect(() => {
    viewRef.current = view
  }, [view])
  useEffect(() => {
    const onHash = () =>
      setView(window.location.hash === '#script' ? 'script' : 'deck')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  const showScript = () => {
    window.location.hash = 'script'
  }
  const showDeck = () => {
    if (window.location.hash) window.location.hash = ''
    else setView('deck')
  }

  // play dei video della slide n / pausa di tutti gli altri.
  // Chiamato DENTRO l'handler del gesto utente (click/tasto/tap): così il
  // browser consente sempre il play anche se l'autoplay è bloccato.
  const syncVideos = useCallback((n) => {
    const el = deckRef.current
    if (!el) return
    el.querySelectorAll('.slide').forEach((slideEl, i) => {
      slideEl.querySelectorAll('video').forEach((v) => {
        if (i === n) {
          v.muted = true
          const p = v.play()
          if (p && p.catch) p.catch(() => {})
        } else {
          v.pause()
        }
      })
    })
  }, [])

  const go = useCallback(
    (target) => {
      if (lockedRef.current) return
      const n = Math.max(0, Math.min(target, total - 1))
      syncVideos(n) // dentro il gesto utente
      setIndex((cur) => {
        if (n === cur) return cur
        setDirection(n >= cur ? 'forward' : 'reverse')
        lockedRef.current = true
        setTimeout(() => {
          lockedRef.current = false
        }, 520)
        return n
      })
    },
    [total, syncVideos],
  )

  const next = useCallback(() => go(indexRef.current + 1), [go])
  const prev = useCallback(() => go(indexRef.current - 1), [go])

  // ref mirror so keyboard/gesture handlers always read the latest index
  const indexRef = useRef(index)
  useEffect(() => {
    indexRef.current = index
  }, [index])

  // ---- keyboard ----
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 's' || e.key === 'S') {
        viewRef.current === 'script' ? showDeck() : showScript()
        return
      }
      if (viewRef.current !== 'deck') return // in script: lascia scorrere la pagina
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowLeft') {
        prev()
      } else if (e.key === 'Home') {
        go(0)
      } else if (e.key === 'End') {
        go(total - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, go, total])

  // ---- pointer / swipe / tap-zone ----
  useEffect(() => {
    let startX = null
    let startY = null
    let moved = false
    let lastGesture = 0

    const onDown = (e) => {
      if (viewRef.current !== 'deck') return
      startX = e.clientX
      startY = e.clientY
      moved = false
    }
    const onMove = (e) => {
      if (startX === null) return
      const dx = e.clientX - startX
      const dy = e.clientY - startY
      if (Math.abs(dx) > 12 || Math.abs(dy) > 12) moved = true
    }
    const onUp = (e) => {
      if (viewRef.current !== 'deck') return
      const now = Date.now()
      if (now - lastGesture < 260) {
        startX = null
        return
      }
      const x = e.clientX
      if (startX !== null) {
        const dx = x - startX
        const dy = e.clientY - startY
        if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.25) {
          dx < 0 ? next() : prev()
          lastGesture = now
          startX = null
          return
        }
      }
      if (!moved) {
        // ignore taps on interactive controls (buttons)
        if (!e.target.closest('button')) {
          x >= window.innerWidth / 2 ? next() : prev()
          lastGesture = now
        }
      }
      startX = null
      startY = null
    }

    window.addEventListener('pointerdown', onDown, { passive: true })
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerup', onUp, { passive: true })
    return () => {
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [next, prev])

  // riproduci i video solo nella slide attiva, metti in pausa le altre:
  // così il video gira in loop finché resti su quella slide
  useEffect(() => {
    if (view !== 'deck') return
    syncVideos(index)
  }, [index, view, syncVideos])

  const stateFor = (i) => {
    if (i === index) return `active ${direction}`
    if (i === index - 1) return 'prev'
    if (i === index + 1) return 'next'
    return 'far'
  }

  return (
    <>
      <div className="ambient">
        <div className="orb one" />
        <div className="orb two" />
        <div className="orb three" />
        <div className="orb four" />
      </div>
      <div className="noise" />

      {view === 'script' ? (
        <Script onBack={showDeck} />
      ) : (
        <>
      <div className="progress" style={{ width: `${((index + 1) / total) * 100}%` }} />
      <div className="touchhint">tap destra avanti · tap sinistra indietro</div>

      <main className="deck" ref={deckRef}>
        {slides.map((slide, i) => (
          <section key={i} className={`slide ${stateFor(i)}`}>
            {slide.bg && (
              <div className="slidebg">
                <img className="media-el" src={slide.bg} alt="" />
              </div>
            )}
            {slide.field && <div className="field" />}
            <div className="content">{slide.content}</div>
          </section>
        ))}
      </main>

      <button
        className="navbtn left"
        onClick={prev}
        disabled={index === 0}
        aria-label="Slide precedente"
      >
        ‹
      </button>
      <button
        className="navbtn right"
        onClick={next}
        disabled={index === total - 1}
        aria-label="Slide successiva"
      >
        ›
      </button>

      <div className="dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'on' : ''}`}
            onClick={() => go(i)}
            aria-label={`Vai alla slide ${i + 1}`}
          />
        ))}
      </div>
        </>
      )}
    </>
  )
}
