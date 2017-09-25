'use strict';

const _ = require('underscore');
const stringSimilarity = require('string-similarity');

const countries = require('./data/countries.json');
const regions = require('./data/regions.json');

const countryNames = _.pluck(countries, 'name');
const regionNames = _.pluck(regions, 'name');

exports.find = {

    country: (searchString) => {
        
        if (!searchString) {
            return undefined;
        }

        var sString = searchString;

        var result = _.find(countries, (item) => {
            return item.cca2.toLowerCase() === sString.toLowerCase() || item.name.toLowerCase() === sString.toLowerCase();
        });

        if (!result) {

            var similarity = stringSimilarity.findBestMatch(searchString, countryNames);            

            if (similarity.bestMatch.rating < 0.5) {
                return;
            }

            sString = similarity.bestMatch.target;

            result = _.find(countries, (item) => {
                return item.cca2.toLowerCase() === sString.toLowerCase() || item.name.toLowerCase() === sString.toLowerCase();
            });

        }

        return result;

    },

    region: (searchString) => {

        if (!searchString) {
            return undefined;
        }

        var sString = searchString;
        
        var result = _.find(regions, (item) => {
            return item.cca2.toLowerCase() === sString.toLowerCase() || item.name.toLowerCase() === sString.toLowerCase();
        });

        if (!result) {

            var similarity = stringSimilarity.findBestMatch(searchString, regionNames);
            
            if (similarity.bestMatch.rating < 0.5) {
                return;
            }

            sString = similarity.bestMatch.target;

            result = _.find(regions, (item) => {
                return item.cca2.toLowerCase() === sString.toLowerCase() || item.name.toLowerCase() === sString.toLowerCase();
            });
        }

        return result;

    }

};