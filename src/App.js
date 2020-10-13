import React from 'react';

import {  Cards, Chart, CountryPicker, Header, Footer } 
  from './components'; // components/index.js
  
import { fetchData } from './api';

import styles from './App.module.css';
//import coverImage from './img/cover.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount(){
    // fetch the data
    const fetchedData = await fetchData();
    // set the state
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    // fetch the data
    const fetchedData = await fetchData(country);
    // set the state
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country} = this.state;
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Cards data={data} />
          <Chart data={data} country={country}/>
        </div>
        <Footer />
      </div>
    )
  }
}
export default App;