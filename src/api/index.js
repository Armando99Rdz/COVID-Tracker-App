import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  
  try {
    // get specific objects from data object of the response.
    const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(URL);
    return { confirmed, recovered, deaths, lastUpdate };
    
  } catch (error) {
    console.error(error);
  }
}

export const fetchDailyData = async () => {
  try {
    //const currentDate = new Date();
    //const formatedDate = 
    //  `${currentDate.getMonth()}-${currentDate.getDate()}-${currentDate.getFullYear()}`;

    const { data } = await axios.get(`${URL}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;

  } catch (error) {
    console.error(error);
  }
}