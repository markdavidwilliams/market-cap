import React from 'react';
import { Doughnut } from 'react-chartjs-2';

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
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                     ]
                    }]
                }
            }
          )
       }
   }


    render() {
        return (
            <div>
                <Doughnut
                data={this.state.data}
                options={{
                    title: {
                      display: true,
                      text: 'Market Caps',
                      fontSize: 25,
                    },
                  }}
                datasetKeyProvider={() => Math.random()} />
            </div>
        )
    }
}

export default MarketChart;