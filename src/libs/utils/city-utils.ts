import { ICity, ICityKeys, ICityUniqueKeys } from '../interfaces/city-interface';

interface findCityDataByValueProps {
    cityList: ICity[];
    key?: ICityUniqueKeys;
    value: string;
}

interface filterCitiesProps {
    cityList: ICity[];
    key?: ICityKeys;
    value: string;
}

interface filterCitiesByCountryStateProps {
    cityList: ICity[];
    countryCode: string;
    stateCode: string;
}

export const findCityByKeyValue = ({ cityList, key = 'code', value }: findCityDataByValueProps): ICity | null => {
    if (value && cityList != null) {
        const index = cityList.findIndex((obj) => {
            return obj[key] === value;
        });

        return index !== -1 ? cityList[index] : null;
    }

    return null;
};

export const filterCities = ({ cityList, key = 'code', value }: filterCitiesProps): ICity[] | null => {
    if (value && cityList != null) {
        return cityList.filter(function (obj) {
            return obj[key] === value;
        });
    }

    return null;
};

export const filterCitiesByCountryState = ({ cityList, countryCode, stateCode }: filterCitiesByCountryStateProps): ICity[] | null => {
    if (countryCode && stateCode && cityList != null) {
        return cityList.filter(function (obj) {
            return obj['cCode'] === countryCode && obj['sCode'] === stateCode;
        });
    }

    return null;
};
