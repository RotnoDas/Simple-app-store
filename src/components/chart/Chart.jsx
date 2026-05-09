import { RechartsDevtools } from '@recharts/devtools';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = ({data}) => {
    const appData = data;
    return (
        <BarChart
            style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={appData}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
        >
            <XAxis dataKey="name" />
            <YAxis width="auto" dataKey="count" />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" activeBar={{ fill: '#9F62F2', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
            <RechartsDevtools />
        </BarChart>
    );
};

export default Chart;