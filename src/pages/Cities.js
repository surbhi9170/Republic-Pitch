import React, { useState } from 'react'
import './cities.css'
import cities from './../cities.json'
import Dropdown from 'react-bootstrap/Dropdown'

const Cities = () => {
  const [selectedState, setSelectedState] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const states = [...new Set(cities.map((city) => city.state))]

  const handleStateChange = (state) => {
    setSelectedState(state)
    setSelectedCity('') // Reset selected city when state changes
  }

  return (
    <div className="container">
      <h1 className="heading">Cities</h1>

      <Dropdown className="col-5">
        <Dropdown.Toggle variant="success" id="state-dropdown">
          Select State
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {states.map((state, index) => (
            <Dropdown.Item
              key={state}
              eventKey={state}
              onClick={() => handleStateChange(state)}
            >
              {state}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {selectedState && (
        <div className="selected-state">Selected state: {selectedState}</div>
      )}

      {selectedState && (
        <Dropdown className="col-5">
          <Dropdown.Toggle variant="success" id="city-dropdown">
            {selectedState ? 'Select City' : 'Choose State First'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {cities
              .filter((city) => city.state === selectedState)
              .map((city) => (
                <Dropdown.Item
                  key={city.id}
                  eventKey={city.id}
                  onClick={() => setSelectedCity(city.name)}
                >
                  {city.name}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
      {selectedCity && (
        <div className="selected-city">Selected City: {selectedCity}</div>
      )}
    </div>
  )
}

export default Cities
