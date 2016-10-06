//output = country name [single ] it will be have array of yes, no , other numbers
var fs = require('fs');
var fileText = fs.readFileSync(process.argv[2],'utf-8');
var lodash = require('lodash');

var columns_indexes = (process.argv).slice(3);

var papaparse = require('papaparse');
var data = papaparse.parse(fileText).data;

var filterData = function(record){
	var filterData = [];
	return lodash.pullAt(record, columns_indexes);
}

var reducedData = data.map(filterData);

console.log(papaparse.unparse(reducedData));

