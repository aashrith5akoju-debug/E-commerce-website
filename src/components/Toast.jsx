import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-[#121316]" />,
    error: <AlertCircle className="w-4 h-4 text-[#A82B2B]" />,
    info: <Info className="w-4 h-4 text-[#121316]" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] max-w-md w-[calc(100%-3rem)] sm:w-auto animate-in fade-in slide-in-from-bottom-3 duration-200">
      <div className="bg-[#FAF9F5] border border-[#121316] shadow-2xl p-4 flex items-start gap-3 backdrop-blur-md">
        <div className="mt-0.5 shrink-0">
          {icons[toast.type || 'info']}
        </div>
        <div className="flex-1 pr-2">
          {toast.title && (
            <p className="font-mono-archive text-[11px] uppercase tracking-widest font-semibold text-[#121316]">
              {toast.title}
            </p>
          )}
          <p className="text-xs text-[#5A5955] mt-0.5 leading-relaxed font-sans">
            {toast.message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-[#7A7870] hover:text-[#121316] transition-colors p-0.5"
          aria-label="Dismiss toast"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

