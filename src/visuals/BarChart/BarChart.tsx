import { ResponsiveBar } from '@nivo/bar'

interface Props {
  data: Array<any>,
  keys: Array<string>,
  indexBy: string,
  horizontalLabel: string,
  verticalLabel: string,
}

const BarChart = ({
  data,
  keys,
  indexBy,
  horizontalLabel,
  verticalLabel,
}: Props) => (
  <ResponsiveBar
    data={data}
    keys={keys}
    indexBy={indexBy}
    margin={{ top: 100, right: 100, bottom: 100, left: 100 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    borderColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
           1.6
        ]
      ]
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: horizontalLabel,
      legendPosition: 'middle',
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: verticalLabel,
      legendPosition: 'middle',
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
          1.6
        ]
      ]
    }}
    role="application"
    ariaLabel="Bar chart"
  />
);

export default BarChart;
