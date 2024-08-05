
const pubSub = {

    //events
    events: {},

    //subscribe
    subscribe: function(event, callback){
        if(!this.events[event]) this.events[event] = []

        this.events[event].push(callback)

        return `${event} with the callback is registered`
    },

    //publish
    publish: function(event, data){
        if(this.events[event]){
            this.events[event].forEach((cb) => cb(data))
        }
    }
}


function eventEmitterCallback(data){
    console.log('data', data)
}

const newEvtSubscription = pubSub.subscribe('Hello', eventEmitterCallback)

const newEvtPublish = pubSub.publish('hello', 'event is called!')


