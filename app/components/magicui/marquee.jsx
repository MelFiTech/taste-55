import { cn } from "@/lib/utils";

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  horizontal = true,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:0.5rem] [gap:var(--gap)]", 
        "h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]", // Responsive heights
        {
          "flex-row": !horizontal,
          "flex-col": horizontal,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)] min-w-full", // min-w-full instead of w-full
              {
                "animate-marquee flex-row": !horizontal,
                "animate-marquee-vertical flex-col": horizontal,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              }
            )}
            style={{
              animationDuration: "var(--duration)",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}