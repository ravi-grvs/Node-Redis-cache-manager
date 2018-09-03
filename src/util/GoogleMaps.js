const util = require('util');
const googleMapsClient = require('@google/maps')
    .createClient({
        key: 'add_google_maps_api_key',
        Promise: Promise
    });

let latlng = [32.855038, -96.797592]
googleMapsClient.reverseGeocode({ latlng }).asPromise()
    .then((response) => {
        console.log('\n*******************  XXXXXX  ******************** \n');
        console.log('Reverse Geocode ', util.inspect(response.json.results[0], false, null));
    })
    .catch((err) => {
        console.log(err);
    });

googleMapsClient.geocode({ address: '1600 Amphitheatre Parkway, Mountain View, CA' })
    .asPromise()
    .then((response) => {
        console.log('\n******************* XXXXXX  ******************** \n');
        console.log('Reverse Geocode ', util.inspect(response.json.results[0], false, null));
    })
    .catch((err) => {
        console.log(err);
    });