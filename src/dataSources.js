function rejectOnErrorStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}


function getJson(response) {
  return response.json();
}


function fetchJson(url, callback) {
  return fetch(url)
    .then(rejectOnErrorStatus)
    .then(getJson)
    .then((data) => {
      console.log('Fetched JSON:', data);
      callback(data);
    })
    .catch(() => {
      console.error('Fetch failed.');
    });
}


export { fetchJson };
