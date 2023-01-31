import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: 'japan',
    color: 'hsl(356, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 56,
      },
      {
        x: 'helicopter',
        y: 38,
      },
      {
        x: 'boat',
        y: 207,
      },
      {
        x: 'train',
        y: 50,
      },
      {
        x: 'subway',
        y: 33,
      },
      {
        x: 'bus',
        y: 141,
      },
      {
        x: 'car',
        y: 190,
      },
      {
        x: 'moto',
        y: 151,
      },
      {
        x: 'bicycle',
        y: 265,
      },
      {
        x: 'horse',
        y: 51,
      },
      {
        x: 'skateboard',
        y: 150,
      },
      {
        x: 'others',
        y: 274,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(9, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 156,
      },
      {
        x: 'helicopter',
        y: 131,
      },
      {
        x: 'boat',
        y: 59,
      },
      {
        x: 'train',
        y: 156,
      },
      {
        x: 'subway',
        y: 10,
      },
      {
        x: 'bus',
        y: 254,
      },
      {
        x: 'car',
        y: 52,
      },
      {
        x: 'moto',
        y: 152,
      },
      {
        x: 'bicycle',
        y: 98,
      },
      {
        x: 'horse',
        y: 240,
      },
      {
        x: 'skateboard',
        y: 160,
      },
      {
        x: 'others',
        y: 283,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(33, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 73,
      },
      {
        x: 'helicopter',
        y: 30,
      },
      {
        x: 'boat',
        y: 6,
      },
      {
        x: 'train',
        y: 156,
      },
      {
        x: 'subway',
        y: 284,
      },
      {
        x: 'bus',
        y: 166,
      },
      {
        x: 'car',
        y: 69,
      },
      {
        x: 'moto',
        y: 167,
      },
      {
        x: 'bicycle',
        y: 250,
      },
      {
        x: 'horse',
        y: 95,
      },
      {
        x: 'skateboard',
        y: 164,
      },
      {
        x: 'others',
        y: 234,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(161, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 258,
      },
      {
        x: 'helicopter',
        y: 144,
      },
      {
        x: 'boat',
        y: 277,
      },
      {
        x: 'train',
        y: 217,
      },
      {
        x: 'subway',
        y: 84,
      },
      {
        x: 'bus',
        y: 120,
      },
      {
        x: 'car',
        y: 213,
      },
      {
        x: 'moto',
        y: 126,
      },
      {
        x: 'bicycle',
        y: 286,
      },
      {
        x: 'horse',
        y: 55,
      },
      {
        x: 'skateboard',
        y: 141,
      },
      {
        x: 'others',
        y: 71,
      },
    ],
  },
  // {
  //   id: 'norway',
  //   color: 'hsl(318, 70%, 50%)',
  //   data: [
  //     {
  //       x: 'plane',
  //       y: 213,
  //     },
  //     {
  //       x: 'helicopter',
  //       y: 9,
  //     },
  //     {
  //       x: 'boat',
  //       y: 100,
  //     },
  //     {
  //       x: 'train',
  //       y: 231,
  //     },
  //     {
  //       x: 'subway',
  //       y: 255,
  //     },
  //     {
  //       x: 'bus',
  //       y: 71,
  //     },
  //     {
  //       x: 'car',
  //       y: 230,
  //     },
  //     {
  //       x: 'moto',
  //       y: 129,
  //     },
  //     {
  //       x: 'bicycle',
  //       y: 189,
  //     },
  //     {
  //       x: 'horse',
  //       y: 201,
  //     },
  //     {
  //       x: 'skateboard',
  //       y: 14,
  //     },
  //     {
  //       x: 'others',
  //       y: 70,
  //     },
  //   ],
  // },
];
const ResponsiveLineGraph = () => (
  // { data /* see data tab */ }
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'transportation',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default ResponsiveLineGraph;
