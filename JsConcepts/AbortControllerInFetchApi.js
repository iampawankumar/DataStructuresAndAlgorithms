const controller = new AbortController();
const signal = controller.signal;

const fetchWithTimeout = (url, options, timeout = 5000) => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      controller.abort();
      reject(new Error('Request timed out'));
    }, timeout);

    fetch(url, { ...options, signal })
      .then(response => {
        clearTimeout(timeoutId);
        resolve(response);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          reject(new Error('Request was aborted'));
        } else {
          reject(err);
        }
      });
  });
};

fetchWithTimeout('https://example.com/api/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

