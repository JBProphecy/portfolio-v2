
import { PIE_CHART_APACHE_SPARK, PIE_CHART_CLOUD_DEV, PIE_CHART_MORE_APACHE, PIE_CHART_PYTHON, PIE_CHART_SNOWFLAKE, PIE_CHART_SQL } from "@/constants/pie-charts";
import { Slide } from "@/printshop/Slide";
import { PieCard } from "@/workspace/PieCard";

function Grid({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {children}
    </div>
  )
}

function GridCell({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      {children}
    </div>
  )
}

export function SlidePieChartOne() {
  return (
    <Slide>
      <Grid>
        <GridCell>
          <PieCard data={PIE_CHART_PYTHON} />
        </GridCell>
        <GridCell>
          <PieCard data={PIE_CHART_APACHE_SPARK} />
        </GridCell>
        <GridCell>
          <PieCard data={PIE_CHART_SQL} />
        </GridCell>
      </Grid>
    </Slide>
  )
}

export function SlidePieChartTwo() {
  return (
    <Slide>
      <Grid>
        <GridCell>
          <PieCard data={PIE_CHART_SNOWFLAKE} />
        </GridCell>
        <GridCell>
          <PieCard data={PIE_CHART_CLOUD_DEV} />
        </GridCell>
        <GridCell>
          <PieCard data={PIE_CHART_MORE_APACHE} />
        </GridCell>
      </Grid>
    </Slide>
  )
}
