import React from 'react';
import { Doughnut } from 'react-chartjs-2';

class MarketChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            this.setState({data: this.props.data });
        }
    }

    render() {
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }
}

export default MarketChart;