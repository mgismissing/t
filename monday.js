function MondayGetItemCount(boardId) {
    // Define your API key and board ID
    const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM0NjYyNDg5MCwiYWFpIjoxMSwidWlkIjo1ODg4MTMwMiwiaWFkIjoiMjAyNC0wNC0xM1QyMjoxNDozNi4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjI2ODUzNTgsInJnbiI6ImV1YzEifQ.vVl92pM2Tf7-g4h2n9gSm4pXxbdUS-3r5lM_YOgNhz4';

    // Define the endpoint for getting the count of items in the board
    const endpoint = `https://api.monday.com/v2/boards/${boardId}/items/count`;

    // Define your request headers
    const headers = {
    'Content-Type': 'application/json',
    'Authorization': apiKey
    };

    // Define your Fetch options
    const options = {
    method: 'GET',
    headers: headers
    };

    // Make the API request
    fetch(endpoint, options)
    .then(response => {
        if (!response.ok) {
        throw new Error(response.json());
        }
    })
    .then(data => {
        // Handle the API response data
        return data.count;
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with your fetch operation:', error);
    });
}