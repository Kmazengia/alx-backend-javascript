function getResponseFromAPI() {
  return fetch('https://example.com/api')
    .then(response => {
      if (!response.ok) {
        throw new Error('Response not OK');
      }
      return response.json();
    });
}
