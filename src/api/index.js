import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  
  try {
    // get specific objects from data object of the response.
    const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(URL);
    return { confirmed, recovered, deaths, lastUpdate };
    
  } catch (error) {
    console.log(error);
  }
}