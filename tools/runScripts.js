const readMarkers = require('./readLandmarks');
const readGathering = require('./readGatheringLocations');
const gatheringDataMerge = require('./gatheringDataMerge');

readMarkers.getMarkers('en');
//readGathering.getMarkers('en');

gatheringDataMerge.mapDataMerge('en', 'halpha');
gatheringDataMerge.mapDataMerge('jp', 'halpha');
