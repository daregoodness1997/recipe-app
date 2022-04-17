// https://rapidapi.com/calorieninjas/api/calorieninjas/
import axios from 'axios';

const apiKey = import.meta.env.VITE_APIKEY;

const instance = axios.create({
  baseURL: 'https://calorieninjas.p.rapidapi.com/v1',
  headers: {
    'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com',
    'X-RapidAPI-Key': apiKey,
  },
});

export default {
  handleRecipe: async keyword => {
    try {
      // const options = await instance({
      //   method: 'GET',
      //   url: '/nutrition',
      //   params: { query: keyword },
      // });
      const options = {
        method: 'GET',
        url: 'https://calorieninjas.p.rapidapi.com/v1/nutrition',
        params: { query: keyword },
        headers: {
          'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com',
          'X-RapidAPI-Key': apiKey,
        },
      };
      const response = await axios.request(options);

      // console.log('data', response.data);

      return response;
    } catch (err) {
      console.log(err);
    }
  },
};
