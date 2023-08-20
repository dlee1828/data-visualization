import { ResponsiveScatterPlot } from "@nivo/scatterplot"
import { SPData } from "./data-processor"

type MyScatterPlotProps = {
  data: SPData | null,
  input: string | null,
  output: string | null,
}

export const MyScatterPlot = (props: MyScatterPlotProps) => {
  const { data, input, output } = props;

  const ready = data && input && output;


  return <div className="scatter-plot">
    {
      ready ? <ResponsiveScatterPlot
        data={data}
        margin={{ top: 20, right: 140, bottom: 70, left: 90 }}
        xScale={{ type: 'linear', min: 0, max: 'auto' }}
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        yFormat=">-.2f"
        blendMode="multiply"
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: input,
          legendPosition: 'middle',
          legendOffset: 46
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: output,
          legendPosition: 'middle',
          legendOffset: -60
        }}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 130,
            translateY: 0,
            itemWidth: 100,
            itemHeight: 12,
            itemsSpacing: 5,
            itemDirection: 'left-to-right',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      /> : <div className="no-plot"> Select input and output. </div>
    }


  </div>
}