import { motion, useScroll, useTransform } from "motion/react";
import { 
  Headphones, 
  Zap, 
  Music, 
  Download, 
  Moon, 
  ShieldCheck, 
  Instagram, 
  ChevronDown, 
  Play,
  CheckCircle2,
  ArrowRight,
  Volume2,
  Activity,
  Music2
} from "lucide-react";
import { useState, useRef } from "react";
import UpdatePopup from "./components/UpdatePopup";

const FeatureCard = ({ icon: Icon, title, description, colorClass }: { icon: any, title: string, description: string, colorClass: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass p-8 rounded-3xl space-y-4 hover:border-white/20 transition-colors group"
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110 ${colorClass}`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold font-display">{title}</h3>
    <p className="text-white/50 leading-relaxed">{description}</p>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-white/80 transition-colors"
      >
        <span className="text-lg font-medium">{question}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-white/50 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
};

export default function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <UpdatePopup />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.4)]">
              <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tighter">LUME</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#features" className="hover:text-red-500 transition-colors">Features</a>
            <a href="#download" className="hover:text-red-500 transition-colors">Download</a>
            <a href="#faq" className="hover:text-red-500 transition-colors">FAQ</a>
          </div>
          <button className="px-6 py-2.5 bg-red-600 text-white text-sm font-bold rounded-full hover:bg-red-500 transition-colors shadow-lg shadow-red-600/20">
            Get App
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
        {/* Animated Background Elements with Parallax */}
        <div className="absolute inset-0 -z-10">
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] animate-pulse-slow" 
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] animate-pulse-slow" 
            transition={{ delay: 2 }}
          />
          
          {/* Sound Wave Background Pattern */}
          <motion.div 
            style={{ y: y1, opacity }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20"
          >
            <div className="flex items-end gap-1 h-64">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    height: [40, Math.random() * 200 + 40, 40],
                    backgroundColor: i % 2 === 0 ? "rgba(220,38,38,0.2)" : "rgba(249,115,22,0.2)"
                  }}
                  transition={{ 
                    duration: Math.random() * 1.5 + 1, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-1 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative">
          {/* Floating Icons - Integrated for all screens */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <motion.div 
              animate={{ 
                y: [0, -25, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.05, 1]
              }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-40px] right-[10%] glass p-3 md:p-4 rounded-2xl shadow-xl border-red-500/20"
            >
              <Music className="text-red-500" size={24} />
            </motion.div>

            <motion.div 
              animate={{ 
                y: [0, 30, 0],
                rotate: [0, -8, 0],
                scale: [1, 0.95, 1]
              }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[20%] left-[-20px] md:left-[5%] glass p-3 md:p-4 rounded-2xl shadow-xl border-orange-500/20"
            >
              <Headphones className="text-orange-500" size={24} />
            </motion.div>

            <motion.div 
              animate={{ 
                x: [0, 15, 0],
                y: [0, -15, 0],
                rotate: [0, 12, 0]
              }} 
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[40%] right-[-10px] md:right-[15%] glass p-2 md:p-3 rounded-xl shadow-lg border-red-500/20"
            >
              <Activity className="text-red-500/80" size={18} />
            </motion.div>

            <motion.div 
              animate={{ 
                x: [0, -10, 0],
                y: [0, 10, 0],
                rotate: [0, -10, 0]
              }} 
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-[10%] left-[20%] glass p-2 md:p-3 rounded-xl shadow-lg border-orange-500/20"
            >
              <Volume2 className="text-orange-500/80" size={18} />
            </motion.div>

            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.1, 1]
              }} 
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[-20px] right-[30%] glass p-2 md:p-3 rounded-xl shadow-lg border-red-500/20"
            >
              <Music2 className="text-red-500/80" size={18} />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10 text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold tracking-widest uppercase text-red-500 border-red-500/20">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              Now Available for Android
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9]">
              Feel the music <br />
              <span className="text-red-600/40 italic">in a new light</span>
            </h1>
            <p className="text-xl text-white/60 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Experience sound like never before. Lume brings you high-fidelity streaming in a beautifully crafted premium interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#download"
                className="px-8 py-4 bg-red-600 text-white font-bold rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl shadow-red-600/20"
              >
                <Download size={20} />
                Download App
              </a>
              <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Instagram size={20} />
                Follow on Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Crafted for Audiophiles</h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">Every detail of Lume is designed to enhance your listening journey, from the UI to the audio engine.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Headphones}
              title="High-Quality Streaming"
              description="Lossless audio support from YT Music, JioSaavn, and YouTube directly inside the app."
              colorClass="bg-red-600/20 text-red-500"
            />
            <FeatureCard 
              icon={Zap}
              title="Full Ads-Free"
              description="Enjoy an uninterrupted listening experience with zero ads, forever."
              colorClass="bg-orange-600/20 text-orange-500"
            />
            <FeatureCard 
              icon={Music}
              title="Import Playlists"
              description="Seamlessly import your entire library and playlists from Spotify with one click."
              colorClass="bg-red-600/20 text-red-500"
            />
            <FeatureCard 
              icon={Download}
              title="Offline Downloads"
              description="Take your music anywhere. Download entire playlists with a single tap."
              colorClass="bg-orange-600/20 text-orange-500"
            />
            <FeatureCard 
              icon={Moon}
              title="Premium Dark Mode"
              description="A stunning high-contrast UI designed for late-night listening sessions."
              colorClass="bg-red-600/20 text-red-500"
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Secure & Private"
              description="Your data is yours. We prioritize user privacy and secure authentication."
              colorClass="bg-orange-600/20 text-orange-500"
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center space-y-10 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-red-600/10 to-transparent" />
          
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight">Ready to Listen?</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">Join thousands of listeners who have already switched to Lume.</p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a 
              href="https://github.com/infasmk/Lume_Music/releases/download/v2.0.7/Lume-v2.0.7.apk"
              className="px-12 py-6 bg-red-600 text-white text-xl font-bold rounded-2xl hover:scale-105 transition-transform flex items-center gap-3 shadow-[0_0_40px_rgba(220,38,38,0.3)]"
            >
              <Download size={24} />
              Download APK v2.4.0
            </a>
            <div className="space-y-2">
              <p className="text-sm text-white/40">Version 2.0.7 • 42MB • Android 8.0+</p>
              <p className="text-xs text-red-500/60 font-medium uppercase tracking-widest">
                ⚠️ Delete older versions before installing
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 grid grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold font-display text-red-500">5k+</p>
              <p className="text-xs text-white/40 uppercase tracking-widest">Downloads</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-display text-orange-500">4.9/5</p>
              <p className="text-xs text-white/40 uppercase tracking-widest">Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-display text-red-500">24/7</p>
              <p className="text-xs text-white/40 uppercase tracking-widest">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="py-32 px-6 bg-zinc-950/50">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">What's New in v2.7</h2>
          <div className="grid gap-6">
            {[
              { title: "Redesigned Player", desc: "A more intuitive and beautiful playback interface.", color: "text-red-500" },
              { title: "Smart Cache", desc: "Improved offline management and faster loading.", color: "text-orange-500" },
              { title: "Lossless Audio", desc: "Support for FLAC and high-bitrate streaming.", color: "text-red-500" }
            ].map((item, i) => (
              <div key={i} className="glass p-6 rounded-2xl flex flex-col items-center gap-2">
                <CheckCircle2 className={item.color} size={24} />
                <h4 className="font-bold text-xl">{item.title}</h4>
                <p className="text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-display font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="text-white/50">Everything you need to know about Lume.</p>
          </div>
          <div className="space-y-2">
            <FAQItem 
              question="Is Lume free to use?"
              answer="Lume offers a generous free tier with high-quality streaming. We also have a Premium subscription for ad-free listening and lossless audio support."
            />
            <FAQItem 
              question="How do I install the APK?"
              answer="Download the APK file from our website, enable 'Install from Unknown Sources' in your Android settings, and open the file to begin installation."
            />
            <FAQItem 
              question="Is offline mode available?"
              answer="Yes! You can download any song, album, or playlist for offline listening. This feature is available for both free and premium users."
            />
            <FAQItem 
              question="Can I import my playlists from other apps?"
              answer="Absolutely. Lume supports playlist importing from Spotify, Apple Music, and YouTube Music through our integrated migration tool."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter">LUME</span>
            </div>
            <p className="text-white/40 leading-relaxed">
              Redefining the music streaming experience with premium design and high-fidelity sound.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-red-600/20 hover:text-red-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-orange-600/20 hover:text-orange-500 transition-colors">
                <Zap size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-white/40">Product</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#preview" className="hover:text-white transition-colors">App Preview</a></li>
              <li><a href="#download" className="hover:text-white transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Release Notes</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-white/40">Support</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#faq" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-white/40">Newsletter</h4>
            <p className="text-sm text-white/60">Get updates on new features and releases.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-white/30 transition-colors"
              />
              <button className="px-4 py-2 bg-white text-black text-sm font-bold rounded-xl hover:bg-zinc-200 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-20 flex flex-col items-center gap-4">
          <p className="text-xs text-white/20 uppercase tracking-[0.2em]">
            © 2026 Lume Music. All rights reserved.
          </p>
          <p className="text-sm font-medium text-white/40">
            Created by <span className="text-white">infas</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
