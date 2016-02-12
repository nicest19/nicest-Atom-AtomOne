# nicest

[![npm version](https://img.shields.io/npm/v/nicest.svg)](https://www.npmjs.com/package/nicest)
[![Build Status](https://travis-ci.org/ChristianMurphy/nicest.svg?branch=master)](https://travis-ci.org/ChristianMurphy/nicest)
[![Dependency Status](https://david-dm.org/ChristianMurphy/nicest.svg)](https://david-dm.org/ChristianMurphy/nicest)
[![devDependency Status](https://david-dm.org/ChristianMurphy/nicest/dev-status.svg)](https://david-dm.org/ChristianMurphy/nicest#info=devDependencies)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/ChristianMurphy/nicest/master/LICENSE)

nicely integrating complex education software together

## About

Nicest is a setup tool for software educators.
For the alpha version the project the focus is on agile [software development tools](https://en.wikipedia.org/wiki/Agile_software_development),
with the system currently being able to setup [Github](https://github.com/) source control, [Taiga](https://taiga.io/)
taskboard, and [CIAssess](https://github.com/kgary/CIAssess) continuous project assessment.
In the future Nicest will add support for more tools, and integrations between tools.

## Installation

1. Install [Node JS](https://nodejs.org/)
2. Install [Mongo Db](https://www.mongodb.org/)
3. Install [Node Gyp](https://github.com/nodejs/node-gyp#installation) dependencies
4. Run `npm install -g nicest`

## Setup

1. Create a [Github account](https://github.com/) (an existing account can also be used)

2. [Register nicest](https://github.com/settings/applications/new) as an application

   * 'Application Name', 'Homepage URL', and 'Application Description' can be anything
   * 'Authorization callback URL' must be the Host name or IP address of your computer/server
   * E.G. 'Authorization callback URL' could be 'example.com/login', 'localhost:3000/login' or '11.11.11.11/login'
   * After creating the application be sure to copy down the client id and secret token

3. Run `nicest init` to configure nicest

4. Run `nicest user` to create an admin

## Start

1. Run `nicest start`

### Stop

1. Run `nicest stop`

### Debug Start

1. Run `nicest dev`
