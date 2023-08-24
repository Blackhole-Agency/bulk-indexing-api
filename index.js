const fs = require('fs');
const axios = require('axios');
const { google } = require('googleapis');
const key = require('./service_account.json');

const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/indexing'],
  null
);

async function sendNotifications() {
  try {
    const tokens = await jwtClient.authorize();

    const batch = fs
      .readFileSync('urls.txt')
      .toString()
      .split('\n');

    const items = batch.map(line => {
      return {
        'Content-Type': 'application/http',
        'Content-ID': '',
        body:
          'POST /v3/urlNotifications:publish HTTP/1.1\n' +
          'Content-Type: application/json\n\n' +
          JSON.stringify({
            url: line,
            type: 'URL_UPDATED'
          })
      };
    });

    const response = await axios.post('https://indexing.googleapis.com/batch', items, {
      headers: {
        'Content-Type': 'multipart/mixed',
        Authorization: `Bearer ${tokens.access_token}`
      }
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error sending notifications:', error);
  }
}

sendNotifications();
