
import { useState } from "react"

import type { PieChartItemPhaseC } from "./types"

export type PieChartProps = {
  data: PieChartItemPhaseC[]
  size: number
}

export function PieChart(props: PieChartProps): React.JSX.Element {
  const [hovered, setHovered] = useState<PieChartItemPhaseC | null>(null)
  const cx = props.size / 2
  const cy = props.size / 2
  const r = props.size / 2

  const padding = 1/10 * props.size

  return (
    <svg width={props.size} height={props.size} viewBox={`${-padding} ${-padding} ${props.size + padding * 2} ${props.size + padding * 2}`}>
      {props.data.map((s, i) => {

        const toRad = (angle: number) => (angle - 90) * Math.PI / 180

        const x1 = cx + r * Math.cos(toRad(s.begAngle))
        const y1 = cy + r * Math.sin(toRad(s.begAngle))

        const x2 = cx + r * Math.cos(toRad(s.endAngle))
        const y2 = cy + r * Math.sin(toRad(s.endAngle))

        const offset = hovered === s ? 0 : 0;

        const dx = Math.cos(toRad(s.midAngle)) * offset;
        const dy = Math.sin(toRad(s.midAngle)) * offset;

        const largeArcFlag = s.endAngle - s.begAngle > 180 ? 1 : 0

        const d = `
          M ${cx} ${cy}
          L ${x1} ${y1}
          A ${r} ${r} 0 ${largeArcFlag} 1 ${x2} ${y2}
          Z
        `

        return (
          <path
            key={i}
            d={d}
            fill={s.color}
            stroke="#ffffffff"
            strokeWidth="5"
            onMouseEnter={() => setHovered(s)}
            onMouseLeave={() => setHovered(null)}
            style={{
              cursor: "pointer",
              transition: "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
              transformOrigin: "center",
              transform: hovered === s
                ? `translate(${dx}px, ${dy}px) scale(1.03)`
                : "translate(0px, 0px) scale(1)",
              filter: hovered === s
                ? "brightness(1.1) drop-shadow(0 0 6px rgba(0,0,0,0.2))"
                : "none"
            }}
          />
        )
      })}

      {/* {hovered && (
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
          {hovered.label}: {hovered.value}
        </text>
      )} */}
    </svg>
  )
}
