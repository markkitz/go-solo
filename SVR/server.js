// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var cors = require('cors');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 6969;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });
// });
router.route('/coursePackYears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
//     .post(function(req, res) {
//
//         var bear = new Bear();      // create a new instance of the Bear model
//         bear.name = req.body.name;  // set the bears name (comes from the request)
//
//         // save the bear and check for errors
//         bear.save(function(err) {
//             if (err)
//                 res.send(err);
//
//             res.json({ message: 'Bear created!' });
//         });
//
//     })
    .get(function(req, res) {
        var termId =1;
        const years = {years : [
            {id:1, year:'2015-16', terms:[{id: termId++, term:'Summer'}, {id: termId++, term:'Fall'}, {id: termId++, term:'Winter'}, {id: termId++, term:'Spring'}]},
            {id:2, year:'2014-15', terms:[{id: termId++, term:'Summer'}, {id: termId++, term:'Fall'}, {id: termId++, term:'Winter'}, {id: termId++, term:'Spring'}]},
            {id:3, year:'2013-14', terms:[{id: termId++, term:'Summer'}, {id: termId++, term:'Fall'}, {id: termId++, term:'Winter'}, {id: termId++, term:'Spring'}]}
            ]};
       res.json(years);
    });

   router.route('/terms').get(function(req, res) {
       var termId = req.param('termId');
       var rtn = {
           courseInfo: {coursePackNumber: 'CPN_' + termId, title:'title_' + termId, subtitle: 'subtitle_' + termId},
           printDetails: {field1:'field1_' + termId}
       }
       res.json(rtn);
    });

var formData = {"rows":[{"columns":[{"fieldId":37,"showLabel":true,"label":"Mass Transit Access (m)","fieldType":"Numeric","columnSpan":6,"value":null,"isValid":true,"showColumn":true,"isSaving":false,"values":null,"options":null,"isEnum":false,"multiSelectOptions":null,"fieldIdentifier":"MASSTRANSITACCESSM"}]},{"columns":[{"fieldId":38,"showLabel":true,"label":"Rail Service","fieldType":"DropDown","columnSpan":6,"value":null,"isValid":true,"showColumn":true,"isSaving":false,"values":null,"options":[{"id":"55","value":"Available"},{"id":"56","value":"No Rail Service"}],"isEnum":false,"multiSelectOptions":null,"fieldIdentifier":"RAILSERVICE"}]},{"columns":[{"fieldId":39,"showLabel":true,"label":"Rail Supplier","fieldType":"DropDown","columnSpan":6,"value":null,"isValid":true,"showColumn":true,"isSaving":false,"values":null,"options":[{"id":"57","value":"CN"},{"id":"58","value":"CP"}],"isEnum":false,"multiSelectOptions":null,"fieldIdentifier":"RAILSUPPLIER"}]}],"label":"Transportation"}

    router.route('/getLot').get(function(req, res) {
        var lotId = req.param('lotId');
        var rtn = {
            lotId: lotId,
            formData: formData
        }
        res.json(rtn);
     });



// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
