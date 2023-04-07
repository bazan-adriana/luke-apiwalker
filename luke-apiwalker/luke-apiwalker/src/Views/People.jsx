import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const People = () => {
    const [person, setPerson] = useState();
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                setPerson(response.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {person ? (
                <div>
                    <h1>{person.name}</h1>
                    <p>Height: {person.height}</p>
                    <p>Mass: {person.mass}</p>
                    <p>Hair Color: {person.hair_color}</p>
                    <p>Skin Color: {person.skin_color}</p>
                </div>
            ) : (
                <div>
                    <p className='text-danger'>These aren't the droids you're looking for</p>

                    <img src='https://m.media-amazon.com/images/M/MV5BOTAxOTlmOTAtMjA0Yy00YjVjLWE3OTQtYjAzMWMxOTAwZTY1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg'
                        width="400" alt='' />
                </div>
            )
            }
        </div>
    )
}

export default People;
