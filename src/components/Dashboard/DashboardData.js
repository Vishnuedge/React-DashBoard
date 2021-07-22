import React from 'react'

export default function DashboardData({data}) {
    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className={`card  shadow h-100 py-2 border-left-${data.color}`} >
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className= {`text-${data.color} text-xs font-weight-bold text-uppercase mb-1`} >
                                {data.Earnings}
                            </div>
                            <div className="row no-gutters align-items-center">
                                <div className="col-auto">
                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{data.value}</div>
                                </div>
                                <div className="col">
                                    {
                                        data.bar
                                        ? <div className="progress progress-sm mr-2">
                                                <div className="progress-bar bg-info" role="progressbar"
                                                    style = {{width:"50%"}} aria-valuenow="50" aria-valuemin="0"
                                                    aria-valuemax="100">
                                                </div>
                                            </div>
                                        : ''
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className= {`${data.symbol} fa-2x text-gray-300`} ></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
