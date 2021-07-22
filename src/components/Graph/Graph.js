import React from 'react';
import LineCharts from './LineChart';
import PieCharts from './PieChart';


export default function Graph(){
    return(
        <>
             <div class="row">
            {/* Area Chart */}
            <div class="col-xl-8 col-lg-7">
                <div class="card shadow mb-4">
                   <LineCharts />
                </div>
            </div>
            {/* Pie Chart  */}
                        <div class="col-xl-4 col-lg-5">
                            <PieCharts />
                        </div>

        </div>
        </>
    )
}