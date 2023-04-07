import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Planet = () => {
  const [planet, setPlanet] = useState();
  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
      .then(response => {
        setPlanet(response.data)
      })
      .catch(err => console.log(err))
  }, [id])

  return (
    <div>
      {planet ? (
        <div>
          <h1>{planet.name}</h1>
          <p>Climate: {planet.climate}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Surface Water: {planet.surface_water}</p>
          <p>Population: {planet.population}</p>
        </div>
      ) : (
        <div>
          <p className='text-danger'>These aren't the droids you're looking for</p>

          <img src='https://m.media-amazon.com/images/M/MV5BOTAxOTlmOTAtMjA0Yy00YjVjLWE3OTQtYjAzMWMxOTAwZTY1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg'
            width="300" alt='' />
        </div>
      )
      }
    </div>
  )
}

export default Planet;
