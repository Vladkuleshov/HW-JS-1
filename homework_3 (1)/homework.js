console.table(countries);

function getNames(countries) {
    var countryNames = [];
    for(var item = 0; item < countries.length; item++) {
        var country = countries[item];
        countryNames.push(country.name);
    }
    return countryNames;
}
var names = getNames(countries);
console.log(names);

function getCapitals(countries) {
    var countryCapitals = [];
    for(var item = 0; item < countries.length; item++) {
        var country = countries[item];
        if(country.capital) {
            countryCapitals.push(country.capital);
        }
    }
    return countryCapitals;
}
var capitals = getCapitals(countries);
console.log(capitals);


function getAverageArea(countries) {
    var countryAreas = [];
    var areaSum = 0;
    for(var item = 0; item < countries.length; item++) {
        var country = countries[item];
        areaSum += country.area;
    }
    return (areaSum / countries.length).toFixed();
}
var average = getAverageArea(countries)
console.log(getAverageArea);

function getUniqueRegions(countries) {
    var uniqueRegions = [];
    for(item = 0; item < countries.length; item++) {
        var country = countries[item];
        // if(uniqueRegions.indexOf(country.region) < 0) {
        //     uniqueRegions.push(country.region);
        // }
        if(!uniqueRegions.includes(country.region)) {
            uniqueRegions.push(country.region);
        }
    }
    return uniqueRegions;
}
var unique = getUniqueRegions(countries);
console.log(unique)
//пример: unique -> ["Asia", "Europe", "Africa", "Oceania", "Americas", "Polar", "Antarctic Ocean", "Antarctic"]