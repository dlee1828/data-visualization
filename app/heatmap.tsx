import { ResponsiveHeatMap } from '@nivo/heatmap'

const testData = [
  {
    "id": "Japan",
    "data": [
      {
        "x": "Train",
        "y": -24609
      },
      {
        "x": "Subway",
        "y": 64826
      },
      {
        "x": "Bus",
        "y": -51306
      },
      {
        "x": "Car",
        "y": -39416
      },
      {
        "x": "Boat",
        "y": 44315
      },
      {
        "x": "Moto",
        "y": -4849
      },
      {
        "x": "Moped",
        "y": -47829
      },
      {
        "x": "Bicycle",
        "y": 99824
      },
      {
        "x": "Others",
        "y": -5772
      }
    ]
  },
  {
    "id": "France",
    "data": [
      {
        "x": "Train",
        "y": -16619
      },
      {
        "x": "Subway",
        "y": 40152
      },
      {
        "x": "Bus",
        "y": -45763
      },
      {
        "x": "Car",
        "y": 15231
      },
      {
        "x": "Boat",
        "y": -58198
      },
      {
        "x": "Moto",
        "y": -78155
      },
      {
        "x": "Moped",
        "y": -35071
      },
      {
        "x": "Bicycle",
        "y": 42073
      },
      {
        "x": "Others",
        "y": -68488
      }
    ]
  },
  {
    "id": "US",
    "data": [
      {
        "x": "Train",
        "y": 52855
      },
      {
        "x": "Subway",
        "y": 58112
      },
      {
        "x": "Bus",
        "y": 8630
      },
      {
        "x": "Car",
        "y": 87134
      },
      {
        "x": "Boat",
        "y": -68862
      },
      {
        "x": "Moto",
        "y": 15421
      },
      {
        "x": "Moped",
        "y": -12977
      },
      {
        "x": "Bicycle",
        "y": -26549
      },
      {
        "x": "Others",
        "y": -17131
      }
    ]
  },
  {
    "id": "Germany",
    "data": [
      {
        "x": "Train",
        "y": 23536
      },
      {
        "x": "Subway",
        "y": -90516
      },
      {
        "x": "Bus",
        "y": -94453
      },
      {
        "x": "Car",
        "y": -31719
      },
      {
        "x": "Boat",
        "y": 11096
      },
      {
        "x": "Moto",
        "y": -32114
      },
      {
        "x": "Moped",
        "y": 90481
      },
      {
        "x": "Bicycle",
        "y": 87174
      },
      {
        "x": "Others",
        "y": 58621
      }
    ]
  },
  {
    "id": "Norway",
    "data": [
      {
        "x": "Train",
        "y": -78453
      },
      {
        "x": "Subway",
        "y": -49248
      },
      {
        "x": "Bus",
        "y": 81439
      },
      {
        "x": "Car",
        "y": -11843
      },
      {
        "x": "Boat",
        "y": -50982
      },
      {
        "x": "Moto",
        "y": -70426
      },
      {
        "x": "Moped",
        "y": -93471
      },
      {
        "x": "Bicycle",
        "y": -23963
      },
      {
        "x": "Others",
        "y": 74665
      }
    ]
  },
  {
    "id": "Iceland",
    "data": [
      {
        "x": "Train",
        "y": -30910
      },
      {
        "x": "Subway",
        "y": -56910
      },
      {
        "x": "Bus",
        "y": -59606
      },
      {
        "x": "Car",
        "y": 81090
      },
      {
        "x": "Boat",
        "y": -73353
      },
      {
        "x": "Moto",
        "y": -64368
      },
      {
        "x": "Moped",
        "y": -37815
      },
      {
        "x": "Bicycle",
        "y": -19438
      },
      {
        "x": "Others",
        "y": -64936
      }
    ]
  },
  {
    "id": "UK",
    "data": [
      {
        "x": "Train",
        "y": -3660
      },
      {
        "x": "Subway",
        "y": 49889
      },
      {
        "x": "Bus",
        "y": 95998
      },
      {
        "x": "Car",
        "y": 61950
      },
      {
        "x": "Boat",
        "y": -57570
      },
      {
        "x": "Moto",
        "y": -92173
      },
      {
        "x": "Moped",
        "y": -46210
      },
      {
        "x": "Bicycle",
        "y": 25628
      },
      {
        "x": "Others",
        "y": 49320
      }
    ]
  },
  {
    "id": "Vietnam",
    "data": [
      {
        "x": "Train",
        "y": -11528
      },
      {
        "x": "Subway",
        "y": 38493
      },
      {
        "x": "Bus",
        "y": 93884
      },
      {
        "x": "Car",
        "y": -72683
      },
      {
        "x": "Boat",
        "y": -34171
      },
      {
        "x": "Moto",
        "y": 24039
      },
      {
        "x": "Moped",
        "y": 75000
      },
      {
        "x": "Bicycle",
        "y": 38724
      },
      {
        "x": "Others",
        "y": 75521
      }
    ]
  }
]

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