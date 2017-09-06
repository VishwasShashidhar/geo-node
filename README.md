# geo-node [![Build Status](https://travis-ci.org/VishwasShashidhar/geo-node.svg)](https://travis-ci.org/VishwasShashidhar/geo-node)
A set of APIs to provide geo specific details

# Purpose
To help people get geo specific information using javascript. There is hardly any collated info on countries, cities and regions. Hence the motivation to help self and others.

# Installation
`npm install geo-node`

# API Details
Currently, the API supports getting countries (251 of them) and regions (only India at this point, will add more data in the future)

NOTE: All the search strings are case-insensitive

## Find Country By Code

```
const geonode = require('geo-node');

const country = geonode.find.country("IN");
console.log(country.name);

```
## Find Country By Name

```
const geonode = require('geo-node');

const country = geonode.find.country("India");
console.log(country.name);

```

## Find Region By Code

```
const geonode = require('geo-node');

const region = geonode.find.country("KA");
console.log(region.name);

```
## Find Country By Name

```
const geonode = require('geo-node');

const region = geonode.find.country("karnataka");
console.log(region.name);

```

# Data Format

## Countries

```
{
   "name":"India",
   "nativeName":"\u092d\u093e\u0930\u0924",
   "tld":[
      ".in"
   ],
   "cca2":"IN",
   "ccn3":"356",
   "cca3":"IND",
   "currency":[
      "INR"
   ],
   "callingCode":[
      "91"
   ],
   "capital":"New Delhi",
   "altSpellings":[
      "IN",
      "Bh\u0101rat",
      "Republic of India",
      "Bharat Ganrajya"
   ],
   "relevance":"3",
   "region":"Asia",
   "subregion":"Southern Asia",
   "language":[
      "Hindi",
      "English"
   ],
   "languageCodes":[
      "hi",
      "en"
   ],
   "translations":{
      "de":"Indien",
      "es":"India",
      "fr":"Inde",
      "it":"India",
      "ja":"\u30a4\u30f3\u30c9",
      "nl":"India",
      "hr":"Indija"
   },
   "latlng":[
      20,
      77
   ],
   "demonym":"Indian",
   "borders":[
      "AFG",
      "BGD",
      "BTN",
      "MMR",
      "CHN",
      "NPL",
      "PAK",
      "LKA"
   ],
   "area":3287590
}
```

## Regions

```
{
   "name":"Karnataka",
   "ccn3":29,
   "cca2":"KA"
}
```

# Contributing

Please feel free to fork the repo and create a PR. Raise issues as required.