// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {CryptocurrencyDetails} = props
  const {
    currencyLogo,
    currencyName,
    usdValue,
    euroValue,
  } = CryptocurrencyDetails

  return (
    <li className="currency-details-container">
      <div className="currency-logo-name-container">
        <img className="currency-logo" src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className=" currency-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
