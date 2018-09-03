const Logger = require('./util/Logger');
const RedisCacheManager = require('./util/RedisCacheManager')

RedisCacheManager.loadRedisCacheManager();
RedisCacheManager.setCache('Test1', "asdfdasf");
Logger.info("asdfads")
RedisCacheManager.getCache('Test1', (err, result) => {
    console.log(err, result);
});
