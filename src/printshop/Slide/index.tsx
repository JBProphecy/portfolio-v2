
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "@/constants/values";

export function Slide({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className="slide"
      style={{
        // aspectRatio: `${SLIDE_WIDTH_FACTOR}/${SLIDE_HEIGHT_FACTOR}`,
        width: SLIDE_WIDTH,
        height: SLIDE_HEIGHT,
        background: "linear-gradient(135deg, #000, #222, #000, #111, #000)",
        boxShadow: "0 0 10px 10px rgba(0,0,0,0.1)",
        borderRadius: "0.5rem",
        breakAfter: "always"
      }}
    >
      {children}
    </div>
  )
}
