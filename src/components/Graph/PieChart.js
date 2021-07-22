import React from 'react';
import { Chart } from './Chart'

const data1 = [
    {
        value : 20,
        fill : '#4e73df'
    },
    {
        value : 70,
        fill : '#1cc88a'
    },
    {
        value : 10,
        fill : '#36b9cc'
    }
];


export default function PieCharts(){
   
    return (
        <>
            <div class="card shadow mb-4">
                               {/* Card Header - Dropdown  */}
                                <div
                                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                    <div class="dropdown no-arrow">
                                        <a class="dropdown-toggle" href="#/" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div class="dropdown-header">Dropdown Header:</div>
                                            <a class="dropdown-item" href="#/">Action</a>
                                            <a class="dropdown-item" href="#/">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#/">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Card Body */}
                                <div class="card-body">
                                
                                    <div class="chart-pie pt-4 pb-2">
                                <Chart data={data1} datakey = "value" isDonut />

                                        <canvas id="myPieChart">

                                        </canvas>
                                    </div>
                                    <div class="mt-4 text-center small">
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-primary"></i> Direct
                                        </span>
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-success"></i> Social
                                        </span>
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-info"></i> Referral
                                        </span>
                                    </div>
                                </div>
                            </div>
        </>
    )
}