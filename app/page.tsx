'use client'
import { useEffect, useState } from 'react'
import { DataProcessor, SPData } from './data-processor';
import { MyScatterPlot } from './scatter-plot';
import './style.css'
import { Autocomplete, Button, Select } from '@mantine/core';
import { ResponsiveScatterPlot, ScatterPlot } from '@nivo/scatterplot';
import { HeatmapData, MyHeatmap } from './heatmap';


// Assumptions: 
// Input and output fields are consistent across all experiments
export default function Home() {
  const [data, setData] = useState<SPData | null>(null);
  const [input, setInput] = useState<string | null>(null);
  const [output, setOutput] = useState<string | null>(null);
  const dataProcessor = new DataProcessor()
  const [view, setView] = useState<"heatmap" | "scatterplot">("heatmap");

  useEffect(() => {
    if (input && output) setData(dataProcessor.getScatterplotData(input, output))
  }, [input, output])

  const handleHeatmapCellClick = (id: string) => {
    const strs: string[] = id.split('.');
    setInput(strs[1])
    setOutput(strs[0])
    setView("scatterplot");
  }

  return (
    <div className='root'>
      {
        view == 'heatmap' ?
          <>
            <h2>Correlation Heatmap</h2>
            <div>(Click a cell to view its scatterplot)</div>
            <div className='plot-container'>
              <MyHeatmap onCellClick={(id: string) => handleHeatmapCellClick(id)} data={dataProcessor.getCorrelationHeatmapData()} />
            </div>
          </> :
          <>
            <h2>Scatterplot of {input} vs {output}</h2>
            <div className='plot-container'>
              <MyScatterPlot data={data} input={input} output={output} />
            </div>
            <div className='select-container'>
              <Select
                label="Choose input"
                value={input ? input : ""}
                onChange={(value) => setInput(value)}
                data={dataProcessor.inputNames}
              />
              <Select
                label="Choose output"
                value={output ? output : ""}
                onChange={(value) => setOutput(value)}
                data={dataProcessor.outputNames}
              />
            </div>
            <Button className="back-button" onClick={() => setView("heatmap")}>Go Back</Button>
          </>
      }
    </div>
  )
}
