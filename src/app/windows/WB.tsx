
import { PieCard } from "../../workspace/PieCard"
import { PIE_CHART_PYTHON, PIE_CHART_SQL, PIE_CHART_APACHE_SPARK, PIE_CHART_CLOUD_DEV, PIE_CHART_APACHE_KAFKA, PIE_CHART_SNOWFLAKE, PIE_CHART_MORE_APACHE } from "@/constants/pie-charts"

export function WB() {
  return (
    <div
      style={{
        width: "100%",
        height: "max-content",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "2rem",
        gap: "2rem"
      }}
    >
      <PieCard data={PIE_CHART_PYTHON} />
      <PieCard data={PIE_CHART_SQL} />
      <PieCard data={PIE_CHART_APACHE_SPARK} />
      <PieCard data={PIE_CHART_SNOWFLAKE} />
      <PieCard data={PIE_CHART_CLOUD_DEV} />
      <PieCard data={PIE_CHART_MORE_APACHE} />
    </div>
  )
}
