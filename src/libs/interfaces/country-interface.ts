export type ICountryKeys = 'name' | 'iso2' | 'iso3' | 'isoNumeric' | 'phoneCode' | 'currency' | 'continent' | 'capital';

export type ICountryUniqueKeys = 'iso2' | 'iso3' | 'isoNumeric';

export interface ICountry {
    name: string;
    iso2: string;
    iso3: string;
    isoNumeric: string;
    phoneCode: string;
    currency: string;
    continent: string;
    capital: string;
}
