import React, { useEffect, useRef, useState } from 'react'
import './intro.css'

type Props = { onExplore: () => void }

export default function IntroScreen({ onExplore }: Props) {
  const [closing, setClosing] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const parallax = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.floor(width * DPR)
    canvas.height = Math.floor(height * DPR)
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
    ctx.scale(DPR, DPR)

    const squares: { x: number; y: number; size: number; vy: number; vx: number; alpha: number }[] = []
    const squareCount = 10
    for (let i = 0; i < squareCount; i++) {
      squares.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 80 + Math.random() * 80,
        vy: (Math.random() * 0.6 + 0.1) * (Math.random() > 0.5 ? 1 : -1),
        vx: (Math.random() * 0.3 + 0.05) * (Math.random() > 0.5 ? 1 : -1),
        alpha: 0.12 + Math.random() * 0.08
      })
    }

    function drawGrid() {
      ctx.clearRect(0, 0, width, height)
      // subtle paper-white background
      ctx.fillStyle = '#f5f5f7'
      ctx.fillRect(0, 0, width, height)

      // grid lines
      const gridSize = 24
      ctx.lineWidth = 1
      ctx.strokeStyle = 'rgba(0,0,0,0.06)'
      ctx.beginPath()
      const offsetX = parallax.current.x * 6
      const offsetY = parallax.current.y * 6
      for (let x = (offsetX % gridSize) - gridSize; x < width + gridSize; x += gridSize) {
        ctx.moveTo(x + 0.5, 0)
        ctx.lineTo(x + 0.5, height)
      }
      for (let y = (offsetY % gridSize) - gridSize; y < height + gridSize; y += gridSize) {
        ctx.moveTo(0, y + 0.5)
        ctx.lineTo(width, y + 0.5)
      }
      ctx.stroke()
    }

    function drawSquares() {
      for (const s of squares) {
        s.x += s.vx
        s.y += s.vy
        if (s.x < -s.size) s.x = width + s.size
        if (s.x > width + s.size) s.x = -s.size
        if (s.y < -s.size) s.y = height + s.size
        if (s.y > height + s.size) s.y = -s.size

        const px = s.x + parallax.current.x * 20
        const py = s.y + parallax.current.y * 20
        const grd = ctx.createLinearGradient(px, py, px + s.size, py + s.size)
        grd.addColorStop(0, `rgba(113, 97, 255, ${s.alpha})`)
        grd.addColorStop(1, `rgba(173, 160, 255, ${s.alpha * 0.9})`)
        ctx.fillStyle = grd
        ctx.fillRect(px, py, s.size, s.size)
      }
    }

    function frame() {
      drawGrid()
      drawSquares()
      rafRef.current = requestAnimationFrame(frame)
    }
    frame()

    function handleResize() {
      width = window.innerWidth
      height = window.innerHeight
      const DPR2 = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * DPR2)
      canvas.height = Math.floor(height * DPR2)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(DPR2, DPR2)
    }
    window.addEventListener('resize', handleResize)
    function onMouse(e: MouseEvent) {
      const mx = e.clientX / width - 0.5
      const my = e.clientY / height - 0.5
      // ease towards cursor for subtle parallax
      parallax.current.x += (mx - parallax.current.x) * 0.07
      parallax.current.y += (my - parallax.current.y) * 0.07
    }
    window.addEventListener('mousemove', onMouse)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  function handleExplore() {
    if (closing) return
    setClosing(true)
    window.setTimeout(() => onExplore(), 350)
  }

  return (
    <div className={"intro-root" + (closing ? " closing" : "") }>
      <canvas ref={canvasRef} className="intro-canvas" />
      <div className="intro-overlay">
        <h1 className="intro-title">TIMELAPSE</h1>
        <p className="intro-tagline">CAPTURE. CONDENSE. RELIVE.</p>
        <button className="intro-explore" onClick={handleExplore}>EXPLORE</button>
      </div>
      <div className="intro-controls">
        <button aria-label="Back" className="bubble">◁</button>
        <button aria-label="Close" className="bubble">×</button>
      </div>
    </div>
  )
}


