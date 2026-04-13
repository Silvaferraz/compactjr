import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

function TypingEffect() {
  const phrases = [
    'desenvolvimento de software',
    'sistemas web modernos e eficientes',
    'soluções empresariais sob medida',
    'transformação digital',
    'chatbots: atendimento automatizado',
    'consultoria em tecnologia',
    'aplicativos móveis inovadores',
  ]

  const cursorRef = useRef(null)
  const [currentText, setCurrentText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const timelineRef = useRef(null)

  useEffect(() => {
    const phrase = phrases[phraseIndex]

    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    const tl = gsap.timeline()

    // Digitação
    tl.to(
      {},
      {
        duration: phrase.length * 0.08,
        onUpdate: function () {
          const chars = Math.floor(this.progress() * phrase.length)
          setCurrentText(phrase.slice(0, chars))
        },
        ease: 'none',
      }
    )
      // Pausa no final
      .to({}, { duration: 0.9 })
      // Deletar
      .to(
        {},
        {
          duration: phrase.length * 0.05,
          onUpdate: function () {
            const chars = Math.floor((1 - this.progress()) * phrase.length)
            setCurrentText(phrase.slice(0, chars))
          },
          ease: 'none',
        }
      )
      // Ir para próxima palavra
      .call(() => {
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      })

    timelineRef.current = tl

    return () => {
      tl.kill()
    }
  }, [phraseIndex])

  // Cursor piscante
  useEffect(() => {
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  return (
    <div className="typing-box">
      <h2 className="h2 fw-semibold mb-0">
        Entregamos <span className="text-info">{currentText}</span>
        <span ref={cursorRef} className="cursor-blink">
          |
        </span>
      </h2>
    </div>
  )
}

export default TypingEffect