

'use strict';
var Alexa = require('alexa-sdk');

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "Two Chainz Lyrics";
var GET_FACT_MESSAGE = "Here's a lyric: ";
var HELP_MESSAGE = "You can say tell me a two chains lyric, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye! As Two Chainz would say, Truuuuuuu";

var lyrics = [
    "pull up to the scene with my ceiling missing",
    "drinkin champagne on the airplane",
    "ballin so hard I deserve a and one",
    "let's get it jumpin, call it center court",
    "truuuuuuuuuuuuu",
    "twoooooo chainzzzzzzz",
    "givenchy, god bless you",
    "i wish you would, like a kitchen cabinet",
    "they ask me what i do and who i do it for and how i come up with this up in the studio",
    "i'm in the kitchen, yams everywhere"
    "if you know me, then you know i've been thinking Franklin"
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetTwoChainzLyricIntent');
    },
    'GetTwoChainzLyricIntent': function () {
        var lyricArr = lyrics;
        var lyricIndex = Math.floor(Math.random() * lyricArr.length);
        var randomLyric = lyricArr[lyricIndex];
        var speechOutput = GET_FACT_MESSAGE + randomLyric;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomLyric)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
