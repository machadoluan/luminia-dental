import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = () => setIsResizing(false);
  
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isResizing) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <div 
      className="relative w-full aspect-square rounded-xl overflow-hidden shadow-xl border border-gray-200 select-none cursor-ew-resize group"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Before Image (Background) */}
      <img 
        src={beforeImage} 
        alt="Antes" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
      />

      {/* After Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={afterImage} 
          alt="Depois" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
      </div>

      {/* Slider Handle Line */}
      <div 
        className="absolute inset-y-0 w-1 bg-white shadow-lg pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white text-white">
          <ChevronsLeftRight size={16} />
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
        Antes
      </div>
      <div className="absolute top-4 right-4 bg-primary/80 text-white text-xs px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
        Depois
      </div>
    </div>
  );
};

export default BeforeAfterSlider;