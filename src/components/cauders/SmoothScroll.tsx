
'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
 useEffect(() => {
 const lenis = new Lenis({
 lerp: 0.1, 
 duration: 1.2, 
 smoothWheel: true,
 touchMultiplier: 2,
 })

 let rafId: number;

 function raf(time: number) {
 lenis.raf(time)
 rafId = requestAnimationFrame(raf)
 }

 rafId = requestAnimationFrame(raf)

 return () => {
 lenis.destroy()
 cancelAnimationFrame(rafId)
 }
 }, [])

 return null
}
