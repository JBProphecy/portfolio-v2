
import type { PieChartLegendItem } from "./types"

export type PieChartLegendProps = {
  data: PieChartLegendItem[]
  iconSize: number
  maxWidth?: number
}

export function PieChartLegend(props: PieChartLegendProps): React.JSX.Element {

  return (
    <div style={{
      maxWidth: props.maxWidth,
      display: "flex",
      flexDirection: "column",
      padding: "0.5rem",
      gap: "0.5rem"
    }}>
      {props.data.map((item, index) => {
        return (
          <div key={index} style={{
            display: "flex",
            gap: "0.75rem",
          }}>
            <PieChartLegendIcon item={item} size={props.iconSize} />
            <span
              style={{
                lineHeight: `${props.iconSize}px`,
                fontFamily: "Arial, Helvitica, sans-serif",
                color: "#fff",
                textWrap: "wrap",
                fontWeight: 700,
                maxWidth: props.maxWidth === undefined ? undefined : props.maxWidth - props.iconSize - (8 + 8 + 12)
              }}
            >{item.label}</span>
          </div>
        )
      })}
    </div>
  )
}

function PieChartLegendIcon({ item, size }: { item: PieChartLegendItem, size: number }): React.JSX.Element {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: "3px solid #fff",
        backgroundColor: item.color
      }}
    ></div>
  )
}
