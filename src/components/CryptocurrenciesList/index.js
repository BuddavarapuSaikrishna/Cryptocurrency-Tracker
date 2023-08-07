// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrencyList extends Component {
  state = {isLoading: true, CryptocurrencyListData: []}

  componentDidMount() {
    this.getCryptocurrencyListData()
  }

  getCryptocurrencyListData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formateData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))

    this.setState({isLoading: false, CryptocurrencyListData: formateData})
  }

  renderCryptocurrencyList = () => {
    const {CryptocurrencyListData} = this.state

    return (
      <div className="cryptocurrency-list-container">
        <h1 className="main-heading">CryptoCurrency Tracker</h1>
        <img
          className="cryptocurrency-image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />

        <ul className="cryptocurrency-list-items">
          <li className="currency-table-header">
            <h1 className="currency-type">Type</h1>
            <div className="currency-values-container">
              <p className="usd-heading">USD</p>
              <p className="euro-heading">EURO</p>
            </div>
          </li>
          {CryptocurrencyListData.map(eachItem => (
            <CryptocurrencyItem
              CryptocurrencyDetails={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="App-container">
        {isLoading ? this.renderLoader() : this.renderCryptocurrencyList()}
      </div>
    )
  }
}

export default CryptocurrencyList
