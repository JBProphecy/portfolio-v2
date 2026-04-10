
import { compute, process } from "../../workspace/logic"
import { PieChart } from "../../workspace/PieChart"
import { PieChartLegend } from "../../workspace/PieChartLegend"

const pieChartDataPython = compute(process([
  { label: "Pandas (1)", value: 1 },
  { label: "PySpark (3)", value: 3 },
  { label: "Logging (3)", value: 3 },
  { label: "Unit Testing (2)", value: 2 },
  { label: "Error Handling (2)", value: 2 },
], 270))

export function WA() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2rem"
      }}
    >
      <PieChart data={pieChartDataPython} size={300} />
      <PieChartLegend data={pieChartDataPython} iconSize={24} maxWidth={300}/>
    </div>
  )
}
