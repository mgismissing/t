// Define the URL of the readme.txt file
const readmeURL = 'https://t.empties.it/qinfo.txt';
var queueinfo = '';

// Fetch the contents of the readme.txt file
fetch(readmeURL)
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Failed to fetch qinfo');
    }
    // Return the response text
    return response.text();
  })
  .then(text => {
    // Split the text into lines
    const lines = text.split('\n');
    queueinfo = 'Coda: ' + lines[5].slice(0,-1) + '/' + lines[9].slice(0,-1) + ' [ ' + lines[7].slice(0,-1) + '/' + lines[9].slice(0,-1) + ' con <a href="/priority">priorità</a> ]';

    document.getElementById('queueinfo').innerHTML = queueinfo;
    document.getElementById('queuestate-'+lines[11].slice(0,-1)).removeAttribute('hidden');
  })
  .catch(error => {
    // Log any errors that occurred during the fetch
    console.error('Error fetching qinfo:', error);
  });
