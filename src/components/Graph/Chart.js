import React from 'react';

import { PieChart , Pie , Cell , ResponsiveContainer } from 'recharts';
const Chart = ({
    data ,
    datakey,
    isPadded
}) => {
    return (
        <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
                <Pie data={data} dataKey={datakey} startAngle={90} endAngle={450} paddingAngle={isPadded ? 8 : null}>
                    {
                        data.map( entry =>{
                            return (
                             <Cell key={entry.name} fill = {entry.fill} stroke={0} />
                            )
                        } )
                    }


                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}



export { Chart   };