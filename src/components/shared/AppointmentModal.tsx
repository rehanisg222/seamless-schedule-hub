
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => {
        setMounted(false);
      }, 300);
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={onClose}
    >
      <div 
        className={cn(
          "w-full max-w-2xl max-h-[90vh] overflow-auto bg-white rounded-xl p-0 transition-all duration-300 transform relative",
          isOpen ? "scale-100" : "scale-95"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>
        
        <div className="pt-12 pb-8 px-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Book Your Appointment</h2>
          <p className="text-center text-muted-foreground mb-6">Select a convenient time slot for your appointment.</p>
          
          <div className="calendly-wrapper h-[600px] border border-border rounded-md overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground text-center p-8">
                Calendly integration will be embedded here.<br />
                <span className="text-sm block mt-2">
                  (This is a placeholder for the actual Calendly embed which requires a Calendly account.)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
