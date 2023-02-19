const request = require("request");


// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

const axios = require('axios');

const client = axios.create({
  headers: {
    'Authorization': 'Bearer ' + "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"
  }
});



exports.getExercises = functions.https.onRequest(async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    var muscle = req.body.muscle;
    var exercises;
    var openAI;
    request.get({
        url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
        headers: {
            'X-Api-Key': 'jlKVURDMM25Ua2Y7RCqLsw==Tic83jqzxOclcbsQ'
        },
    }, function (error, response, body) {
        if (error) return console.error('Request failed:', error);
        else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
        else {
            exercises = JSON.parse(body);
            // make a new array with only names of exercises from exercises
            var exerciseNames = exercises.map(function(exercise) {
                return exercise.name;});
            
            const params = {
                "prompt": "Here is a workout routine using 5 exercises from this list: " + exerciseNames.join(", ") + ", including sets and reps for each exercise. Exclude workout advice. Find it below: ",
                "max_tokens": 250,
                "temperature": 0.6
              }
            client.post('https://api.openai.com/v1/engines/davinci/completions', params).then(result => {
            console.log(result.data);
            
            openAI = result.data;
            res.send({exercises, openAI});
            }).catch(err => {
            console.log(err);
        });

        }
    });
    
});
