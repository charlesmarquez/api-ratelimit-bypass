/**
 * Summary.
 * Bypass API Rate limit using multiple API keys
 * 
 * Description.
 * Originally based around Halo Wars 2 API Rate limit 10request/10seconds. 
 */

function initKeys(keys) {
    apikeys = keys
    keydict = []

    apikeys.forEach(key => {
        x = {
            key: key,
            called: 0,
            status: true
        }
        keydict.push(x)
    });
    return keydict
}

function getKey(keydict) {

    for (const key of keydict) {
        if (key.status) {
            if (key.called < 10) {
                key.called++
                result = key.key
                // console.log(`key: ${key.key} | called: ${key.called}`);
                break
            } else {
                key.status = false
                console.log(`${key.key} switched to ${key.status}`);
            }
        }
    }
    return result
}

function resetKeys(keydict) {
    for (const key of keydict) {
        key.called = 0
        key.status = true
    }

    console.log(`Rate Reset`);
    return keydict
}

function keySelect(apikeys) {
    keydict = initKeys(apikeys)

    for (let i = 0; i < 50; i++) {
        apikey = getKey(keydict)
        console.log(`using: ${apikey}`);

        if (i == 31) {
            keydict = resetKeys(keydict)
        }
    }

    // setInterval(() => {
    //     console.log('hi');
    // }, 1000)

}

class bypasser{
    constructor(options){
        this.options = {
        }

        this.keys = this.options.keys
        this.rate = this.options.rate
    }

    assignOptions(options = {}){

        let defaults = {
            keys: [],
            rate: {
                requests: 1,
                time: 1, // Define Rate Limit
            }
        };

        let actual = Object.assign({}, defaults, options);
        console.info( actual.keys );
    }

}

apikeys = ['key1', 'key2', 'key3']