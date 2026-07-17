import { useState, useRef, useEffect } from 'react'
import { Icon } from './ui'

export function AIAssistant() {
  const [position, setPosition] = useState({ x: window.innerWidth - 80, y: window.innerHeight - 150 })
  const [isDragging, setIsDragging] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
      setIsDragging(true)
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        // Prevent clicking when dragging
        if (!buttonRef.current?.getAttribute('data-moved')) {
            buttonRef.current?.setAttribute('data-moved', 'true')
        }
        
        const newX = e.clientX - dragOffset.x
        const newY = e.clientY - dragOffset.y
        
        // Keep within bounds
        const x = Math.max(10, Math.min(window.innerWidth - 70, newX))
        const y = Math.max(10, Math.min(window.innerHeight - 70, newY))
        
        setPosition({ x, y })
      }
    }

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false)
        // Delay resetting moved state to prevent immediate click
        setTimeout(() => {
            buttonRef.current?.removeAttribute('data-moved')
        }, 50)
      }
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, dragOffset])

  const handleClick = () => {
    if (!buttonRef.current?.getAttribute('data-moved')) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <>
      <button
        ref={buttonRef}
        onMouseDown={handleMouseDown}
        onClick={handleClick}
        className="fixed z-[9999] w-14 h-14 rounded-full bg-[#FFD700] text-white shadow-2xl flex items-center justify-center border-4 border-white cursor-pointer active:scale-95 transition-transform overflow-hidden group hover:shadow-[#FFD700]/50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          touchAction: 'none'
        }}
        aria-label="AI Assistant"
      >
        <span className="text-2xl font-black italic tracking-tighter">G</span>
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      {isOpen && (
        <div 
          className="fixed z-[9998] bg-surface-container-lowest border border-outline-variant shadow-2xl rounded-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
          style={{
            left: Math.min(position.x - 280, window.innerWidth - 340),
            top: Math.max(20, position.y - 420),
            width: '320px'
          }}
        >
          <div className="bg-[#FFD700] p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FFD700]">
                 <span className="font-bold">G</span>
              </div>
              <span className="text-white font-bold">GoldTrace AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 rounded-full p-1">
              <Icon name="close" />
            </button>
          </div>
          <div className="p-4 h-[300px] overflow-y-auto space-y-4 text-sm">
            <div className="bg-surface-container-low p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl border border-outline-variant">
              Hello! I'm your GoldTrace AI assistant. I can help you analyze suppliers and market trends to make better purchasing decisions.
            </div>
            <div className="bg-surface-container-low p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl border border-outline-variant">
              Current Insight: Gold prices are stable, but Kasempa Artisanal Co-op has increased their Grade A yield. This might be a good time to secure a batch.
            </div>
            <div className="bg-primary/10 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl ml-8 text-primary font-medium text-right">
              Show me top rated suppliers
            </div>
            <div className="bg-surface-container-low p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl border border-outline-variant">
              Mopani Specialized Refiners has the highest consistency score this month (98.4%).
            </div>
          </div>
          <div className="p-4 border-t border-outline-variant bg-surface-container-low flex gap-2">
            <input 
              type="text" 
              placeholder="Ask me anything..." 
              className="flex-grow bg-surface border border-outline-variant rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
            <button className="bg-[#FFD700] text-white p-2 rounded-full">
              <Icon name="send" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
