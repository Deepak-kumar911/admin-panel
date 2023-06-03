import {FaRegChartBar} from 'react-icons/fa'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    BarController,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    BarController,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    scales:{
      x:{grid:{display:false}}
     },
    responsive: true,
    plugins: {
      legend: {
        display:false,
        position: 'bottom',
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
  
  export const data = {
    labels,
    datasets: [
      {
        fill:false,
        pointBorderColor:'#ffffff',
        pointBackgroundColor:'#0000FF',
        pointBorderWidth:2,
        label: 'Revenue',
        data: [4215,5312,6251,7841,9821,14984],
        backgroundColor: ' rgb(60, 60, 255)',
      }
    ],
  };

export const AreaChart = () => {
  return (
    <div className="border rounded-sm">
    <div className="flex items-center gap-x-2 bg-slate-100 px-2 py-1"> 
        <FaRegChartBar/>
        <h6>Bar Chart Example</h6>
    </div>
    <div className="p-2 w-[100%]">
    <Bar options={options} data={data} />
    </div>
</div>
  )
}
