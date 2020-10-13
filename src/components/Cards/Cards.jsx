import React from'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import ClipLoader from "react-spinners/ClipLoader";
import cx from 'classnames';


import styles from './Cards.module.css';

const Cards = (props) => {
  
  const { data : { confirmed, recovered, deaths, lastUpdate } }= props;
  if (!confirmed){
    return (
      <ClipLoader 
        size={40} color={"#123abc"} loading={true} 
      />
    )
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">

        {/* Card Infectados */}
        <Grid item component={Card} xs={12} md={3} className={ cx(styles.card, styles.infected) }>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infectados</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2.5} separator="," className={styles.countup}/>
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toLocaleString()}</Typography>
            <Typography variant="body2">Número de casos activos por COVID-19</Typography>
          </CardContent>
        </Grid>

        {/* Card Recuperados */}
        <Grid item component={Card} xs={12} md={3} className={ cx(styles.card, styles.recovered) }>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2.5} separator="," className={styles.countup}/>
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toLocaleString()}</Typography>
            <Typography variant="body2">Número de recuperados por COVID-19</Typography>
          </CardContent>
        </Grid>

        {/* Card Muertes */}
        <Grid item component={Card} xs={12} md={3} className={ cx(styles.card, styles.deaths) }>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Muertes</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2.5} separator="," className={styles.countup}/>
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toLocaleString()}</Typography>
            <Typography variant="body2">Número de muertes por COVID-19</Typography>
          </CardContent>
        </Grid>

      </Grid>
    </div>
  )
}

export default Cards;