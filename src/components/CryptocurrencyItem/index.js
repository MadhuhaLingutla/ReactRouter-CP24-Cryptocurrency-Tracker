// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {item} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = item
  return (
    <li className="currencyitem-container">
      <div className="title-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
