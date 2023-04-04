import { ICity, ICityUniqueKeys } from '../interfaces';
import { filterCities, filterCitiesByCountryState, findCityByKeyValue } from '../utils/city-utils';

import cityList from '../../data/cityList.json';

// Get all city list
export const getAllCities = (): ICity[] => {
    return cityList;
};

// Get City by custom Key
export const getCityByKeyValue = (key: ICityUniqueKeys, value: string): ICity | null => {
    return findCityByKeyValue({ cityList, value, key });
};

// Get city list by Country
export const getCitiesByCountry = (countryCode: string): ICity[] | null => {
    return filterCities({ cityList, key: 'cCode', value: countryCode });
};

// Get city list by Country
export const getCitiesByCountryAndState = (countryCode: string, stateCode: string): ICity[] | null => {
    return filterCitiesByCountryState({ cityList, countryCode, stateCode });
};
