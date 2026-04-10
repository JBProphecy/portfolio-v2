
import type { PieChartDataFinal, PieChartItemPhaseA, PieChartItemPhaseB, PieChartItemPhaseC, PieChartItemPhaseRev } from "./types"

export function process(data: PieChartItemPhaseA[], colorOffset: number = 0, colorSpread?: number): PieChartItemPhaseB[] {
  const listWithoutColor = data.filter(item => item.color === undefined)
  const generatedColors = generateColors(listWithoutColor.length, colorOffset, colorSpread)
  const listWithColor = listWithoutColor.map<PieChartItemPhaseB>((item, index) => ({
    ...item,
    color: generatedColors[index]
  }))
  return data.map<PieChartItemPhaseB>((item) => {
    if (item.color !== undefined) return item as PieChartItemPhaseB;
    const replacement = listWithColor.shift()
    if (replacement === undefined) throw Error("Unexpected Undefined");
    return replacement
  })
}

export function compute(items: PieChartItemPhaseB[]): PieChartItemPhaseC[] {
  const total = items.reduce((sum, item) => sum + item.value, 0)
  let currentAngle = 0
  return items.map(item => {
    const sliceAngle = (item.value / total) * 360
    const begAngle = currentAngle
    const endAngle = currentAngle + sliceAngle
    const midAngle = (begAngle + endAngle) / 2
    const slice = {
      ...item,
      begAngle: begAngle,
      endAngle: endAngle,
      midAngle: midAngle
    }
    currentAngle += sliceAngle
    return slice
  })
}

export function darken(color: string, amount = 0.7) {
  return `color-mix(in srgb, ${color} ${100 - amount * 100}%, black)`;
}

export function generateColors(count: number, offset: number = 0, spread: number = 360) {
  if (count < 0) throw Error("Invalid Count");
  const colors = []
  for (let i = 0; i < count; i++) {
    const hue = (i / count) * spread;
    colors.push(`hsl(${hue + offset}, 70%, 60%)`);
  }
  return colors;
}

/**
 * ### **Parameter Properties**
 * 
 * - `title: string` - the title of the pie chart
 * - `color?: number = 0` - a number that will shift the generated colors (basically this modulo 360)
 * - `slices?: PieChartItemPhaseC[]` - the slices of the pie chart
 */
export function assemble({
  title = "Pie Chart",
  colorOffset = 0,
  colorSpread = 360,
  slices,
}: {
  title: string,
  colorOffset?: number,
  colorSpread?: number
  slices: PieChartItemPhaseA[]
}): PieChartDataFinal {
  return {
    title,
    slices: compute(process(slices, colorOffset, colorSpread))
  }
}

export function assembleRevStyle({
  title = "Pie Chart",
  colorOffset = 0,
  colorSpread = 360,
  slices
}: {
  title: string,
  colorOffset?: number,
  colorSpread?: number
  slices: PieChartItemPhaseRev[]
}): PieChartDataFinal {
  const phaseA = slices.map<PieChartItemPhaseA>((item) => ({
    label: `${item.label} (${item.months})`,
    value: item.months
  }))
  return {
    title,
    slices: compute(process(phaseA, colorOffset, colorSpread))
  }
}
