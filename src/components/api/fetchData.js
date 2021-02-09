import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let fetchUrl = url
    if (country && country !== 'global') {
        fetchUrl = `${url}/countries/${country}`;
    } 
    try {
        const {data : {confirmed, deaths, lastUpdate, recovered }} = await axios.get(fetchUrl)
        const data = {
            confirmed,
            deaths,
            lastUpdate,
            recovered
        }
        return data 
    } catch (error) {
        return error
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const objectData = data.map(dataItem => ({
            confirmed : dataItem.confirmed.total,
            deaths : dataItem.deaths.total,
            date : dataItem.reportDate
        }));
        return objectData;
    } catch (error) {
        return error        
    }
}

export const fetchCountries = async () => {
    try {
        const { data :{countries} } = await axios.get(`${url}/countries`)
        const fetchedCountries = countries.map(country => country.name);
        return fetchedCountries;
    } catch (error) {
        return error        
    }
}