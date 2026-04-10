
import { PieChart } from "./PieChart"
import { PieChartLegend } from "./PieChartLegend"
import type { PieChartDataFinal } from "./types"

const WIDTH = 256

export function PieCard({
  data
}: {
  data: PieChartDataFinal
}) {
  return (
    <div
      style={{
        width: "max-content",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        // background: "linear-gradient(135deg, #000, #222, #000, #111, #000)",
        borderRadius: "1rem"
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      ><span
        style={{
          maxWidth: WIDTH,
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 700,
          lineHeight: 1,
          fontSize: "2rem",
          color: "#fff",
          textWrap: "wrap",
          textAlign: "center"
        }}
      >{data.title}</span></div>
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}><PieChart data={data.slices} size={3/5 * WIDTH}/></div>
      <div style={{
        display: "flex",
        justifyContent: "flex-start"
      }}><PieChartLegend data={data.slices} iconSize={18} maxWidth={WIDTH} /></div>
    </div>
  )
}
