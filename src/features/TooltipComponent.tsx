import React from "react";

type TooltipPosition = "top" | "right" | "bottom" | "left";

interface TooltipProps {
  /** The text shown inside the tooltip */
  text: string;
  /** Optional count (like a badge number) */
  count?: number;
  /** Tooltip position (default: top) */
  position?: TooltipPosition;
  /** The element that triggers the tooltip */
  children: React.ReactNode;
}

const TooltipComponent: React.FC<TooltipProps> = ({
  text,
  count,
  position = "top",
  children,
}) => {
  const positionClasses: Record<TooltipPosition, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
  };

  const arrowPosition: Record<TooltipPosition, string> = {
    top: "top-full left-1/2 -translate-x-1/2",
    right: "left-0 top-1/2 -translate-y-1/2 -ml-1 rotate-45",
    bottom: "bottom-full left-1/2 -translate-x-1/2",
    left: "right-0 top-1/2 -translate-y-1/2 -mr-1 rotate-45",
  };

  return (
    <div className="relative group ">
      {/* Hover target */}
      {children}

      {/* Tooltip */}
      <div
        className={`absolute ${positionClasses[position]} hidden group-hover:flex items-center gap-1 bg-blue-800 text-gray-100 text-xs px-2 py-1 rounded-md shadow-lg z-50`}
      >
        <span>{text}</span>
        {count !== undefined && (
          <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded">
            {count}
          </span>
        )}

        {/* Small arrow */}
        <div
          className={`absolute w-2 h-2 bg-blue-800 ${arrowPosition[position]}`}
        ></div>
      </div>
    </div>
  );
};

export default TooltipComponent;
