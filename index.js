// Require necessary Node.js modules
const fs = require('fs'); // File system module for reading files
const axios = require('axios'); // Axios for making HTTP requests
const { google } = require('googleapis'); // Google APIs Node.js client library
const key = require('./service_account.json'); // Load the Google service account credentials

// Configure Google JWT (JSON Web Token) client for authentication
const jwtClient = new google.auth.JWT(
  key.client_email, // Service account email
  null, // No file path needed, credentials loaded directly from JSON object
  key.private_key, // Service account private key
  ['https://www.googleapis.com/auth/indexing'], // Scope for Google Indexing API
  null // No subject necessary
);

// Asynchronously send notifications to Google Indexing API
async function sendNotifications() {
  try {
    // Authorize the JWT client and get tokens
    const tokens = await jwtClient.authorize();

    // Read URLs from a text file, each URL on a new line
    const batch = fs
      .readFileSync('urls.txt') // Read file synchronously
      .toString() // Convert buffer to string
      .split('\n'); // Split string into an array by new line

    // Prepare the payload for batch HTTP request
    const items = batch.map(line => {
      return {
        'Content-Type': 'application/http', // Set Content-Type for each batch item
        'Content-ID': '', // Content-ID can be left empty or set if needed
        body:
          'POST /v3/urlNotifications:publish HTTP/1.1\n' + // Define the POST request for Indexing API
          'Content-Type: application/json\n\n' + // JSON content type for the body
          JSON.stringify({ // Convert URL notification to JSON string
            url: line, // The URL to be indexed
            type: 'URL_UPDATED' // Notification type
          })
      };
    });

    // Send a POST request with the batch items to the Google Indexing API
    const response = await axios.post('https://indexing.googleapis.com/batch', items, {
      headers: {
        'Content-Type': 'multipart/mixed', // Content type for batch request
        Authorization: `Bearer ${tokens.access_token}` // Bearer token for authorization
      }
    });

    // Log the response from the API
    console.log(response.data);
  } catch (error) {
    // Log any errors that occur during the operation
    console.error('Error sending notifications:', error);
  }
}

// Call the function to send notifications
sendNotifications();
