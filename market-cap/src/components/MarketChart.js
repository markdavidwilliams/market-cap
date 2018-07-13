import React from 'react';
import { Pie } from 'react-chartjs-2';

class MarketChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: [],
                    hoverBackgroundColor: [],
                }],
            },
        }
    }

   componentDidUpdate(prevProps) {
       if(prevProps !== this.props) {
          this.setState({
              data: {
                labels: this.props.labels,
                datasets: [{
                    data: this.props.marketCaps,
                    backgroundColor: [
                        '#ADD5D7',
                        '#F9AA7B',
                        '#A5A8AA',
                        '#FFE8AF',
                        '#EFBDE3',
                        '#AFD6C5',
                        '#BAABA9',
                        '#E5B0B3',
                        '#f2f7c0',
                        '#b9f7bf'

                    ],
                    hoverBackgroundColor: [
                        '#47ACB1',
                        '#F26522',
                        '#676766',
                        '#FFCD34',
                        '#96247A',
                        '#286C4F',
                        '#542923',
                        '#C9222B',
                        '#f0ff51',
                        '#2afc3f'
                     ]
                    }]
                }
            }
          )
       }
   }


    render() {
        return (
            <div className="chart">
                <Pie
                data={this.state.data}
                options={{
                    title: {
                      display: true,
                      text: 'Market Caps',
                      fontSize: 25,
                    },
                    legend: {
                        position: 'bottom',
                    }
                  }}
                datasetKeyProvider={() => Math.random()} />
            </div>
        )
    }
}

export default MarketChart;