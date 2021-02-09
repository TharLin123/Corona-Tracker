import React,{ useState, useEffect } from 'react'
import { fetchCountries } from '../api/fetchData';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

function CountryPicker({changeAction}) {
    const [countries , setCountries ] = useState([]);

    useEffect(() => {
        fetchCountries().then(data => {
            setCountries(data)
        })
    },[setCountries])

    return (
        <div>
            <FormControl>
                <NativeSelect onChange={changeAction}>
                    <option value='global'>Global</option>
                    {countries.map((country,index) =>(
                        <option key={index} value={country}>{country}</option>
                    ))}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker