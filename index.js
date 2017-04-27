'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
    
    var thing = req.body.result.parameters.echoText
    var city = req.body.result.parameters.geoCity
    var speech = `Hello ${name}, how's ${city} treating you?`;

    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});

restService.post('/search', function(req, res) {
    
    var thing = req.body.result.parameters.yellThing
    var city = req.body.result.parameters.yellLocation
    
    var encodedThing = encodeURIComponent(thing)
    var encodedCity = encodeURIComponent(city)

    var speech = `Okay, here's what I found... https://www.yell.com/ucs/UcsSearchAction.do?keywords=${encodedThing}&location=${encodedCity}`;
           
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});


restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
