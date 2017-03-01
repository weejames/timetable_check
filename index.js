var soap = require('soap');
var url = 'https://lite.realtime.nationalrail.co.uk/OpenLDBWS/wsdl.aspx?ver=2016-02-16';
var args = {
    numRows: 10,
    crs: 'PWE',
    filterCrs: 'GLC',
    filterType: 'to',
    timeOffset: 0,
    timeWindow: 35
};

var soapHeader = {
    AccessToken: {
        TokenValue: process.env.RAIL_API_TOKEN
    }
};

soap.createClient(url, function(err, client) {

    client.addSoapHeader(soapHeader);

    client.GetDepartureBoard(args, function(err, result) {
        console.log(result.GetStationBoardResult.trainServices);
        //console.log(client.lastRequest);
    });
});
