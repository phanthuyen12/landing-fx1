import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  TrendingUp, 
  Users, 
  Activity, 
  Wallet, 
  Bell, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft,
  ChevronRight,
  ArrowUpRight, 
  CheckCircle,
  AlertTriangle,
  MessageSquare,
  Compass,
  Award,
  Maximize2,
  X,
  Play,
  Volume2
} from 'lucide-react';
import './App.css';

function App() {
  // State for FAQ accordion
  const [activeFaq, setActiveFaq] = useState(null);
  
  // State for mobile sticky bar visibility
  const [showStickyBar, setShowStickyBar] = useState(false);
  
  // State for Lightbox (Screenshot pop-up)
  const [lightboxImg, setLightboxImg] = useState(null);

  // State for Video Player
  const [activeVideo, setActiveVideo] = useState('/videos/0422(1).mp4');
  
  // List of community proof screenshots
  const communityImages = [
    { src: '/images/community/photo_7_2026-05-06_08-57-07.jpg', title: 'Whale Tracker Signal Profit' },
    { src: '/images/community/photo_10_2026-05-06_08-57-07.jpg', title: 'MEME Coin 10x Entry Point' },
    { src: '/images/community/photo_11_2026-05-06_08-57-07.jpg', title: '+580% SOL Profit Share' },
    { src: '/images/community/photo_12_2026-05-06_08-57-07.jpg', title: 'Insider Wallet Accumulation' },
    { src: '/images/community/photo_13_2026-05-06_08-57-07.jpg', title: 'DexScreener Peak Target Alert' },
    { src: '/images/community/photo_14_2026-05-06_08-57-07.jpg', title: 'Solana Smart Money Scanner' },
  ];

  // List of customer feedback screenshots (all 12 files)
  const customerImages = [
    { src: '/images/customers/photo_1_2026-05-06_08-57-07.jpg', user: 'Alex L.', quote: 'Thanks CoinLye team, entered $WIF early!' },
    { src: '/images/customers/photo_1_2026-05-06_08-59-08.jpg', user: 'Victor T.', quote: 'VIP signals are incredibly fast!' },
    { src: '/images/customers/photo_2_2026-05-06_08-57-07.jpg', user: 'David V.', quote: 'First time trading on-chain, easy +8 SOL.' },
    { src: '/images/customers/photo_2_2026-05-06_08-59-08.jpg', user: 'Mike H.', quote: 'Highly accurate, 5/5 stars!' },
    { src: '/images/customers/photo_3_2026-05-06_08-57-07.jpg', user: 'Sarah H.', quote: 'Copy trading bot works flawlessly 24/7!' },
    { src: '/images/customers/photo_4_2026-05-06_08-57-07.jpg', user: 'Brian Q.', quote: 'Always trust your process, +500%!' },
    { src: '/images/customers/photo_5_2026-05-06_08-57-07.jpg', user: 'Justin D.', quote: 'Already made back VIP fee in 2 days!' },
    { src: '/images/customers/photo_6_2026-05-06_08-57-07.jpg', user: 'Mary M.', quote: 'The community support is amazing!' },
    { src: '/images/customers/photo_8_2026-05-06_08-57-07.jpg', user: 'Daniel D.', quote: 'Easiest profit I have ever made.' },
    { src: '/images/customers/photo_9_2026-05-06_08-57-07.jpg', user: 'Bella B.', quote: 'Signals are very clear with detailed SL/TP!' },
    { src: '/images/customers/photo_16_2026-05-06_08-57-07.jpg', user: 'Kevin T.', quote: 'Solana trading feels so simple now.' },
    { src: '/images/customers/photo_19_2026-05-06_08-57-07.jpg', user: 'Chloe M.', quote: 'I recommend this to all my friends!' }
  ];

  // List of available feedback videos
  const feedbackVideos = [
    { path: '/videos/0422(1).mp4', label: 'VIP Feedback #1' },
    { path: '/videos/0422 (2)(1).mp4', label: 'VIP Feedback #2' },
    { path: '/videos/0422 (2)(3).mp4', label: 'VIP Feedback #3' },
    { path: '/videos/IMG_7535.MP4', label: 'Live Client Proof' },
  ];

  // State for simulated real-time whale transactions tracker
  const [whaleTxList, setWhaleTxList] = useState([
    { id: 1, wallet: 'H8k4...p9Wx', action: 'BOUGHT', amount: '45.8 SOL', token: '$WIF', time: 'Just now', profit: '+412%' },
    { id: 2, wallet: '4vNz...K7jL', action: 'BOUGHT', amount: '120.5 SOL', token: '$POPCAT', time: '1 min ago', profit: '+1,022%' },
    { id: 3, wallet: 'G9yR...m2Ts', action: 'TAKE PROFIT', amount: '350.0 SOL', token: '$BOME', time: '3 mins ago', profit: '+681%' },
  ]);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // State for Customer Carousel Slides (Shows 3 at once, infinitely loops)
  const [custStartIndex, setCustStartIndex] = useState(0);

  const nextCustSlide = () => {
    setCustStartIndex((prev) => (prev + 1) % customerImages.length);
  };

  const prevCustSlide = () => {
    setCustStartIndex((prev) => (prev - 1 + customerImages.length) % customerImages.length);
  };

  // Auto-play customer slides every 4.5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextCustSlide();
    }, 4500);
    return () => clearInterval(slideInterval);
  }, []);

  // Helper to retrieve the 3 currently active customer slides
  const getActiveCustSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      slides.push(customerImages[(custStartIndex + i) % customerImages.length]);
    }
    return slides;
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate real-time whale wallet updates
  useEffect(() => {
    const wallets = ['D6kR...f4Ty', 'A8hM...k9Qs', '8pTv...e3Wx', 'J4oL...v7Bs', 'F2yS...b8Lp'];
    const tokens = ['$BONK', '$MEW', '$SLERF', '$WIF', '$DEGEN', '$GIGA', '$BOME'];
    const actions = ['BOUGHT', 'BOUGHT', 'TAKE PROFIT'];
    
    const interval = setInterval(() => {
      const randomWallet = wallets[Math.floor(Math.random() * wallets.length)];
      const randomToken = tokens[Math.floor(Math.random() * tokens.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const randomAmount = (Math.random() * 150 + 10).toFixed(1);
      const randomProfit = `+${Math.floor(Math.random() * 800 + 100)}%`;
      
      const newTx = {
        id: Date.now(),
        wallet: randomWallet,
        action: randomAction,
        amount: `${randomAmount} SOL`,
        token: randomToken,
        time: 'Just now',
        profit: randomProfit
      };
      
      setWhaleTxList(prev => [newTx, ...prev.slice(0, 4)]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background elements */}
      <div className="grid-overlay"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Main Landing Content */}
      <div className="app-container">
        
        {/* HEADER / NAVIGATION */}
        <header className="container app-header" style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(168, 85, 247, 0.15)' }}>
          <div className="header-logo-container" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/logo.png" alt="CoinLye Logo" className="header-logo-img" style={{ height: '42px', width: 'auto', filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.5))' }} />
            <span className="header-logo-text" style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '0.05em' }}>COINLYE <span className="text-purple-neon">VIP</span></span>
          </div>
          <div className="header-actions" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <span className="badge-neon header-badge" style={{ textTransform: 'uppercase', fontSize: '0.75rem' }}>
              <span className="text-purple-neon" style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#A855F7', marginRight: '4px', animation: 'pulseGlow 1.5s infinite' }}></span>
              SOLANA LIVE TRACKING
            </span>
            <a href="https://t.me/Memedegensclub" target="_blank" rel="noopener noreferrer" className="btn-neon header-btn" style={{ padding: '8px 20px', fontSize: '0.85rem', animation: 'none', border: '1px solid rgba(168, 85, 247, 0.5)' }}>
              JOIN VIP
            </a>
          </div>
        </header>

        {/* SECTION 1 — HERO SECTION */}
        <section id="hero" className="container" style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="hero-wrapper">
            <div className="hero-content">
              <div style={{ display: 'flex' }}>
                <span className="badge-neon">
                  <Zap size={14} style={{ marginRight: '4px' }} /> Early Alpha Signals
                </span>
              </div>
              
              <h1 className="title-neon">
                Catch Meme Coins <br />
                <span className="text-purple-neon text-flicker">50x – 100x</span> <br />
                <span className="text-gradient">Before the Crowd Discovers Them</span>
              </h1>
              
              <p style={{ fontSize: '1.15rem', lineHeight: '1.6', maxWidth: '580px' }}>
                A VIP community tracking whale wallets, smart money flow, and high-potential Solana meme coins. 
                Get early signals, enter fast, and maximize profits before the market explodes.
              </p>

              <div style={{ marginTop: '16px' }}>
                <a href="https://t.me/Memedegensclub" target="_blank" rel="noopener noreferrer" className="btn-neon">
                  JOIN VIP NOW <ArrowUpRight size={20} />
                </a>
              </div>

              {/* VIP Stats Ticker inside Hero */}
              <div style={{ display: 'flex', gap: '30px', marginTop: '30px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px' }}>
                <div>
                  <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff' }}>+1,022%</h4>
                  <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Peak ROI Signal</p>
                </div>
                <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '30px' }}>
                  <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff' }}>400+</h4>
                  <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Elite Members</p>
                </div>
                <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '30px' }}>
                  <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff' }}>&lt; 5m</h4>
                  <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Alert Latency</p>
                </div>
              </div>
            </div>

            {/* HERO VISUALS (Floating glass cards, wallets, pepe, charts) */}
            <div className="hero-visual">
              
              {/* Solana Chart Line Animation background */}
              <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 1, opacity: 0.35 }}>
                <svg viewBox="0 0 500 300" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M 10,260 Q 90,240 130,170 T 250,190 T 380,80 T 490,20" 
                    stroke="url(#purpleGlow)" 
                    strokeWidth="4" 
                    fill="none"
                    className="svg-chart-path"
                  />
                  <defs>
                    <linearGradient id="purpleGlow" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Pepe floating asset */}
              <div className="pepe-floating animate-float" style={{ transform: 'scale(1.1)' }}>
                <svg className="pepe-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#14532D" stroke="#22C55E" strokeWidth="2" />
                  <path d="M 25,42 Q 35,32 45,42" stroke="#22C55E" strokeWidth="3" fill="none" />
                  <path d="M 55,42 Q 65,32 75,42" stroke="#22C55E" strokeWidth="3" fill="none" />
                  <rect x="20" y="38" width="60" height="15" rx="3" fill="#0B0B10" stroke="#A855F7" strokeWidth="2" />
                  <line x1="20" y1="45" x2="80" y2="45" stroke="#A855F7" strokeWidth="1" />
                  <path d="M 32,65 Q 50,80 68,65" stroke="#22C55E" strokeWidth="4" fill="none" />
                  <path d="M 35,16 L 42,28 L 50,14 L 58,28 L 65,16 L 60,32 L 40,32 Z" fill="#EAB308" filter="drop-shadow(0 0 5px #EAB308)" />
                </svg>
              </div>

              {/* ROI Badge +1000% */}
              <div className="glass-card animate-float-reverse" style={{ position: 'absolute', top: '15%', left: '42%', padding: '8px 16px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--color-green)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-green)' }}></span>
                <span style={{ fontWeight: '800', color: 'var(--color-green)' }}>+1000% ROI</span>
              </div>

              {/* Floating TG Chat Mockup (Glass Card 1) */}
              <div className="glass-card floating-tg-card tg-card-1 animate-float">
                <div className="tg-header">
                  <img src="/logo.png" alt="CoinLye Logo" style={{ height: '24px', width: 'auto' }} />
                  <div>
                    <div className="tg-title">COINLYE VIP ALERTS</div>
                    <p style={{ fontSize: '0.65rem' }}>412 subscribers</p>
                  </div>
                </div>
                <div className="tg-msg">
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>🚨 SOLANA WHALE DETECTED:</span>
                  <p style={{ margin: '4px 0 0 0' }}>Wallet <span style={{ color: '#fff', fontWeight: 'bold' }}>Hv89...xT2</span> accumulated <span style={{ color: '#22C55E', fontWeight: 'bold' }}>180,000 $WIF</span> in 5 mins.</p>
                  <div className="tg-signal-box">
                    <div style={{ color: 'var(--color-primary)' }}>[VIP SIGNAL #73]</div>
                    <div>Token: $WIF (Solana)</div>
                    <div>Entry: $2.14</div>
                    <div style={{ color: '#22C55E' }}>Target: $12.50+ (5.8x)</div>
                  </div>
                </div>
              </div>

              {/* Phantom Wallet UI Mockup */}
              <div className="glass-card floating-wallet animate-float-reverse" style={{ border: '1px solid rgba(168, 85, 247, 0.4)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#7C3AED' }}></div>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700' }}>Phantom VIP</span>
                  </div>
                  <span className="badge-green" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>SOLANA</span>
                </div>
                <p style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>Total Balance</p>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '10px', color: '#fff' }}>$48,912.45</h3>
                
                {/* Simulated asset list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                    <span>SOL</span>
                    <span style={{ color: '#fff' }}>148.5 SOL</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '6px' }}>
                    <span>$WIF</span>
                    <span style={{ color: '#22C55E', fontWeight: 'bold' }}>+$18,400 (7.2x)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2 — SOCIAL PROOF & VERIFIED COMMUNITY PROOF (REAL SCENE SHOTS) */}
        <section id="results" className="container" style={{ borderTop: '1px solid rgba(168, 85, 247, 0.1)' }}>
          <div className="section-title">
            <span className="badge-neon" style={{ marginBottom: '12px' }}>
              <Award size={14} style={{ marginRight: '4px' }} /> Proof of Performance
            </span>
            <h2 className="title-neon" style={{ fontSize: '2.5rem' }}>
              REAL RESULTS FROM <span className="text-purple-neon">VIP MEMBERS</span>
            </h2>
            <p style={{ marginTop: '10px' }}>
              Members in our VIP community consistently take profits from early meme coin signals. 
              Click any verified screenshot below to expand and view full transaction receipts.
            </p>
          </div>

          {/* Interactive Screen Grid (VIP Community Photos) */}
          <div className="community-grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            {communityImages.map((img, index) => (
              <div 
                key={index} 
                className="glass-card" 
                style={{ overflow: 'hidden', cursor: 'zoom-in', position: 'relative', display: 'flex', flexDirection: 'column' }}
                onClick={() => setLightboxImg(img.src)}
              >
                <div style={{ width: '100%', overflow: 'hidden' }}>
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.8, transition: 'all 0.3s ease' }} 
                    onMouseEnter={(e) => { e.target.style.transform = 'scale(1.03)'; e.target.style.opacity = '1'; }}
                    onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.opacity = '0.8'; }}
                  />
                </div>
                <div style={{ padding: '16px', background: 'rgba(11,11,16,0.95)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#fff' }}>{img.title}</span>
                  <span className="badge-neon" style={{ fontSize: '0.65rem', padding: '4px 12px' }}>
                    <Maximize2 size={10} style={{ marginRight: '4px' }} /> VIEW
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* LIVE CHAT STYLE TICKER / REALTIME WHALE FEED */}
          <div className="glass-card live-chat-box" style={{ background: 'rgba(11, 11, 16, 0.5)', marginTop: '40px' }}>
            <div className="live-chat-title">
              <span className="text-purple-neon" style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#A855F7', animation: 'pulseGlow 1.5s infinite' }}></span>
              LIVE VIP ROOM CHAT & FEEDS
            </div>
            
            <div className="chat-ticker">
              <div className="chat-bubble highlight">
                <span className="badge-green" style={{ fontSize: '0.65rem' }}>FEED</span>
                <div style={{ flex: 1 }}>
                  <span className="chat-user">Whale Wallet Tracker: </span>
                  <span className="chat-text">Wallet <code style={{ color: 'var(--color-primary)' }}>4vNz...K7jL</code> took profit of <span style={{ color: '#22C55E', fontWeight: 'bold' }}>+120 SOL</span> on $POPCAT (+1,022% ROI).</span>
                </div>
              </div>

              <div className="chat-bubble">
                <div className="tg-avatar" style={{ width: '24px', height: '24px', fontSize: '0.65rem' }}>AN</div>
                <div style={{ flex: 1 }}>
                  <span className="chat-user">Alex N.: </span>
                  <span className="chat-text">"DONE +16 SOL from the latest $WIF signal. VIP group is phenomenal!"</span>
                </div>
              </div>

              <div className="chat-bubble">
                <div className="tg-avatar" style={{ width: '24px', height: '24px', fontSize: '0.65rem', background: '#7C3AED' }}>MT</div>
                <div style={{ flex: 1 }}>
                  <span className="chat-user">Michael T.: </span>
                  <span className="chat-text">"STILL HOLDING 50% bag. This is literally free money printing at this point."</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — HOW THE SYSTEM WORKS */}
        <section id="how-it-works" className="container" style={{ borderTop: '1px solid rgba(168, 85, 247, 0.1)' }}>
          <div className="section-title">
            <span className="badge-neon" style={{ marginBottom: '12px' }}>
              <Activity size={14} style={{ marginRight: '4px' }} /> System Algorithm
            </span>
            <h2 className="title-neon" style={{ fontSize: '2.5rem' }}>
              HOW WE FIND <span className="text-purple-neon">EARLY OPPORTUNITIES</span>
            </h2>
            <p style={{ marginTop: '10px' }}>
              Our proprietary scanning models constantly monitor the Solana blockchain to capture explosive meme coins before they go retail.
            </p>
          </div>

          <div className="steps-grid">
            <div className="glass-card step-card">
              <div className="step-num">01</div>
              <h3>TRACK WHALE WALLETS</h3>
              <p>We monitor smart money wallets and large traders on Solana who consistently generate 100x gains.</p>
              <ul>
                <li>Insiders profiling</li>
                <li>Dev wallets monitoring</li>
                <li>Whale wallet accumulation</li>
              </ul>
            </div>

            <div className="glass-card step-card" style={{ borderColor: 'var(--color-primary)' }}>
              <div className="step-num" style={{ background: 'var(--color-primary)', color: '#fff' }}>02</div>
              <h3>DETECT HIGH-POTENTIAL TOKENS</h3>
              <p>Our proprietary scanning bots analyze multiple key metrics on-chain instantly:</p>
              <ul>
                <li>Volume spikes</li>
                <li>Liquidity growth</li>
                <li>Market cap expansion</li>
                <li>Momentum acceleration</li>
              </ul>
            </div>

            <div className="glass-card step-card">
              <div className="step-num">03</div>
              <h3>EARLY SIGNAL DELIVERY</h3>
              <p>Signals are sent directly to the private VIP Telegram channel long before the general public discovers them.</p>
              <ul>
                <li>Direct Telegram push</li>
                <li>Under 2-second delay</li>
                <li>Clear entry & exit specs</li>
              </ul>
            </div>

            <div className="glass-card step-card">
              <div className="step-num">04</div>
              <h3>PROFIT MANAGEMENT</h3>
              <p>We actively manage positions with real-time updates so you can lock in massive returns safely.</p>
              <ul>
                <li>Take profit updates</li>
                <li>Risk control alerts</li>
                <li>Entry & exit optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* NEW SECTION: REAL VIDEO FEEDBACK PROOF (Customer Video Feedback) */}
        <section id="video-feedback" className="container" style={{ borderTop: '1px solid rgba(168, 85, 247, 0.1)' }}>
          <div className="section-title">
            <span className="badge-neon" style={{ marginBottom: '12px' }}>
              <Play size={12} style={{ marginRight: '4px' }} /> Video Testimonials
            </span>
            <h2 className="title-neon" style={{ fontSize: '2.5rem' }}>
              REAL VIDEO PROOF FROM <span className="text-purple-neon">OUR VIPs</span>
            </h2>
            <p style={{ marginTop: '10px' }}>
              Listen directly to our active VIP members sharing their actual trading setups and daily profit withdrawals.
            </p>
          </div>

          <div className="video-feedback-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px', alignItems: 'center' }}>
            {/* Custom Video Player Panel */}
            <div className="glass-card" style={{ padding: '16px', position: 'relative', border: '1px solid var(--color-primary)', borderRadius: '24px' }}>
              <video 
                key={activeVideo}
                src={activeVideo} 
                controls 
                autoPlay 
                muted
                style={{ width: '100%', borderRadius: '16px', display: 'block', maxHeight: '480px', objectFit: 'contain', background: '#000' }}
              />
              <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: '700', fontSize: '1rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Volume2 size={16} className="text-purple-neon" /> Playing: {feedbackVideos.find(v => v.path === activeVideo)?.label}
                </span>
                <span className="badge-neon">VERIFIED FEEDBACK ✓</span>
              </div>
            </div>

            {/* Video selector list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Select Feedback Video:</h3>
              {feedbackVideos.map((vid, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveVideo(vid.path)}
                  className="glass-card"
                  style={{ 
                    padding: '16px', 
                    cursor: 'pointer', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '16px', 
                    border: activeVideo === vid.path ? '1px solid var(--color-primary)' : '1px solid var(--glass-border)',
                    background: activeVideo === vid.path ? 'rgba(168, 85, 247, 0.12)' : 'var(--glass-bg)'
                  }}
                >
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: activeVideo === vid.path ? 'var(--color-primary)' : 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyCenter: 'center', flexShrink: 0, justifyContent: 'center' }}>
                    <Play size={16} fill={activeVideo === vid.path ? '#fff' : 'none'} stroke={activeVideo === vid.path ? 'none' : 'var(--color-primary)'} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#fff' }}>{vid.label}</h4>
                    <p style={{ fontSize: '0.8rem' }}>Solana Meme Trading Profit Review</p>
                  </div>
                </div>
              ))}
              <div style={{ padding: '16px', background: 'rgba(34, 197, 94, 0.08)', borderRadius: '16px', border: '1px dashed #22C55E' }}>
                <p style={{ fontSize: '0.85rem', color: '#fff' }}>
                  💡 <strong>Note:</strong> All feedback is gathered from genuine active users sharing screens in our live trading channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — VIP BENEFITS & TESTIMONIAL CARDS (Customer Photos) */}
        <section id="benefits" className="container" style={{ borderTop: '1px solid rgba(168, 85, 247, 0.1)' }}>
          <div className="section-title">
            <span className="badge-neon" style={{ marginBottom: '12px' }}>
              <Users size={14} style={{ marginRight: '4px' }} /> SUCCESS STORIES
            </span>
            <h2 className="title-neon" style={{ fontSize: '2.5rem' }}>
              CLIENT SUCCEED <span className="text-purple-neon">WITH COINLYE</span>
            </h2>
            <p style={{ marginTop: '10px' }}>
              Read the real chats and experiences shared directly by members using our whale tracker and early signal channels.
            </p>
          </div>

          {/* Looping Testimonials Carousel (Shows 3 images at once, infinitely loops) */}
          <div className="carousel-parent-wrapper" style={{ position: 'relative', padding: '0 60px', marginBottom: '60px' }}>
            
            {/* Carousel track containing exactly 3 active slides */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }} className="carousel-grid-responsive">
              {getActiveCustSlides().map((cust, index) => (
                <div 
                  key={index} 
                  className="glass-card" 
                  style={{ 
                    padding: '16px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '16px', 
                    cursor: 'zoom-in',
                    animation: 'fadeIn 0.5s ease-in-out'
                  }}
                  onClick={() => setLightboxImg(cust.src)}
                >
                  <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
                    <img 
                      src={cust.src} 
                      alt={cust.user} 
                      style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.3s ease' }} 
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '12px' }}>
                    <h4 style={{ fontSize: '1rem', color: '#fff', fontWeight: '700' }}>{cust.user}</h4>
                    <p style={{ fontSize: '0.85rem', fontStyle: 'italic', marginTop: '6px', color: 'var(--color-text-gray)' }}>"{cust.quote}"</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Previous slide button */}
            <button 
              onClick={prevCustSlide}
              className="carousel-btn-prev"
              style={{
                position: 'absolute',
                top: '50%',
                left: '0px',
                transform: 'translateY(-50%)',
                background: 'rgba(26, 11, 46, 0.65)',
                border: '1px solid var(--color-primary)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer',
                zIndex: 10,
                boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.boxShadow = '0 0 25px var(--color-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(26, 11, 46, 0.65)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.4)'; }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next slide button */}
            <button 
              onClick={nextCustSlide}
              className="carousel-btn-next"
              style={{
                position: 'absolute',
                top: '50%',
                right: '0px',
                transform: 'translateY(-50%)',
                background: 'rgba(26, 11, 46, 0.65)',
                border: '1px solid var(--color-primary)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer',
                zIndex: 10,
                boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.boxShadow = '0 0 25px var(--color-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(26, 11, 46, 0.65)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.4)'; }}
            >
              <ChevronRight size={24} />
            </button>

          </div>

          <div className="benefits-grid">
            <div className="glass-card benefit-card">
              <div className="benefit-icon-wrapper">
                <Zap size={20} />
              </div>
              <div className="benefit-info">
                <h3>Daily Meme Coin Signals</h3>
                <p>Receive up to 3 vetted, high-probability Solana meme coin signals daily with detailed entries.</p>
              </div>
            </div>

            <div className="glass-card benefit-card">
              <div className="benefit-icon-wrapper">
                <Compass size={20} />
              </div>
              <div className="benefit-info">
                <h3>Whale Wallet Tracking System</h3>
                <p>Full access to our proprietary dashboard tracking over 1,500 highly profitable on-chain wallets.</p>
              </div>
            </div>

            <div className="glass-card benefit-card">
              <div className="benefit-icon-wrapper">
                <Award size={20} />
              </div>
              <div className="benefit-info">
                <h3>High-Potential Solana Gems</h3>
                <p>Exclusive early listings, dev audits, and coin profiles before they trends on DexScreener.</p>
              </div>
            </div>

            <div className="glass-card benefit-card">
              <div className="benefit-icon-wrapper">
                <Users size={20} />
              </div>
              <div className="benefit-info">
                <h3>Copy Trading Support</h3>
                <p>Easily set up copy trading bots to replicate whale transactions automatically in real-time.</p>
              </div>
            </div>

            <div className="glass-card benefit-card">
              <div className="benefit-icon-wrapper">
                <MessageSquare size={20} />
              </div>
              <div className="benefit-info">
                <h3>Private VIP Discussion Room</h3>
                <p>Gain direct access to our private channels where top-tier whale traders discuss active positions and market sentiment.</p>
              </div>
            </div>

            <div className="glass-card benefit-card">
              <div className="benefit-icon-wrapper">
                <ShieldCheck size={20} />
              </div>
              <div className="benefit-info">
                <h3>On-Chain Security Audits</h3>
                <p>Our team conducts real-time smart contract audits on newly deployed tokens to protect our members from rug-pulls.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — WHY MOST TRADERS FAIL */}
        <section id="why-fail" className="container" style={{ borderTop: '1px solid rgba(168, 85, 247, 0.1)' }}>
          <div className="fail-wrapper">
            <div className="fail-graphic">
              <div className="glass-card fail-stats-card" style={{ border: '1px solid var(--color-red)' }}>
                <div className="fail-big-num">90%</div>
                <h3 style={{ color: 'var(--color-red)', marginTop: '10px', textTransform: 'uppercase', fontSize: '1.25rem', letterSpacing: '0.05em' }}>
                  OF TRADERS FAIL
                </h3>
                <p style={{ marginTop: '10px' }}>
                  Because they discover meme coins only after the price has already pumped 50x and retail hype takes over.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                  <span className="badge-neon" style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--color-red)', borderColor: 'rgba(239, 68, 68, 0.4)', fontSize: '0.75rem' }}>
                    <AlertTriangle size={14} style={{ marginRight: '4px' }} /> LATE ENTRY trap
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <span className="badge-neon" style={{ alignSelf: 'flex-start' }}>
                <AlertTriangle size={14} style={{ marginRight: '4px' }} /> Market Reality
              </span>
              <h2 className="title-neon" style={{ fontSize: '2.5rem' }}>
                MOST TRADERS <span style={{ color: 'var(--color-red)' }}>ENTER TOO LATE</span>
              </h2>
              <p style={{ fontSize: '1.1rem' }}>
                90% of retail traders are used as exit liquidity for whales. Our system completely flips the script by focusing strictly on:
              </p>

              <div className="fail-list">
                <div className="fail-item">
                  <div className="fail-item-dot" style={{ background: '#22C55E', boxShadow: '0 0 10px #22C55E' }}></div>
                  <div>
                    <h3>Finding Coins Before Hype</h3>
                    <p>Entering at the floor stage, before social media influencers and retail investors start posting.</p>
                  </div>
                </div>

                <div className="fail-item">
                  <div className="fail-item-dot"></div>
                  <div>
                    <h3>Tracking Smart Money Movement</h3>
                    <p>Following highly accurate insider traders who have inside information or superior analytics.</p>
                  </div>
                </div>

                <div className="fail-item">
                  <div className="fail-item-dot"></div>
                  <div>
                    <h3>Following Whale Accumulation</h3>
                    <p>Detecting when multiple massive wallets begin accumulating large chunks of a token simultaneously.</p>
                  </div>
                </div>
              </div>

              <div style={{ padding: '16px', background: 'rgba(168, 85, 247, 0.1)', borderLeft: '3px solid var(--color-primary)', borderRadius: '0 8px 8px 0', marginTop: '10px' }}>
                <p style={{ fontStyle: 'italic', color: '#fff', fontWeight: '600' }}>
                  👉 That’s exactly how early-stage life-changing gains are captured.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — COMMUNITY STATISTICS */}
        <section id="statistics" className="container" style={{ borderTop: '1px solid rgba(168, 85, 247, 0.1)' }}>
          <div className="section-title">
            <span className="badge-neon" style={{ marginBottom: '12px' }}>
              <Users size={14} style={{ marginRight: '4px' }} /> Elite Club Metrics
            </span>
            <h2 className="title-neon" style={{ fontSize: '2.5rem' }}>
              COMMUNITY <span className="text-purple-neon">PERFORMANCE</span>
            </h2>
          </div>

          <div className="stats-bar-grid">
            <div className="glass-card stat-item">
              <div className="stat-num">400+</div>
              <h4 style={{ fontSize: '1rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>VIP Members</h4>
              <p style={{ fontSize: '0.85rem', marginTop: '6px' }}>Private high-net-worth investors and whale trackers.</p>
            </div>

            <div className="glass-card stat-item" style={{ borderColor: 'var(--color-primary)' }}>
              <div className="stat-num" style={{ color: 'var(--color-primary)' }}>150+</div>
              <h4 style={{ fontSize: '1rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Signals / Month</h4>
              <p style={{ fontSize: '0.85rem', marginTop: '6px' }}>Meme coin on-chain calls filtered with rigorous risk metrics.</p>
            </div>

            <div className="glass-card stat-item">
              <div className="stat-num">84.2%</div>
              <h4 style={{ fontSize: '1rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Win-Rate Structure</h4>
              <p style={{ fontSize: '0.85rem', marginTop: '6px' }}>Positions closing in substantial profit through proper exit scaling.</p>
            </div>
          </div>
        </section>

        {/* SECTION 7 — FAQ (Interactive Accordion) */}
        <section id="faq" className="container" style={{ borderTop: '1px solid rgba(168, 85, 247, 0.1)' }}>
          <div className="section-title">
            <span className="badge-neon" style={{ marginBottom: '12px' }}>
              <MessageSquare size={14} style={{ marginRight: '4px' }} /> FAQ
            </span>
            <h2 className="title-neon" style={{ fontSize: '2.5rem' }}>
              FREQUENTLY ASKED <span className="text-purple-neon">QUESTIONS</span>
            </h2>
          </div>

          <div className="faq-list">
            <div className={`glass-card faq-item ${activeFaq === 0 ? 'active' : ''}`} onClick={() => toggleFaq(0)}>
              <div className="faq-header">
                <h3>Is this suitable for beginners?</h3>
                <span className="faq-icon">
                  {activeFaq === 0 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </div>
              <div className="faq-body">
                <p>
                  Yes. We support both beginners and advanced traders. We provide exhaustive guides on how to set up Solana wallets, how to use on-chain telegram trading bots to execute trades in milliseconds, and complete risk management parameters.
                </p>
              </div>
            </div>

            <div className={`glass-card faq-item ${activeFaq === 1 ? 'active' : ''}`} onClick={() => toggleFaq(1)}>
              <div className="faq-header">
                <h3>How much capital do I need?</h3>
                <span className="faq-icon">
                  {activeFaq === 1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </div>
              <div className="faq-body">
                <p>
                  You can start small and scale based on your strategy. Many members start with as little as 0.5 to 1 SOL to test the signals and understand execution speed.
                </p>
              </div>
            </div>

            <div className={`glass-card faq-item ${activeFaq === 2 ? 'active' : ''}`} onClick={() => toggleFaq(2)}>
              <div className="faq-header">
                <h3>Is this automated trading?</h3>
                <span className="faq-icon">
                  {activeFaq === 2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </div>
              <div className="faq-body">
                <p>
                  We provide both manual signals and copy-trading support. You can manually enter positions, or copy trade our designated smart money wallets automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — FINAL CTA */}
        <section id="join" className="container" style={{ borderTop: '1px solid rgba(168, 85, 247, 0.1)', paddingBottom: '120px' }}>
          <div className="glass-card final-cta-wrapper" style={{ border: '1px solid var(--color-primary)' }}>
            <div className="cta-glow-effect"></div>
            
            <span className="badge-neon" style={{ marginBottom: '16px', position: 'relative', zIndex: 2 }}>
              <Zap size={14} style={{ marginRight: '4px' }} /> SECURE YOUR SPOT
            </span>
            
            <h2 className="title-neon" style={{ fontSize: '2.8rem' }}>
              DON’T MISS THE <br />
              <span className="text-purple-neon text-flicker">NEXT 100x MEME COIN</span>
            </h2>
            
            <p>
              The biggest opportunities always go to those who enter early. Join the VIP community today and start receiving early alpha signals directly in your feed.
            </p>

            <div style={{ position: 'relative', zIndex: 2 }}>
              <a href="https://t.me/Memedegensclub" target="_blank" rel="noopener noreferrer" className="btn-neon" style={{ padding: '20px 48px', fontSize: '1.25rem', animation: 'pulseGlow 2s infinite' }}>
                JOIN VIP NOW <ArrowUpRight size={24} style={{ marginLeft: '4px' }} />
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER SECTION */}
        <footer>
          <div className="footer-gradient-glow"></div>
          <div className="container">
            <div className="footer-grid">
              
              <div className="footer-brand">
                <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img src="/logo.png" alt="CoinLye Logo" style={{ height: '36px', width: 'auto' }} />
                  <span style={{ fontSize: '1.15rem', fontWeight: '800' }}>COINLYE VIP</span>
                </div>
                <p style={{ fontSize: '0.9rem', maxWidth: '300px' }}>
                  The world's leading community tracking smart money flow, insider dev wallets, and early volume spikes on the Solana blockchain.
                </p>
              </div>

              <div className="footer-links-col">
                <h4>Core Systems</h4>
                <ul>
                  <li><a href="#how-it-works">Whale Wallet Tracker</a></li>
                  <li><a href="#how-it-works">Volume Spike Scanner</a></li>
                </ul>
              </div>

              <div className="footer-links-col">
                <h4>VIP Community</h4>
                <ul>
                  <li><a href="#results">Live Trading Chats</a></li>
                  <li><a href="#join">Join Private Room</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-copyright">
              <div>
                &copy; {new Date().getFullYear()} CoinLye VIP. All rights reserved. 
              </div>
            </div>
          </div>
        </footer>

        {/* STICKY BOTTOM BAR FOR MOBILE */}
        <div className={`sticky-bar ${showStickyBar ? 'visible' : ''}`}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#fff' }}>NEXT 100x SIGNAL READY</span>
            <span style={{ fontSize: '0.65rem', color: '#22C55E' }}>● System scanning live</span>
          </div>
          <a href="https://t.me/Memedegensclub" target="_blank" rel="noopener noreferrer" className="btn-neon" style={{ padding: '8px 16px', fontSize: '0.8rem', animation: 'none', background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)', boxShadow: '0 0 15px var(--color-primary)' }}>
            JOIN VIP NOW
          </a>
        </div>

      </div>

      {/* LIGHTBOX POP-UP MODAL */}
      {lightboxImg && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            background: 'rgba(11, 11, 16, 0.9)', 
            backdropFilter: 'blur(16px)', 
            WebkitBackdropFilter: 'blur(16px)', 
            zIndex: 9999, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '24px',
            cursor: 'zoom-out'
          }}
          onClick={() => setLightboxImg(null)}
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
            <button 
              onClick={() => setLightboxImg(null)}
              style={{ 
                position: 'absolute', 
                top: '-50px', 
                right: '0', 
                background: 'rgba(255,255,255,0.1)', 
                border: '1px solid rgba(255,255,255,0.2)', 
                borderRadius: '50%', 
                width: '40px', 
                height: '40px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: '#fff', 
                cursor: 'pointer' 
              }}
            >
              <X size={20} />
            </button>
            <img 
              src={lightboxImg} 
              alt="Expanded Proof" 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '80vh', 
                borderRadius: '16px', 
                boxShadow: '0 0 50px rgba(168, 85, 247, 0.5)',
                border: '1px solid rgba(168, 85, 247, 0.3)'
              }} 
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
