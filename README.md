# Redis Cache Manager : 
    ## To include the Redis cache manager in your project. 
    Step 1.  Make sure you have Redis and config module's  installed in your project 
        if : you have it continue to Step 2, 
        else : install them with below commands
            >  npm install redis, config --save
    Step 2. Copy the RedisCacheManager.js file into your project  (ex :: i.e. path util/ )
    
    Step 3. Config the your Redis cache host, port, expire(time in sec) in the config - default.json
        Note :: If you don't have the config/default.json file create one. then include the configurations
            ex.: default.json > 
                    {
                        "redisConfig":{
                            "host":"localhost",
                            "port":6379,
                            "expire": 10
                        }
                    }
    
    Step 4: Then Import the Redis Cache Manger into your project and load the cache config. 
        
        const RedisClient = require('./util/RedisCacheManager.js')
        const config = require('config');
        RedisClient.loadRedisCacheManager(config.get('redisConfig'));
        RedisClient.setCache("Sample_Key", "Sample_value")
        RedisClient.getCache("Ravi", (err, result)=>{
            console.log(err, result);
        })

