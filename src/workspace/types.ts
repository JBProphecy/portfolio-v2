
export type PieChartItemPhaseA = {
  label: string
  value: number
  color?: string
}

export type PieChartItemPhaseRev = {
  label: string
  months: number
}

export type PieChartItemPhaseB = {
  label: string
  value: number
  color: string
}

export type PieChartItemPhaseC = PieChartItemPhaseB & {
  begAngle: number
  endAngle: number
  midAngle: number
}

export type PieChartDataFinal = {
  title: string
  slices: PieChartItemPhaseC[]
}

export type PieChartLegendItem = {
  color: string
  label: string
}
