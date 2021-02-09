import React, { Component } from 'react';
import Card from './components/Cards/Card';
import Chart from './components/Charts/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import { fetchData } from './components/api/fetchData'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import './App.css'

export class App extends Component {
    state = {
        data : {},
        country : ''
    }

    onChangeHandler = (event) => {
        event.preventDefault();
        fetchData(event.target.value).then(fetchedData =>{
            this.setState({
                data : fetchedData,
                country : event.target.value
            })
            console.log(this.state);
        })
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ 
            data : fetchedData,
        })
    }

    render() {
        const { data:{confirmed, deaths, lastUpdate, recovered} } = this.state;
        return (
            <div>
                <Typography variant="h2" align='center' direction='row' color='primary' display='block' gutterBottom>Corona Tracker</Typography><br/>
                <Grid container justify='center' spacing={10}>
                    <Grid item lg={3} sm={5}>
                        <Card data={confirmed} lastUpdate={lastUpdate} title='Confrimed Cases'/>
                    </Grid>
                    <Grid item lg={3} sm={5}>
                        <Card data={deaths} lastUpdate={lastUpdate} title='Number of Deaths'/>
                    </Grid>
                    <Grid item lg={3} sm={5}>
                        <Card data={recovered} lastUpdate={lastUpdate} title='Number of Recovered'/>
                    </Grid>
                    <Grid item lg={4} align='center' sm={10}>
                        <CountryPicker 
                        changeAction={this.onChangeHandler}
                        />
                    </Grid>
                    <Grid item lg={9} sm={10}>
                    <Chart 
                    confirmed={confirmed}
                    deaths={deaths}
                    recovered={recovered}
                    country={this.state.country}/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default App
