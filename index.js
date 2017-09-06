'use strict';

const _ = require('underscore');

const countries = require('./data/countries.json');
const regions = require('./data/regions.json');

exports.find = {

    country: (searchString) => {
        if (!searchString) {
            return undefined;
        }

        return _.find(countries, (item) => {
            return item.cca2.toLowerCase() === searchString.toLowerCase() || item.name.toLowerCase() === searchString.toLowerCase();
        });

    },

    region: (searchString) => {
        if (!searchString) {
            return undefined;
        }

        return _.find(regions, (item) => {
            return item.cca2.toLowerCase() === searchString.toLowerCase() || item.name.toLowerCase() === searchString.toLowerCase();
        });
    }

};