import { ICountry, ICountryUniqueKeys } from '../interfaces';

import countryList from '../../data/countryList.json';

import { findCountryByKeyValue } from '../utils/country-utils';

// Get all country list
export const getAllCountries = (): ICountry[] => {
    return countryList;
};

// Get Country by ISO2 Code
export const getCountryByCode = (value: string): ICountry | null => {
    return findCountryByKeyValue({ countryList, value });
};

// Get Country by custom Key
export const getCountryByKeyValue = (key: ICountryUniqueKeys, value: string): ICountry | null => {
    return findCountryByKeyValue({ countryList, value, key });
};
