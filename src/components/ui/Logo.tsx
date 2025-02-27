
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withText?: boolean;
}

export const Logo = ({ className, size = "md", withText = true }: LogoProps) => {
  const logoPath = "/lovable-uploads/5de5d693-f719-4918-9142-ea1838742673.png";
  
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
  };
  
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src={logoPath} 
        alt="Growthster Media Logo" 
        className={cn(sizeClasses[size], "mr-2")}
      />
      {withText && (
        <div className="flex flex-col">
          <span className="font-bold text-lg leading-tight">Growthster Media</span>
          <span className="text-xs text-muted-foreground">ESTABLISHING A SOCIAL PRESENCE</span>
        </div>
      )}
    </div>
  );
};
