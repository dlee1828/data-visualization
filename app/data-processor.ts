import { ScatterPlotDatum, ScatterPlotRawSerie } from '@nivo/scatterplot'
import jsonDataset from './dataset.json'
import { calculateCorrelation } from './correlation'
import { HeatmapRow } from './heatmap'

type Dataset = {
  [experiment: string]: {
    "inputs": {
      [inputName: string]: number
    }
    "outputs": {
      [outputName: string]: number
    }
  }
}
const dataset: Dataset = jsonDataset

type SPGroup = ScatterPlotRawSerie<ScatterPlotDatum>
export type SPData = SPGroup[]

export class DataProcessor {
  experimentNames: string[] = [];
  inputNames: string[] = [];
  outputNames: string[] = [];

  constructor() {
    // Initialize experimentNames, inputNames, outputNames
    for (let key in dataset) {
      this.experimentNames.push(key);
    }
    if (this.experimentNames.length > 0) {
      const key = this.experimentNames[0]
      const experiment = dataset[key];
      for (let inputField in experiment.inputs) {
        this.inputNames.push(inputField);
      }
      for (let outputField in experiment.outputs) {
        this.outputNames.push(outputField);
      }
    }
  }

  // experiments is a subset of experimentNames, input is an element of inputNames, output is an element of outputNames
  getScatterplotData = (input: string, output: string): SPData => {
    let group: SPGroup = {
      id: 'Group',
      data: this.experimentNames.map((experimentName) => {
        return {
          x: dataset[experimentName].inputs[input],
          y: dataset[experimentName].outputs[output],
        }
      })
    }

    return [group]
  }

  getCorrelation = (input: string, output: string): number => {
    const data = this.experimentNames.map((experimentName) => {
      return {
        x: dataset[experimentName].inputs[input],
        y: dataset[experimentName].outputs[output],
      }
    })

    return calculateCorrelation(data)
  }

  getCorrelationHeatmapData = () => {
    const heatmapData = [];
    for (let output of this.outputNames) {
      let row: HeatmapRow = { id: output, data: [] }
      for (let input of this.inputNames) {
        row.data.push({ x: input, y: this.getCorrelation(input, output) })
      }
      heatmapData.push(row);
    }

    return heatmapData;
  }

}


