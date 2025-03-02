
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withText?: boolean;
}

export const Logo = ({ className, size = "md", withText = true }: LogoProps) => {
  const logoPath = "/lovable-uploads/e521e155-4098-4fb2-83a2-18133d5d8860.png";
  
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
