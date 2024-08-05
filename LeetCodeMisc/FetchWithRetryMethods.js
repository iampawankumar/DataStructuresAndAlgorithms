class BetterFetch {

    constructor(globalConfig, maxRetries, apiTimeout) {
        this.globalConfig = globalConfig;
        this.maxRetries = maxRetries;
        this.apiTimeout = apiTimeout;
    };

    async wait(waitDuration){
      new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, waitDuration);
      })
    }

    async get(url, config = {}) {
        return fetch(url, { ...this.globalConfig, ...config });
    }

    async wait(timeDuration){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('time reached')
            }, timeDuration);
        })
    }

    async setAbortHandler(abortController){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('APi timeout!')
                abortController.abort()
            }, 500);
        })
    }

    // write your code here
    async getWithRetry(url, config = {}, retries = this.maxRetries) {
        const abortController = new AbortController()

        return await Promise.race([
            this.setAbortHandler(abortController),
            this.hitWithRetries(url, {...this.globalConfig, ...config, signal: abortController.signal}, this.maxRetries)
        ])
    }

    async hitWithRetries(url, config, maxRetryLeft = 0){
        try{
            let result = await fetch(url, config)
            console.log('result', result)

            if(!result.ok){
                throw 'Api Call Failed!'
            }
            return result


        }catch(e){
            console.log('e', e)
            if(maxRetryLeft > 1){
                await this.wait(3000)
                await this.hitWithRetries(url, config, maxRetryLeft - 1)
            }else{
                throw 'Max retry limit Reached!'
            }
        }

    }
}

const betterFetch = new BetterFetch({}, 2, 2000);
const apiurl = 'https://get.geojs.io/v2/ip/country.json?ip=8.8.8.8';

// write api call here

betterFetch.getWithRetry(apiurl).then((res) =>res.json())
.then((response) => {
    console.log('response', response)
})
.catch((err) => console.log('err', err))