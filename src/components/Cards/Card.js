import React from 'react'
import useStyles from './cardStyles'
import { Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup'

function Cards({data, title, lastUpdate, name}) {
    const classes = useStyles();
    let className;
    switch (title) {
        case 'Confrimed Cases':
            className = classes.root2
            break;
        case 'Number of Deaths':
            className = classes.root1
            break;
        case 'Number of Recovered':
            className = classes.root3
            break;
        default:
            className = null;
    }
    if (!data) {
        return <h1>Loading</h1>
    } else {
        return (
            <Card className={className}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <CountUp start={0} end={data.value} separator=',' duration={2.5}/>
                    </Typography>
                    <br />
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Total number of Covid-19 cases!!
                    </Typography>
                </CardContent>
          </Card>
        )
    }
}

export default Cards