import React, { FC } from "react";
import { useQuery } from 'react-query';
import countryApi from '../api/CountryApi';
import Container from '../components/UI/Container/Container';

const Countries: FC = () => {
  const query = useQuery('countries', countryApi.getAllCountries);
  return (
    <Container>
      <div>
        {query.data?.data.map((country: any) => (
          <div>{country.name.common}</div>
        ))}
      </div>
    </Container>
  );
};

export default Countries;
