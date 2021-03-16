import React, { Component } from 'react'
import { Cards, Chart,CountryPicker} from './components'
import styles from './App.module.css'


export class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Cards></Cards>
        <Chart></Chart>
        <CountryPicker></CountryPicker>
      </div>
    )
  }
}

export default App
