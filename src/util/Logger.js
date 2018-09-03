const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;
const fs = require('fs')
const config = require('config');

const loggerConfig = config.get('logConfig');
const logLocation = loggerConfig.env_log_location;
if (!fs.existsSync(logLocation)) {
	// Create the directory if it does not exist
	fs.mkdirSync(logLocation);
}
console.log(loggerConfig.env_log_location);
/**
 * @description :: module for creating the logger with "info" default log level.
 */

const logger = createLogger({
    level: loggerConfig.env_log_level,
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [
        /**
        * @description :: uncomment below 2 lines if you want to print the log's to the console/terminal.
        */
        new transports.Console({
            timestamp: true
        }),
        new transports.File({
            filename: `${logLocation}/application.log`,
            timestamp: true
        })
    ]
});

module.exports = logger;