import {FaChartArea} from 'react-icons/fa';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
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
        position: 'top',
      }
    },
  };
  
  const labels = ["Mar 1","","Mar 3","","Mar 5","","Mar 7","","Mar 9","","Mar 11","","Mar 13"];
  
  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Sesssions',
        data: [10000,30162,26263,18394,18287,28682,31274,33259,25849,24159,32651,31984,38451],
        borderColor: 'rgb(60, 60, 255)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        pointRadius:5,
        pointBackgroundColor:'rgb(0,0,255)',
        pointBorderColor:'rgb(255,255,255)',

      },
    ],
  };
  
  



export const Barchart = () => {
  return (
    <div className="border rounded-sm">
    <div className="flex items-center gap-x-2 bg-slate-100 px-2 py-1"> 
        <FaChartArea/>
        <h6>Area Chart Example</h6>
    </div>
    <div className="p-2 w-[100%]">
    <Line options={options} data={data} />

    </div>
</div>
  )
}
