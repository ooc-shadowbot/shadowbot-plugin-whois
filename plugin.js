"use strict";

const Shadow     = require('shadowbot-core').Interface;
const Drawing    = require('shadowbot-core').Drawing;
const PluginBase = require('shadowbot-plugin-base');

const whois = require('node-whois');

class WhoIs extends PluginBase {

	constructor() {
		super();

		this.command("whois", [
			"This tool is used to check whois data on remote hosts.",
			[
				['<host>', 'check whois data']
			]
		], this._cmdWhois.bind(this));
	}

	_cmdWhois(message, reply) {
		var host = message.getCommandArgument(0, "");

		whois.lookup(host, function(err, data) {
			if(err) return reply("Couldn't get whois details: " + err.toString());
			reply(data);
		});
	}

}

module.exports = WhoIs;
