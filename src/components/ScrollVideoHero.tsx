import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Sparkles, Volume2, VolumeX, ShieldCheck, CheckCircle2, Upload, Video as VideoIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Generate deterministic star box-shadow strings for parallax starry night sky
const generateBoxShadows = (count: number, seed: number) => {
  let s = seed;
  const pseudoRandom = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(pseudoRandom() * 2000);
    const y = Math.floor(pseudoRandom() * 2000);
    shadows.push(`${x}px ${y}px #FFF`);
  }
  return shadows.join(', ');
};

const STAR_SHADOWS_1 = generateBoxShadows(700, 12345);
const STAR_SHADOWS_2 = generateBoxShadows(200, 67890);
const STAR_SHADOWS_3 = generateBoxShadows(100, 54321);

interface ScrollVideoHeroProps {
  onExploreClick: () => void;
  onOrderClick: () => void;
}

export const ScrollVideoHero: React.FC<ScrollVideoHeroProps> = ({
  onExploreClick,
  onOrderClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const [customVideoLoaded, setCustomVideoLoaded] = useState<boolean>(false);

  // 8-second Target Duration as configured in Nicolai Palmkvist script
  const VIDEO_DURATION = 8;

  // Render the exact visual animation sequence corresponding to the user's uploaded video
  const renderFrame = (progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;

    // 1. Cosmic Night Background (Transparent on canvas so pure CSS stars and radial gradient shine through)
    ctx.clearRect(0, 0, width, height);

    // Ground horizon & reflective pedestal floor in cosmic ambient space
    const floorY = height * 0.72;
    const floorGrad = ctx.createLinearGradient(0, floorY, 0, height);
    floorGrad.addColorStop(0, 'rgba(27, 39, 53, 0.45)');
    floorGrad.addColorStop(0.3, 'rgba(15, 23, 42, 0.78)');
    floorGrad.addColorStop(1, 'rgba(9, 10, 15, 0.96)');
    ctx.fillStyle = floorGrad;
    ctx.fillRect(0, floorY, width, height - floorY);

    // Cosmic subtle neon emerald floor horizon line
    const floorLineGrad = ctx.createLinearGradient(centerX - 350, floorY, centerX + 350, floorY);
    floorLineGrad.addColorStop(0, 'rgba(16, 185, 129, 0)');
    floorLineGrad.addColorStop(0.5, 'rgba(16, 185, 129, 0.45)');
    floorLineGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');
    ctx.strokeStyle = floorLineGrad;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(centerX - 350, floorY);
    ctx.lineTo(centerX + 350, floorY);
    ctx.stroke();

    // 2. Timeline calculations based on 8-second video sequence
    // progress 0.0 -> 0.4: Floating tilted bottle with capsules in air
    // progress 0.4 -> 0.7: Bottle uprighting and landing, barley stalks rising
    // progress 0.7 -> 1.0: Final hero shot with grounded capsules & full stalks
    const bottleTilt = Math.sin((1 - Math.min(progress * 1.5, 1)) * Math.PI * 0.5) * -0.22;
    const bottleElevation = (1 - Math.min(progress * 1.6, 1)) * -60;
    const stalksGrowth = Math.max(0, Math.min((progress - 0.25) / 0.5, 1));
    const finalSettle = Math.max(0, Math.min((progress - 0.7) / 0.3, 1));

    const centerY = floorY - 60 + bottleElevation;

    // Helper: Draw realistic green barley capsule
    const drawCapsule = (
      cx: number,
      cy: number,
      rot: number,
      scale: number,
      opacity: number = 1
    ) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.scale(scale, scale);

      // Capsule shadow
      ctx.fillStyle = 'rgba(15, 23, 42, 0.25)';
      ctx.beginPath();
      ctx.ellipse(0, 32, 14, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Capsule body (Green organic tone)
      const capGrad = ctx.createLinearGradient(-12, -28, 12, 28);
      capGrad.addColorStop(0, '#15803d');
      capGrad.addColorStop(0.4, '#16a34a');
      capGrad.addColorStop(0.8, '#14532d');

      ctx.fillStyle = capGrad;
      ctx.beginPath();
      ctx.roundRect(-10, -26, 20, 52, 10);
      ctx.fill();

      // Capsule gloss highlight
      ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
      ctx.beginPath();
      ctx.roundRect(-7, -22, 4, 44, 2);
      ctx.fill();

      // Capsule seam line
      ctx.strokeStyle = '#052e16';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(-10, 0);
      ctx.lineTo(10, 0);
      ctx.stroke();

      ctx.restore();
    };

    // Helper: Draw barley / wheatgrass stalks behind bottle
    const drawBarleyStalks = (side: 'left' | 'right', grow: number) => {
      if (grow <= 0) return;
      ctx.save();
      ctx.globalAlpha = grow;
      const baseOffsetX = side === 'left' ? -90 : 90;
      const baseX = centerX + baseOffsetX;
      const baseY = floorY - 5;

      ctx.strokeStyle = '#15803d';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';

      // Draw multiple stalks
      const stalks = side === 'left'
        ? [-25, -50, -75, -95]
        : [25, 50, 75, 95];

      stalks.forEach((offset, idx) => {
        const stalkHeight = (110 + (idx % 2) * 45) * grow;
        const curve = (offset * 0.7) * grow;

        ctx.beginPath();
        ctx.moveTo(baseX, baseY);
        ctx.quadraticCurveTo(
          baseX + curve * 0.5,
          baseY - stalkHeight * 0.6,
          baseX + curve,
          baseY - stalkHeight
        );
        ctx.stroke();

        // Grains along stalk
        const grainsCount = 8;
        for (let g = 2; g <= grainsCount; g++) {
          const t = g / grainsCount;
          const gx = baseX + curve * t;
          const gy = baseY - stalkHeight * t;

          ctx.fillStyle = '#16a34a';
          ctx.beginPath();
          ctx.ellipse(
            gx + (side === 'left' ? -4 : 4),
            gy,
            5 * grow,
            2.5 * grow,
            (side === 'left' ? -0.4 : 0.4),
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      });

      ctx.restore();
    };

    // 3. Draw Background Barley Grass Stalks
    drawBarleyStalks('left', stalksGrowth);
    drawBarleyStalks('right', stalksGrowth);

    // 4. Floating Particles (Green Aura in the air)
    for (let i = 0; i < 28; i++) {
      const pAngle = (i / 28) * Math.PI * 2 + progress * 2;
      const pRadius = 120 + Math.sin(i * 3 + progress * 4) * 70;
      const px = centerX + Math.cos(pAngle) * pRadius;
      const py = centerY + Math.sin(pAngle) * (pRadius * 0.65);
      const pSize = 1.5 + Math.sin(i + progress * 8) * 1.5;
      const pAlpha = 0.3 + Math.sin(i * 2 + progress * 6) * 0.35;

      ctx.fillStyle = `rgba(22, 163, 74, ${pAlpha})`;
      ctx.beginPath();
      ctx.arc(px, py, Math.max(1, pSize), 0, Math.PI * 2);
      ctx.fill();
    }

    // 5. Floating / Tumbling Capsules in Air (Frames 00:00 - 00:03)
    const floatingCapsules = [
      { x: centerX - 190, y: centerY - 90, rot: -0.6 + progress * 2, scale: 0.95, exitProgress: 0.8 },
      { x: centerX + 180, y: centerY - 110, rot: 0.8 - progress * 2.5, scale: 0.9, exitProgress: 0.75 },
      { x: centerX - 140, y: centerY + 60, rot: 1.2 + progress * 1.5, scale: 0.8, exitProgress: 0.65 },
      { x: centerX + 150, y: centerY + 50, rot: -1.4 - progress * 1.8, scale: 0.85, exitProgress: 0.7 },
      { x: centerX - 80, y: centerY - 140, rot: 0.3 + progress * 3, scale: 0.7, exitProgress: 0.5 },
      { x: centerX + 90, y: centerY - 150, rot: -0.5 - progress * 2.2, scale: 0.75, exitProgress: 0.55 },
    ];

    floatingCapsules.forEach(cap => {
      const fade = Math.max(0, 1 - (progress / cap.exitProgress));
      if (fade > 0) {
        drawCapsule(cap.x, cap.y, cap.rot, cap.scale, fade);
      }
    });

    // 6. Bottle Floor Reflection & Contact Shadow
    ctx.save();
    const shadowScale = 1 - bottleElevation * 0.003;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.beginPath();
    ctx.ellipse(centerX, floorY + 4, 85 * shadowScale, 18 * shadowScale, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(16, 185, 129, 0.25)';
    ctx.beginPath();
    ctx.ellipse(centerX, floorY + 6, 120 * shadowScale, 28 * shadowScale, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 7. Draw the SBG Bottle (100% Organic Salveo Barley Grass)
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(bottleTilt);

    // Bottle Plastic Gloss Base
    const bottleW = 150;
    const bottleH = 240;

    // Bottle Shape
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetY = 10;
    ctx.beginPath();
    ctx.roundRect(-bottleW / 2, -bottleH / 2, bottleW, bottleH, 24);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Bottle Neck & Green Ribbed Cap
    const capW = 110;
    const capH = 44;
    const capY = -bottleH / 2 - capH + 6;

    // Cap Gradient
    const capGrad = ctx.createLinearGradient(-capW / 2, 0, capW / 2, 0);
    capGrad.addColorStop(0, '#15803d');
    capGrad.addColorStop(0.3, '#22c55e');
    capGrad.addColorStop(0.7, '#16a34a');
    capGrad.addColorStop(1, '#14532d');

    ctx.fillStyle = capGrad;
    ctx.beginPath();
    ctx.roundRect(-capW / 2, capY, capW, capH, 8);
    ctx.fill();

    // Cap vertical grip ridges
    ctx.strokeStyle = 'rgba(20, 83, 45, 0.4)';
    ctx.lineWidth = 1.5;
    for (let r = -capW / 2 + 8; r < capW / 2 - 8; r += 7) {
      ctx.beginPath();
      ctx.moveTo(r, capY + 4);
      ctx.lineTo(r, capY + capH - 4);
      ctx.stroke();
    }

    // Bottle Label Background
    const labelW = 138;
    const labelH = 175;
    const labelY = -bottleH / 2 + 35;

    // Sky & Cloud Header on Label
    const labelGrad = ctx.createLinearGradient(0, labelY, 0, labelY + labelH);
    labelGrad.addColorStop(0, '#e0f2fe');
    labelGrad.addColorStop(0.4, '#ffffff');
    labelGrad.addColorStop(0.85, '#f0fdf4');
    labelGrad.addColorStop(1, '#dcfce7');

    ctx.fillStyle = labelGrad;
    ctx.beginPath();
    ctx.roundRect(-labelW / 2, labelY, labelW, labelH, 12);
    ctx.fill();

    // Brand: "salveowell"
    ctx.fillStyle = '#0284c7';
    ctx.font = 'bold 10px Plus Jakarta Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('salveo well', 0, labelY + 18);

    // "100% ORGANIC" Badge
    ctx.fillStyle = '#16a34a';
    ctx.font = '800 9px Plus Jakarta Sans, sans-serif';
    ctx.fillText('100% ORGANIC', 0, labelY + 30);

    // Large "SBG" Logo
    ctx.fillStyle = '#15803d';
    ctx.font = '900 36px Syne, sans-serif';
    ctx.fillText('SBG', 0, labelY + 68);

    // "SALVEO BARLEY GRASS"
    ctx.fillStyle = '#166534';
    ctx.font = 'bold 7.5px Plus Jakarta Sans, sans-serif';
    ctx.fillText('SALVEO BARLEY GRASS', 0, labelY + 80);

    // "100% Pure Barley Grass"
    ctx.fillStyle = '#15803d';
    ctx.font = 'bold 8.5px Plus Jakarta Sans, sans-serif';
    ctx.fillText('100% Pure Barley Grass', 0, labelY + 94);

    // "Contains Natural Vitamin C"
    ctx.fillStyle = '#ca8a04';
    ctx.font = 'bold 7px Plus Jakarta Sans, sans-serif';
    ctx.fillText('Contains Natural Vitamin C', 0, labelY + 106);

    // Pill badge: "120 Capsules"
    ctx.fillStyle = '#16a34a';
    ctx.beginPath();
    ctx.roundRect(26, labelY + 82, 38, 22, 4);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 6.5px Plus Jakarta Sans, sans-serif';
    ctx.fillText('NET WT.', 45, labelY + 91);
    ctx.font = '900 8px Plus Jakarta Sans, sans-serif';
    ctx.fillText('120', 45, labelY + 100);

    // Bottom badges: "NO SUGAR ADDED • VEGAN FRIENDLY"
    ctx.fillStyle = '#166534';
    ctx.font = '6px Plus Jakarta Sans, sans-serif';
    ctx.fillText('✔ NO SUGAR ADDED  ✔ VEGAN FRIENDLY', 0, labelY + 124);

    // "FOOD SUPPLEMENT"
    ctx.fillStyle = '#475569';
    ctx.font = 'bold 6.5px Plus Jakarta Sans, sans-serif';
    ctx.fillText('FOOD SUPPLEMENT', 0, labelY + 140);

    // "NO APPROVED THERAPEUTIC CLAIMS"
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 5.5px Plus Jakarta Sans, sans-serif';
    ctx.fillText('NO APPROVED THERAPEUTIC CLAIMS', 0, labelY + 154);

    // Bottle Glass Specular Reflection
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.beginPath();
    ctx.roundRect(-bottleW / 2 + 6, -bottleH / 2 + 10, 14, bottleH - 20, 6);
    ctx.fill();

    ctx.restore();

    // 8. Grounded Capsules resting in foreground (Frames 00:04 - 00:07)
    if (finalSettle > 0) {
      drawCapsule(centerX - 75, floorY + 14, -1.45, 0.9, finalSettle);
      drawCapsule(centerX + 65, floorY + 12, 1.35, 0.85, finalSettle);
      drawCapsule(centerX - 130, floorY + 18, -1.1, 0.75, finalSettle * 0.8);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!container) return;

    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      renderFrame(0);
    }

    // Configure standard Video attributes matching script
    if (video) {
      video.classList.add('video-background');
      video.removeAttribute('controls');
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      video.setAttribute('preload', 'auto');
    }

    // Touch activation for mobile devices
    const handleFirstTouch = () => {
      if (video) {
        video.play().then(() => video.pause()).catch(() => {});
      }
      document.removeEventListener('touchstart', handleFirstTouch);
    };
    document.addEventListener('touchstart', handleFirstTouch, { once: true });

    // GSAP Timeline mapped to ScrollTrigger
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'power1.inOut' },
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5, // 1.5s Inertia smooth scrub
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          renderFrame(self.progress);

          if (video && customVideoLoaded) {
            const duration = Math.min(video.duration || VIDEO_DURATION, VIDEO_DURATION);
            const targetTime = self.progress * duration;
            if (!isNaN(targetTime) && video.readyState >= 2) {
              video.currentTime = targetTime;
            }
          }
        },
      },
    });

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(scrollProgress);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('touchstart', handleFirstTouch);
      tl.kill();
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === container) t.kill();
      });
    };
  }, [customVideoLoaded]);

  // Handle custom video file upload from the user
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setCustomVideoLoaded(true);
      if (videoRef.current) {
        videoRef.current.src = url;
        videoRef.current.load();
      }
    }
  };

  return (
    <div
      id="container"
      ref={containerRef}
      className="relative w-full cosmic-space-bg text-white"
      style={{
        height: '260vh',
        background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
      }}
    >
      {/* Sticky Fullscreen Scrub Stage */}
      <div
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center"
        style={{
          background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
        }}
      >
        {/* Background Visual Layer */}
        <div
          className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
          }}
        >
          {/* Parallax Star Layers (50s, 100s, 150s animation) */}
          <div id="stars" style={{ boxShadow: STAR_SHADOWS_1 }} />
          <div id="stars2" style={{ boxShadow: STAR_SHADOWS_2 }} />
          <div id="stars3" style={{ boxShadow: STAR_SHADOWS_3 }} />

          {/* Custom Video Playback (Active when file uploaded) */}
          {customVideoLoaded && videoSrc && (
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-full object-cover block relative z-10"
              muted={isMuted}
              playsInline
              preload="auto"
            />
          )}

          {/* Real-time 3D Canvas Visualizer (Matches the uploaded Salveo Barley Grass video animation) */}
          <canvas
            ref={canvasRef}
            className={`w-full h-full object-cover relative z-10 ${
              !customVideoLoaded ? 'block' : 'hidden'
            }`}
          />

          {/* Subtle Ambient Cosmic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/85 via-transparent to-[#090A0F]/50 pointer-events-none z-10" />
        </div>

        {/* Top HUD: Video Scrub Tracker & Custom Video Loader */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-stone-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500/40 text-xs shadow-2xl">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
            <span>8s Product Scrub</span>
          </div>

          <div className="w-20 sm:w-36 bg-stone-800 h-2 rounded-full overflow-hidden border border-stone-700">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 transition-all duration-75"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>

          <span className="font-mono text-[11px] text-amber-300 font-bold">
            {Math.round(scrollProgress * 100)}%
          </span>

          <input
            type="file"
            ref={fileInputRef}
            accept="video/*"
            onChange={handleFileUpload}
            className="hidden"
          />

          <button
            onClick={() => fileInputRef.current?.click()}
            className="ml-1 px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white rounded-lg text-[10px] font-semibold flex items-center gap-1 transition-all cursor-pointer border border-stone-700"
            title="Mag-load ng sariling MP4 video file"
          >
            <Upload className="w-3 h-3 text-emerald-400" />
            <span className="hidden sm:inline">Load Video File</span>
          </button>
        </div>

        {/* Audio Mute Toggle */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2.5 bg-stone-900/90 hover:bg-stone-800 text-stone-300 hover:text-white rounded-full backdrop-blur-md border border-stone-700 transition-all cursor-pointer shadow-lg"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>

        {/* Dynamic Storytelling Text Overlays */}
        <div className="absolute inset-x-0 bottom-12 sm:bottom-16 z-20 max-w-4xl mx-auto px-4 text-center pointer-events-none">
          {scrollProgress < 0.35 && (
            <div className="animate-fade-in space-y-3">
              <span className="inline-block px-3.5 py-1 bg-emerald-950/90 text-emerald-300 border border-emerald-500/50 rounded-full text-xs font-extrabold uppercase tracking-widest backdrop-blur-sm">
                100% Pure Organic Australian Barley Grass
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-['Syne',sans-serif] tracking-tight sm:tracking-tighter text-white leading-[1.1] drop-shadow-2xl max-w-3xl mx-auto">
                Salveo Barley Grass: Buhay na Sustansya sa Bawat Kapsula
              </h2>
              <p className="text-xs sm:text-base text-stone-200 max-w-xl mx-auto drop-shadow-md">
                I-scroll pababa upang makita ang buong detalye ng 100% organic pure barley grass na subok ng libu-libong Pilipino.
              </p>
            </div>
          )}

          {scrollProgress >= 0.35 && scrollProgress < 0.70 && (
            <div className="animate-fade-in space-y-3">
              <span className="inline-block px-3.5 py-1 bg-amber-950/90 text-amber-300 border border-amber-500/50 rounded-full text-xs font-extrabold uppercase tracking-widest backdrop-blur-sm">
                Living Enzymes & Alkalizing Minerals
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-['Syne',sans-serif] tracking-tight sm:tracking-tighter text-white leading-[1.1] drop-shadow-2xl max-w-3xl mx-auto">
                Natural na Balot at Proteksyon sa Sikmura
              </h2>
              <p className="text-xs sm:text-base text-emerald-100 max-w-xl mx-auto drop-shadow-md">
                Tumutulong sa pag-neutralize ng labis na asido, pagpapagaling ng gastric lining, at maayos na panunaw.
              </p>
            </div>
          )}

          {scrollProgress >= 0.70 && (
            <div className="animate-fade-in space-y-4 pointer-events-auto">
              <span className="inline-block px-3.5 py-1 bg-emerald-950/90 text-emerald-300 border border-emerald-500/50 rounded-full text-xs font-extrabold uppercase tracking-widest backdrop-blur-sm">
                Authentic & Certified Nationwide
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-['Syne',sans-serif] tracking-tight sm:tracking-tighter text-white leading-[1.1] drop-shadow-2xl max-w-3xl mx-auto">
                Subukan ang Salveo Barley Grass Ngayon
              </h2>
              
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={onOrderClick}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-stone-950 font-black px-6 py-3.5 rounded-2xl text-sm sm:text-base transition-all shadow-xl shadow-emerald-950/80 cursor-pointer flex items-center gap-2 font-['Outfit']"
                >
                  <span>MAG-ORDER VIA COD (₱975 SRP)</span>
                  <CheckCircle2 className="w-4 h-4 text-stone-950" />
                </button>
                <button
                  onClick={onExploreClick}
                  className="bg-stone-900/90 hover:bg-stone-800 text-white font-bold px-5 py-3.5 rounded-2xl text-sm transition-all border border-stone-700 cursor-pointer flex items-center gap-2 backdrop-blur-sm"
                >
                  <span>Basahin Ang Mga Testimonya</span>
                  <ArrowDown className="w-4 h-4 text-emerald-400 animate-bounce" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Scroll Hint */}
        {scrollProgress < 0.85 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-[11px] text-stone-300 animate-pulse pointer-events-none">
            <span>I-scroll pababa para i-scrub ang video</span>
            <ArrowDown className="w-3.5 h-3.5 text-emerald-400" />
          </div>
        )}

      </div>
    </div>
  );
};

