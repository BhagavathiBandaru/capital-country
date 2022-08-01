import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activateCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activateCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activateCapitalId} = this.state

    const getCountryName = countryAndCapitalsList.find(
      eachCapitalName => eachCapitalName.id === activateCapitalId,
    )

    return getCountryName.country
  }

  render() {
    const {activateCapitalId} = this.state
    const country = this.getCountry(activateCapitalId)

    return (
      <div className="app-container">
        <div className="country-capital-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="select-option"
              onChange={this.onChangeCapital}
              value={activateCapitalId}
            >
              {countryAndCapitalsList.map(eachCapitalName => (
                <option
                  key={eachCapitalName.id}
                  value={eachCapitalName.id}
                  className="option-styling"
                >
                  {eachCapitalName.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question"> is capital of which country?</p>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
