const geonode = require('../index');

describe('test geo node api', () => {

    describe('test country api', () => {

        it('should find a country by code', () => {
            const countryData = geonode.find.country("IN");
            expect(countryData.name).toBe("India");
            expect(countryData.cca2).toBe("IN");
        });
    
        it('should find a country by name', () => {
            const countryData = geonode.find.country("india");
            expect(countryData.name).toBe("India");
            expect(countryData.cca2).toBe("IN");
        });
        
        it('should find a country by best match name', () => {
            const countryData = geonode.find.country("indian");
            expect(countryData.name).toBe("India");
            expect(countryData.cca2).toBe("IN");
        });
        
        it('should return undefined in case of bad country name', () => {
            const countryData = geonode.find.country("blah blah");
            expect(countryData).toBeUndefined();            
        });

    });    

    describe('test region api', () => {

        it('should find a region by code', () => {
            const regionData = geonode.find.region("ka");
            expect(regionData.name).toBe("Karnataka");
            expect(regionData.cca2).toBe("KA");
        });
    
        it('should find a region by name', () => {
            const regionData = geonode.find.region("karnataka");
            expect(regionData.name).toBe("Karnataka");
            expect(regionData.cca2).toBe("KA");
        });
    
        it('should find a region by best match name', () => {
            const regionData = geonode.find.region("Andra Pradesh");
            expect(regionData.name).toBe("Andhra Pradesh");
            expect(regionData.cca2).toBe("AP");
        });
    
        it('should return undefined in case of bad region name', () => {
            const regionData = geonode.find.region("blah blah");
            expect(regionData).toBeUndefined();
        });

    });

});