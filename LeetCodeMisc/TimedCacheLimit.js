class TimeLimitedCache {
    constructor() {
      this.cache = new Map();
    }
  
    set(key, value, duration) {
      const now = Date.now();
      const expirationTime = now + duration;
      const alreadyExists = this.cache.has(key) && this.cache.get(key).expirationTime > now;
      
      this.cache.set(key, { value, expirationTime });
      
      // Schedule removal of the key after the duration has elapsed
      setTimeout(() => {
        if (this.cache.get(key)?.expirationTime === expirationTime) {
          this.cache.delete(key);
        }
      }, duration);
      
      return alreadyExists;
    }
  
    get(key) {
      const now = Date.now();
      const item = this.cache.get(key);
      
      if (item && item.expirationTime > now) {
        return item.value;
      }
      
      return -1;
    }
  
    count() {
      const now = Date.now();
      let count = 0;
      
      for (const [key, item] of this.cache) {
        if (item.expirationTime > now) {
          count++;
        }
      }
      
      return count;
    }
  }
  
  // Example usage:
  const actions = ["TimeLimitedCache", "set", "get", "count", "get"];
  const values = [[], [1, 42, 100], [1], [], [1]];
  const timeDelays = [0, 0, 50, 50, 150];
  
  const executeActions = (actions, values, timeDelays) => {
    const cache = new TimeLimitedCache();
    const results = [];
    
    for (let i = 0; i < actions.length; i++) {
      setTimeout(() => {
        let result;
        if (actions[i] === "TimeLimitedCache") {
          result = null;
        } else if (actions[i] === "set") {
          result = cache.set(...values[i]);
        } else if (actions[i] === "get") {
          result = cache.get(...values[i]);
        } else if (actions[i] === "count") {
          result = cache.count();
        }
        results.push(result);
        if (i === actions.length - 1) {
          console.log(results);
        }
      }, timeDelays[i]);
    }
  };
  
  executeActions(actions, values, timeDelays);
  