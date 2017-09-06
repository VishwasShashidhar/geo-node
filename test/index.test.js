const geonode = require('../index');

describe('find', () => {

    it('find a country by code', () => {
        const countryData = geonode.find.country("IN");
        expect(countryData.name).toBe("India");
        expect(countryData.cca2).toBe("IN");
    });

    it('find a country by name', () => {
        const countryData = geonode.find.country("india");
        expect(countryData.name).toBe("India");
        expect(countryData.cca2).toBe("IN");
    });

    it('find a region by name', () => {
        const regionData = geonode.find.region("karnataka");
        expect(regionData.name).toBe("Karnataka");
        expect(regionData.cca2).toBe("KA");
    });

    it('find a region by code', () => {
        const regionData = geonode.find.region("ka");
        expect(regionData.name).toBe("Karnataka");
        expect(regionData.cca2).toBe("KA");
    });

});