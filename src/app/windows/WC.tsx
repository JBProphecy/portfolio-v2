
import { PIE_CHART_APACHE_SPARK, PIE_CHART_CLOUD_DEV, PIE_CHART_MORE_APACHE, PIE_CHART_PYTHON, PIE_CHART_SNOWFLAKE, PIE_CHART_SQL } from "@/constants/pie-charts"
import { Page } from "@/printshop/Page"
import { PieCard } from "@/workspace/PieCard"

export function WC() {
  return (
    <Page>
      <PieCard data={PIE_CHART_PYTHON} />
      <PieCard data={PIE_CHART_SQL} />
      <PieCard data={PIE_CHART_APACHE_SPARK} />
      <PieCard data={PIE_CHART_SNOWFLAKE} />
      <PieCard data={PIE_CHART_CLOUD_DEV} />
      <PieCard data={PIE_CHART_MORE_APACHE} />
    </Page>
  )
}
