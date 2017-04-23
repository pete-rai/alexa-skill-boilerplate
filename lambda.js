/*
 * alexa-skill-boilerplate
 * https://github.com/pete-rai/alexa-skill-boilerplate
 *
 * Copyright 2017 Pete Rai
 * Released under the MIT license
 * https://github.com/pete-rai/alexa-skill-boilerplate/blob/master/LICENSE
 *
 * Released with the karmaware tag
 * https://pete-rai.github.io/karmaware
 *
 * Website  : http://www.rai.org.uk
 * GitHub   : https://github.com/pete-rai
 * LinkedIn : https://uk.linkedin.com/in/raipete
 *
 */

 'use strict';

// --- Static data

const DAYS_OF_MONTH =
[
    '1st',   '2nd',  '3rd',  '4th',  '5th',  '6th',  '7th',  '8th',  '9th',
    '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th',
    '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th',
    '28th', '29th', '30th', '31st'
];

const DAYS_OF_WEEK =
[
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const MONTHS =
[
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
 ];

// --- General Helpers ---

function spokenDay (day, month, date)
{
    return DAYS_OF_WEEK [day] + ' ' + MONTHS [month] + ' ' + DAYS_OF_MONTH [date - 1];
}

function howDoesItGo (name, animal, callback)
{
    const noises =
    {
        'bee'     : 'buzz',
        'bird'    : 'chirp',
        'cat'     : 'meow',
        'chicken' : 'cluck',
        'cow'     : 'moo',
        'dog'     : 'woof',
        'donkey'  : 'hee haw',
        'duck'    : 'crap',
        'frog'    : 'ribbit',
        'horse'   : 'neigh',
        'lion'    : 'roar',
        'mouse'   : 'squeak',
        'owl'     : 'woo hoo',
        'pig'     : 'oink',
        'sheep'   : 'baa',
        'tiger'   : 'roar',
        'turkey'  : 'gobble'
    }

    var key      = animal.toLowerCase();
    var response = 'Sorry, I don\'t know how a ' + animal + ' goes';

    if (key in noises)
    {
        response = noises[key] + ', ' + noises[key];
    }

    callback ({}, buildresponse (name, response, null, true));
}

function rollADice (name, callback)
{
    var dice     = Math.round (Math.random () * 6);
    var response = 'It\s a ' + dice;

    callback ({}, buildresponse (name, response, null, true));
}

// --- Response Helpers ---

function buildresponse (title, output, reprompt, shouldend)
{
    return {
        outputSpeech: {
            type: 'PlainText',
            text: output,
        },
        card: {
            type: 'Simple',
            title: title,
            content: output,
        },
        reprompt: {
            outputSpeech: {
                type: 'PlainText',
                text: reprompt,
            },
        },
        shouldend,
    };
}

function buildResponse (attributes, response)
{
    return {
        version: '1.0',
        attributes,
        response: response,
    };
}

// --- Event Handlers ---

function onSessionStarted (request, session)
{
    console.log ('START - request: ' + request.requestId + ', session: ' + session.sessionId);
}

function onLaunch (request, session)
{
    console.log ('LAUNCH - request: ' + request.requestId + ', session: ' + session.sessionId);
}

function onSessionEnded (request, session)
{
    console.log ('END - request: ' + request.requestId + ', session: ' + session.sessionId);
}

function onIntent (request, session, callback)
{
    console.log ('INTENT - request: ' + request.requestId + ', session: ' + session.sessionId);

    switch (request.intent.name)
    {
        case 'RollADice':
        {
            rollADice (request.intent.name, callback);
        }
        break;

        case 'HowDoesItGo':
        {
            howDoesItGo (request.intent.name, request.intent.slots.Animal.value, callback);
        }
        break;

        default:
        {
            throw new Error ('Invalid intent');
        }
    }
}

// --- Main Handler ---

exports.handler = (event, context, callback) =>
{
    try
    {
        console.log ('HANDLER - app: ' + event.session.application.applicationId);

    /*  if (event.session.application.applicationId !== 'amzn1.echo-sdk-ams.app.[unique-value-here]')
        {
             callback ('Invalid Application ID');
        }  */

        if (event.session.new)
        {
            onSessionStarted (event.request, event.session);
        }

        if (event.request.type === 'LaunchRequest')
        {
            onLaunch (event.request, event.session);
        }
        else if (event.request.type === 'IntentRequest')
        {
            onIntent (event.request, event.session, (attributes, response) => { callback (null, buildResponse (attributes, response)); });
        }
        else if (event.request.type === 'SessionEndedRequest')
        {
            onSessionEnded (event.request, event.session);
            callback ();
        }
    }
    catch (err)
    {
        callback (err);
    }
};
