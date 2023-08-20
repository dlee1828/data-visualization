import { ResponsiveHeatMap } from '@nivo/heatmap'

export type HeatmapRow = {
  id: string,
  data: {
    x: string,
    y: number
  }[]
}
export type HeatmapData = HeatmapRow[]

export const MyHeatmap = (props: { data: HeatmapData, onCellClick: (id: string) => void }) => {
  return <ResponsiveHeatMap
    onClick={(e) => props.onCellClick(e.id)}
    data={props.data}
    margin={{ top: 150, right: 90, bottom: 60, left: 150 }}
    valueFormat=">-.2"
    axisTop={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -90,
      legend: '',
      legendOffset: 46
    }}
    colors={{
      type: 'diverging',
      scheme: 'red_yellow_blue',
      divergeAt: 0.5,
      minValue: -1,
      maxValue: 1
    }}
    emptyColor="#555555"
  // legends={[
  //   {
  //     anchor: 'bottom',
  //     translateX: 0,
  //     translateY: 30,
  //     length: 400,
  //     thickness: 8,
  //     direction: 'row',
  //     tickPosition: 'after',
  //     tickSize: 3,
  //     tickSpacing: 4,
  //     tickOverlap: false,
  //     tickFormat: '>-.2s',
  //     title: 'Value →',
  //     titleAlign: 'start',
  //     titleOffset: 4
  //   }
  // ]}
  />
}