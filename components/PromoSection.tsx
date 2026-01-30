import React from "react";

interface PromoSectionProps {
  children: React.ReactNode;
  className?: string; // For background colors etc.
  decorations?: boolean; // Whether to show standard circular decorations
}

const PromoSection: React.FC<PromoSectionProps> = ({
  children,
  className = "bg-white",
  decorations = true,
}) => {
  return (
    <div
      className={`w-full rounded-xl p-4 md:p-6 mb-8 relative overflow-hidden shadow-sm ${className}`}
    >
      {/* Standard Background Decorations */}
      {decorations && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default PromoSection;
