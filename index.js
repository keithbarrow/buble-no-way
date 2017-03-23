'use strict';
const SonosDiscovery = require('sonos-discovery');
const logger = require('sonos-discovery/lib/helpers/logger');
const settings = require('./settings');
console.log(new SonosDiscovery(settings).zones);
