import { motion, AnimatePresence } from "motion/react";
import { X, Download, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function UpdatePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass max-w-md w-full p-8 rounded-3xl relative overflow-hidden"
          >
            <button 
              onClick={dismiss}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                <AlertCircle size={32} />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-2xl font-display font-bold tracking-tight">Update Required</h2>
                <p className="text-white/60 leading-relaxed">
                  If you previously downloaded the older Lume app (flower icon), please uninstall it and install the latest version. The new version includes updated features, a new UI design, and a smoother listening experience.
                </p>
              </div>

              <div className="flex flex-col w-full gap-3">
                <button  onClick={dismiss} className="w-full py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-500 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-red-600/20">
                  <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                  Download Latest Version
                </button>
                <button 
                  onClick={dismiss}
                  className="w-full py-4 text-white/60 hover:text-white font-medium transition-colors"
                >
                  Remind Me Later
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
