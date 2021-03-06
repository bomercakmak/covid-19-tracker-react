import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import covidImg from './images/covid.png'
import Footer from "./components/Footer/Footer"

class App extends Component {
  state = {
    data: {},
    country:''
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country});

  }

  render() {
    const { data ,country } = this.state;
    return (
     
      <div className={styles.a}>
        <img className={styles.image} src={covidImg} alt='COVID-19'/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        <Footer/>
        </div>
    );
  }
}

export default App;
