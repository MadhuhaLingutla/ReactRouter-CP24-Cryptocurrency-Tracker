// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    currenciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getcurrenciesData()
  }

  getcurrenciesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({currenciesData: updatedData, isLoading: false})
  }

  currenciesListDisplay = () => {
    const {currenciesData} = this.state

    return (
      <div className="cryptocurrency-table">
        <div className="table-heading">
          <p className="type">Coin Type</p>
          <div className="usd-euro-container">
            <p className="usd">USD</p>
            <p className="euro">Euro</p>
          </div>
        </div>
        <ul className="currencies-container">
          {currenciesData.map(each => (
            <CryptocurrencyItem item={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="currencieslist-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="logo-image"
        />
        {isLoading ? (
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        ) : (
          this.currenciesListDisplay()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
