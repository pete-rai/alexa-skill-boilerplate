# alexa-skill-boilerplate

> Visit my [GitHub Pages site](https://pete-rai.github.io/) to get in touch or to
see demos and this and much more.

## Overview

A simple to use, boilerplate template for a new Alexa skill for the [Amazon Echo](https://en.wikipedia.org/wiki/Amazon_Echo). It's
not really useful in its literal form, as it's real purpose is to show people how easy
creating a custom skill can be. It basically allows your Echo to respond to utterances
like "How does a duck go?" and Echo responds "Quack, Quack". It does this for a
range of animals. It also responds to "Roll a Dice".

### License

This plugin is available under [the MIT license](https://github.com/pete-rai/jquery-slidein/blob/master/LICENSE). _Please respect the terms of the license._

### Karmaware

This software is released with the [karmaware](https://pete-rai.github.io/karmaware) tag

### Disclaimer

I've done best efforts testing on my personal Amazon Echo. If you find any problems,
do let me know by raising an issue [here](https://github.com/pete-rai/alexa-skill-boilerplate/issues). Better still, create a fix for the problem too and drop
in the changes; that way everyone can benefit from it.

## Example Usage

To use this boiler plate code to create your own skills, you will need an Amazon account.
Your normal Amazon retail account will work for this. You will need to log in to both
the [Amazon Developer Site](https://developer.amazon.com/) and the [Amazon AWS Site](https://aws.amazon.com/).

On the Developer Site, you should go though _Create A New Skill_ wizard and use the files
here to fill out the fields. On the AWS Site, you will need to create a new _Lambda function_
and paste in the code here to the body of that. Then you join the two together by connecting
the lambda function ID to your new skill.

| File | How to Use It |
| --- | --- |
| intents.json | Paste this into the intents edit box during the _Create A New Skill_ wizard  |
| utterances.txt | Paste this into the sample utterances edit box during the _Create A New Skill_ wizard |
| animals.lst | Paste this into the custom enumeration edit box during the _Create A New Skill_ wizard |
| lambda.js | Paste this as the body of your Lambda function in AWS |

If you get stuck, drop me a mail.

_– [Pete Rai](https://pete-rai.github.io/)_
