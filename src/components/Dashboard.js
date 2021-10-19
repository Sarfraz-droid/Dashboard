import React from 'react'
import {Bar,Doughnut} from 'react-chartjs-2'
function Dashboard({Data}) {
    return (
        <div className="dashboard">
            <div className="bar-graph">
            <Bar 
                data={{
                    labels: Data.map((info) => info.first_name),
                    datasets:[
                       { 
                           label: 'ID data',
                           data: Data.map((info) => info.id),
                           backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
            
                        }
                    ]
                }}
                height = {600}
                width = {800}

                options={{
                    maintainAspectRatio: false,
                }}
            />
            </div>
            <div>
                <Doughnut
                                data={{
                                    labels: Data.map((info) => info.first_name),
                                    datasets:[
                                       { 
                                           label: 'ID data',
                                           data: Data.map((info) => info.id),
                                           backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(153, 102, 255, 0.2)',
                                            'rgba(255, 159, 64, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                            'rgba(255, 159, 64, 1)'
                                        ],
                                        borderWidth: 1
                            
                                        }
                                    ]
                                }}
                                height = {600}
                                width = {800}
                
                                options={{
                                    maintainAspectRatio: false,
                                }} 
                />
            </div>

        </div>
    )
}

export default Dashboard
