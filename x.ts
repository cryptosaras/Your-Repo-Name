'use client'

import { useState, useEffect } from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { Button } from "@/components/ui/button"
import { Twitter, Send, BarChart3, Copy, CheckCheck } from "lucide-react"
import Image from 'next/image'

export default function Component() {
  const [copied, setCopied] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const contractAddress = "2KKdxjrFewePm5frbYaKrVMczpy2w1B3Mn1iQE7hpump"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b58902d1-f1ef-4a62-b60b-2f64d2aee90e-lN5CBrYaqGHddN33SbIvyFBsZKV7yV.jpeg"
              alt="Cyber Nun Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <Parallax translateY={[-20, 20]} className="z-20 text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-glow">
              $NUN
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-400 max-w-2xl mx-auto px-4">
              Enter the Digital Monastery: Where Cyber Nuns Guard the Sacred Blockchain
            </p>
          </Parallax>
        </div>

        {/* Content Section */}
        <div className="relative z-20 container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Digital Devotion</h3>
              <p>Join the order of cyber nuns in their mission to bring divine gains to the crypto realm.</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Sacred Technology</h3>
              <p>Embrace the fusion of ancient wisdom and cutting-edge blockchain technology.</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-900/20 to-purple-900/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Blessed Tokenomics</h3>
              <p>Experience divine intervention in your portfolio with our blessed tokenomics.</p>
            </div>
          </div>

          {/* Contract Address */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="p-4 rounded-lg bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-mono truncate">{contractAddress}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={copyToClipboard}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {copied ? <CheckCheck className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="group hover:bg-cyan-400 hover:text-black transition-colors duration-300"
              asChild
            >
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-5 w-5" />
                Twitter
              </a>
            </Button>
            <Button
              variant="outline"
              className="group hover:bg-cyan-400 hover:text-black transition-colors duration-300"
              asChild
            >
              <a href="https://telegram.com" target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 h-5 w-5" />
                Telegram
              </a>
            </Button>
            <Button
              variant="outline"
              className="group hover:bg-cyan-400 hover:text-black transition-colors duration-300"
              asChild
            >
              <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">
                <BarChart3 className="mr-2 h-5 w-5" />
                Chart
              </a>
            </Button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(34, 211, 238, 0.5),
                         0 0 40px rgba(34, 211, 238, 0.3),
                         0 0 60px rgba(34, 211, 238, 0.2);
          }
          50% {
            text-shadow: 0 0 40px rgba(34, 211, 238, 0.8),
                         0 0 80px rgba(34, 211, 238, 0.5),
                         0 0 120px rgba(34, 211, 238, 0.3);
          }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </ParallaxProvider>
  )
}