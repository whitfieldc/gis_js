var shp = require('shapefile');
var jf = require('jsonfile');

var shpPath = './data/shp/';
var geojsonPath = './data/geojson/';

shp.read(shpPath + 'ne_50m_urban_areas', function(err,json){
  jf.writeFile(geojsonPath + 'urban_areas.json', json, function(){
    console.log('done');
  });
});