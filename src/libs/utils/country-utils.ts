import { ICountry, ICountryUniqueKeys } from '../interfaces';

interface findCountryDataByValueProps {
    countryList: ICountry[];
    key?: ICountryUniqueKeys;
    value: string;
}

export const findCountryByKeyValue = ({ countryList, key = 'iso2', value }: findCountryDataByValueProps): ICountry | null => {
    if (value && countryList != null) {
        const index = countryList.findIndex((obj) => {
            return obj[key] === value;
        });

        return index !== -1 ? countryList[index] : null;
    }

    return null;
};
