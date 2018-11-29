import redis from 'redis';

const client = redis.createClient();

async function connectToRedis(){
    try {
        client.on('connect', () => {
            console.log("connected to Redis store");
        })
    }
    catch(e){
        console.log('Not connected to redis store', e)
    }
} 

async function storeRefreshToken(userId, refreshToken) {
    try {
    client.set(userId, refreshToken);
    }
    catch(e){
        console.log("Refresh token not stored to redis db");
    }
}

async function getRefreshToken(userId){
    try {
        const refreshToken = await client.get(userId);
        if(!!refreshToken)
         return refreshToken;
        else if(!refreshToken)
        return 'No refresh token found';
    }
    catch(e){
        return e;
    }
}

module.exports = {
    connectToRedis,
    storeRefreshToken,
    getRefreshToken
}