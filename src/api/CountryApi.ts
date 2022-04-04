import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
});

export default {
  getAllCountries: () => instance.get('all?fields=name,flags'),
  getCountryByCode: (code: string) => instance.get(`alpha/${code}`),
  getCountryByName: (name: string) => instance.get(`name/${name}`),
};
