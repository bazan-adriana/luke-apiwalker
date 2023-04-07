import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const [resource, setResource] = useState("people");
    const [id, setId] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate(`${resource}/${id}`)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> 
                    Search for:
                    <select name='resource' value={resource} onChange={(e) => setResource(e.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>  
                </label> <span/>
                <label>
                    ID:
                    <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
                </label> <span/>
                <button className='btn btn-primary' type="submit">Search</button>
            </form>  
        </div>
    );   
}

export default Form;