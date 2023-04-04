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
  - [Documentation](#documentation)

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

## Documentation

### getAllCountries()
<p>Returns all Countries</p>
<p>return type: <b>json | ICountry[]</b></p>

```
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

### getCountryByCode(countryCode)
<p>Accept Iso2 Country Code and return Country Data</p>
<p>return type: <b>json | ICountry</b></p>

```
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
