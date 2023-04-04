<h1 align="center">
   <b>
        <a href="https://github.com/Chamara-g/rc-geographic">rc-geographic</a><br>
    </b>
</h1>

<p align="center">Dataset for Countries, States, and Cities</p>

<p align="center">
    <a href="https://github.com/Chamara-g/rc-geographic"><b>Website</b></a> •
    <a href="https://github.com/Chamara-g/rc-geographic"><b>Documentation</b></a>
</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/rc-geographic.svg?style=flat-square)](https://www.npmjs.com/package/rc-geographic)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=rc-geographic&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.com/result?p=rc-geographic)
[![npm downloads](https://img.shields.io/npm/dm/rc-geographic.svg?style=flat-square)](https://npm-stat.com/charts.html?package=rc-geographic)
[![Known Vulnerabilities](https://snyk.io/test/npm/rc-geographic/badge.svg)](https://snyk.io/test/npm/rc-geographic)

</div>

## Table of Contents

  - [Features](#features)
  - [Browser Support](#browser-support)
  - [Installing](#installing)
  - [API Summary](#api-summary)

## Features

  - Read Country List
  - Read States by Country
  - Read Cities by Country and State
  - Get the Longitude and Latitude of the Country, State, and City

## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

## Installing

```bash
$ npm install rc-geographic
```

## API Summary

Methods which you can use

| Function  |  | Return |
| --- | --- | --- |
| [`getAllCountries()`](#getallcountries) | Return all countries | [`ICountry[]`](#getallcountries) |
| [`getCountryByCode(countryCode: str)`](#getcountrybycodecountrycode-str) | Return country by Country code | [`ICountry`](#getallcountries) |
| [`getCountryByKeyValue(key: ICountryUniqueKeys, value: str)`](#getcountrybykeyvaluekey-icountryuniquekeys-value-str) | Return country by any specified code | [`ICountry`](#getallcountries) |
| [`getAllStates()`](#getallstates) | Return all States | [`IState[]`](#getallcountries) |
| [`getStatesByCountry(countryCode: str)`](#getstatesbycountrycountrycode-str) | Return states by Country code | [`IState[]`](#getallcountries) |
| [`getStateByKeyValue(key: IStateUniqueKeys, value: str)`](#getstatebykeyvaluekey-istateuniquekeys-value-str) | Return state by any specified code | [`IState`](#getallcountries) |
| [`getAllCities()`](#getallcities) | Return all Cities | [`ICity[]`](#getallcountries) |
| [`getCityByKeyValue(key: ICityUniqueKeys, value: str)`](#getcitybykeyvaluekey-icityuniquekeys-value-str) | Return city by any specified code | [`ICity`](#getallcountries) |
| [`getCitiesByCountry(countryCode: str)`](#getcitiesbycountrycountrycode-str) | Return cities by Country code | [`ICity[]`](#getallcountries) |
| [`getCitiesByCountryAndState(countryCode: str, stateCode: str)`](#getcitiesbycountryandstatecountrycode-str-statecode-str) | Return cities by country and state code | [`ICity[]`](#getallcountries) |

## API

### getAllCountries()

Return all countries

return type: <b>json | ICountry[]</b>

```javascript
import { getAllCountries } from 'rc-geographic';

let countryList = getAllCountries();

[
    {
        "capital": "Kabul",
        "continent": "Asia",
        "currency": "Afghani",
        "iso2": "AF",
        "iso3": "AFG",
        "isoNumeric": "004",
        "name": "Afghanistan",
        "phoneCode": "93"
    }
    ...
]
```

### getCountryByCode(countryCode: str)

Return country by ISO2 Country code

return type: <b>json | ICountry</b>

```javascript
import { getCountryByCode } from 'rc-geographic';

let country = getCountryByCode("AF");

{
    "capital": "Kabul",
    "continent": "Asia",
    "currency": "Afghani",
    "iso2": "AF",
    "iso3": "AFG",
    "isoNumeric": "004",
    "name": "Afghanistan",
    "phoneCode": "93"
}
```

### getCountryByKeyValue(key: ICountryUniqueKeys, value: str)

Return country by any specified code

return type: <b>json | ICountry</b>

```javascript
import { getCountryByKeyValue } from 'rc-geographic';

let country = getCountryByKeyValue("iso3", "AFG");

{
    "capital": "Kabul",
    "continent": "Asia",
    "currency": "Afghani",
    "iso2": "AF",
    "iso3": "AFG",
    "isoNumeric": "004",
    "name": "Afghanistan",
    "phoneCode": "93"
}
```

### getAllStates()

Return all states

return type: <b>json | IState[]</b>

```javascript
import { getAllStates } from 'rc-geographic';

let stateList = getAllStates();

[
    {
        "cCode": "US",
        "code": "MD",
        "lat": "39.00039",
        "lng": "-76.74997",
        "name": "Maryland",
        "pCode": "",
        "tZone": "America/New_York"
    }
    ...
]
```

### getStatesByCountry(countryCode: str)

Return states by ISO2 Country code

return type: <b>json | IState[]</b>

```javascript
import { getStatesByCountry } from 'rc-geographic';

let stateList = getStatesByCountry("US");

[
    {
        "cCode": "US",
        "code": "MD",
        "lat": "39.00039",
        "lng": "-76.74997",
        "name": "Maryland",
        "pCode": "",
        "tZone": "America/New_York"
    }
    ...
]

```

### getStateByKeyValue(key: IStateUniqueKeys, value: str)

Return state by any specified code

return type: <b>json | IState</b>

```javascript
import { getStateByKeyValue } from 'rc-geographic';

let state = getStateByKeyValue("code", "MD");

{
    "cCode": "US",
    "code": "MD",
    "lat": "39.00039",
    "lng": "-76.74997",
    "name": "Maryland",
    "pCode": "",
    "tZone": "America/New_York"
}
```

### getAllCities()

Return all cities

return type: <b>json | ICity[]</b>

```javascript
import { getAllCities } from 'rc-geographic';

let cityList = getAllCities();

[
    {
        "cCode": "US",
        "code": "US-1",
        "lat": "30.88296",
        "lng": "-87.77305",
        "name": "Bay Minette",
        "pCode": "",
        "sCode": "AL"
        "tZone": "America/Chicago"
    }
    ...
]
```

### getCityByKeyValue(key: ICityUniqueKeys, value: str)

Return city by any specified code

return type: <b>json | ICity</b>

```javascript
import { getCityByKeyValue } from 'rc-geographic';

let city = getCityByKeyValue("code", "US-1");

{
    "cCode": "US",
    "code": "US-1",
    "lat": "30.88296",
    "lng": "-87.77305",
    "name": "Bay Minette",
    "pCode": "",
    "sCode": "AL"
    "tZone": "America/Chicago"
}
```

### getCitiesByCountry(countryCode: str)

Return cities by ISO2 Country code

return type: <b>json | ICity[]</b>

```javascript
import { getCitiesByCountry } from 'rc-geographic';

let cityList = getCitiesByCountry("US");

[
    {
        "cCode": "US",
        "code": "US-1",
        "lat": "30.88296",
        "lng": "-87.77305",
        "name": "Bay Minette",
        "pCode": "",
        "sCode": "AL"
        "tZone": "America/Chicago"
    }
    ...
]

```

### getCitiesByCountryAndState(countryCode: str, stateCode: str)

Return cities by ISO2 Country code, and state code

return type: <b>json | ICity[]</b>

```javascript
import { getCitiesByCountryAndState } from 'rc-geographic';

let cityList = getCitiesByCountryAndState("US", 'FL');

[
    {
        "cCode": "US",
        "code": "US-11",
        "lat": "28.18085",
        "lng": "-82.68177",
        "name": "Trinity",
        "pCode": "",
        "sCode": "FL"
        "tZone": "America/New_York"
    }
    ...
]

```

## Types

### ICountry
```javascript

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

```

### ICountryUniqueKeys
```javascript

export type ICountryUniqueKeys = 'iso2' | 'iso3' | 'isoNumeric';

```

### ICountryKeys
```javascript

export type ICountryKeys = 'name' | 'iso2' | 'iso3' | 'isoNumeric' | 'phoneCode' | 'currency' | 'continent' | 'capital';

```

### IState
```javascript

export interface IState {
    code: string;
    name: string;
    cCode: string;
    pCode: string;
    lat: string;
    lng: string;
    tZone: string;
}

```

### IStateUniqueKeys
```javascript

export type IStateUniqueKeys = 'code';

```

### IStateKeys
```javascript

export type IStateKeys = 'code' | 'name' | 'cCode' | 'pCode' | 'lat' | 'lat' | 'tZone';

```

### ICity
```javascript

export interface ICity {
    code: string;
    name: string;
    cCode: string;
    sCode: string;
    pCode: string;
    lat: string;
    lng: string;
    tZone: string;
}

```

### ICityUniqueKeys
```javascript

export type ICityUniqueKeys = 'code';

```

### ICityKeys
```javascript

export type ICityKeys = 'code' | 'name' | 'cCode' | 'sCode' | 'pCode' | 'lat' | 'lat' | 'tZone';

```