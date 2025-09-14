import React, { useEffect, useRef, useState } from 'react'
import './intro.css'

type Props = { onExplore: () => void }

export default function IntroScreen({ onExplore }: Props) {
  const [closing, setClosing] = useState(false)
  const [loading] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const parallax = useRef({ x: 0, y: 0 })
  const hoverLayerRef = useRef<HTMLDivElement | null>(null)
  const loadRafRef = useRef<number | null>(null)

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

    // no drifting squares; only static grid + hover layer

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

    // nothing to draw besides the grid each frame

    function frame() {
      drawGrid()
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
    const grid = 24
    let lastCellKey = ''
    function spawnTile(cx: number, cy: number) {
      const layer = hoverLayerRef.current
      if (!layer) return
      const tile = document.createElement('div')
      tile.className = 'flip-tile'
      tile.style.left = cx + 'px'
      tile.style.top = cy + 'px'
      tile.style.width = grid + 'px'
      tile.style.height = grid + 'px'
      layer.appendChild(tile)
      // auto remove after animation
      window.setTimeout(() => {
        tile.style.pointerEvents = 'none'
        tile.remove()
      }, 900)
      // keep children count modest
      const max = 28
      while (layer.children.length > max) {
        layer.firstChild?.remove()
      }
    }

    function onMouse(e: MouseEvent) {
      const mx = e.clientX / width - 0.5
      const my = e.clientY / height - 0.5
      // ease towards cursor for subtle parallax
      parallax.current.x += (mx - parallax.current.x) * 0.07
      parallax.current.y += (my - parallax.current.y) * 0.07

      // grid-aligned hover tile spawn
      const cellX = Math.floor(e.clientX / grid) * grid
      const cellY = Math.floor(e.clientY / grid) * grid
      const key = cellX + 'x' + cellY
      if (key !== lastCellKey) {
        spawnTile(cellX, cellY)
        lastCellKey = key
      }
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
    onExplore()
  }

  return (
    <div className={"intro-root" + (closing ? " closing" : "") }>
      <canvas ref={canvasRef} className="intro-canvas" />
      <div ref={hoverLayerRef} className="hover-layer" />
      <div className="intro-overlay">
        <h1 className="intro-title">VANSH SONI</h1>
        <p className="intro-tagline">BUILDING FUTURE WITH AI</p>
        <button className="intro-explore" onClick={handleExplore}>EXPLORE</button>
      </div>
      <div className="intro-controls">
        <button aria-label="Back" className="bubble">◁</button>
        <button aria-label="Close" className="bubble">×</button>
      </div>
    </div>
  )
}


