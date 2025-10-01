import React, { useEffect, useRef } from 'react'

type Point = {
  x: number
  y: number
  vx: number
  vy: number
}

type NeuronCanvasProps = {
  className?: string
}

// Canvas-based particle network, anchored to the left side of the hero
export default function NeuronCanvas({ className }: NeuronCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const pointsRef = useRef<Point[]>([])
  const dprRef = useRef<number>(1)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    dprRef.current = dpr

    function resize() {
      const parent = canvas.parentElement
      const width = parent ? parent.clientWidth : window.innerWidth
      const height = parent ? parent.clientHeight : window.innerHeight * 0.9
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
    }

    // Left-side region coverage (roughly 45% width, full height)
    function getRegionWidth(): number {
      const parent = canvas.parentElement
      const width = parent ? parent.clientWidth : window.innerWidth
      return Math.max(260, Math.floor(width * 0.45))
    }

    function seedPoints() {
      const regionWidth = getRegionWidth()
      const width = canvas.width
      const height = canvas.height
      const density = 0.000065 // points per pixel
      const targetCount = Math.floor(regionWidth * height * density)
      const count = Math.max(24, Math.min(140, targetCount))

      const points: Point[] = []
      for (let i = 0; i < count; i++) {
        const x = Math.random() * regionWidth * dpr
        const y = Math.random() * height
        // gentle velocity
        const vx = (Math.random() - 0.5) * 0.18 * dpr
        const vy = (Math.random() - 0.5) * 0.18 * dpr
        points.push({ x, y, vx, vy })
      }
      pointsRef.current = points
    }

    function step() {
      if (!ctx) return
      const width = canvas.width
      const height = canvas.height
      const regionWidth = getRegionWidth() * dpr

      ctx.clearRect(0, 0, width, height)

      // colors (purple theme)
      const nodeColor = 'rgba(113,97,255,0.9)'
      const lineColorNear = 'rgba(173,160,255,0.35)'
      const lineColorFar = 'rgba(173,160,255,0.10)'

      // physics + draw nodes
      const points = pointsRef.current
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        p.x += p.vx
        p.y += p.vy

        // soft bounds on left region
        if (p.x < 8 * dpr) { p.x = 8 * dpr; p.vx *= -0.9 }
        if (p.x > regionWidth - 8 * dpr) { p.x = regionWidth - 8 * dpr; p.vx *= -0.9 }
        if (p.y < 8 * dpr) { p.y = 8 * dpr; p.vy *= -0.9 }
        if (p.y > height - 8 * dpr) { p.y = height - 8 * dpr; p.vy *= -0.9 }

        // slight drift towards left to keep cluster in place
        p.vx += (-0.002 * dpr)
        p.vy += (Math.sin((p.x + p.y) * 0.0008) * 0.002)

        // cap velocity
        const maxV = 0.35 * dpr
        if (p.vx > maxV) p.vx = maxV
        if (p.vx < -maxV) p.vx = -maxV
        if (p.vy > maxV) p.vy = maxV
        if (p.vy < -maxV) p.vy = -maxV
      }

      // connections
      const maxDist = 120 * dpr
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i]
          const b = points[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < maxDist) {
            const t = 1 - dist / maxDist
            const alpha = 0.1 + t * 0.35
            ctx.strokeStyle = t > 0.5 ? lineColorNear : lineColorFar
            ctx.lineWidth = Math.max(0.5, t * 1.4)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // draw nodes after lines
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        const radius = 1.2 * dpr
        ctx.fillStyle = nodeColor
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
        ctx.fill()
        // glow
        ctx.beginPath()
        ctx.fillStyle = 'rgba(173,160,255,0.22)'
        ctx.arc(p.x, p.y, radius * 3.2, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(step)
    }

    function handleResize() {
      resize()
      seedPoints()
    }

    resize()
    seedPoints()
    rafRef.current = requestAnimationFrame(step)
    window.addEventListener('resize', handleResize)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className={"neuron-canvas" + (className ? " " + className : "")} aria-hidden="true" />
  )
}





