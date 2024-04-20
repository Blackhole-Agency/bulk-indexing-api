## Introduction

Developed by [Nicolas Brule](https://nicolas-brule.fr) from [Blackhole Agency](https://agence-seo-caen.fr), this enhanced script aims to simplify and automate the process of indexing web pages on Google. With this tool, users can bulk submit the URLs of their site without having to go through the manual interface of the Search Console. 🚀

## Prerequisites

Before you can use this script, make sure you have installed node.js on your machine. If not, you can download and install it from [this link](https://nodejs.org/en/download/). 📦

## Initial Setup

1. **Access to the Indexing API**: To start, you need to set up access to the Indexing API on Google Cloud Platform. Follow the detailed instructions provided [here](https://developers.google.com/search/apis/indexing-api/v3/prereqs). 🔑

2. **Downloading the keys**: Once you have access to the Indexing API, you will be able to download a JSON file containing a public/private key pair. This file, essential for authentication, must be saved under the name "service_account.json" in the main directory of the script. 📄

3. **Adding URLs**: List all the URLs you want to index in the `urls.txt` file. Each URL must be on a new line. 📝

## Verification of Site Ownership

Before you can submit URLs for indexing, Google requires that you verify the ownership of your site. Here’s how to proceed:

1. **Get the service account email address**: Open the `service_account.json` file and look for the `client_email` field. Note this email address, as it will be necessary for verification. 📧

2. **Verification on Google Webmaster Central**:
   - Go to [Google Webmaster Central](https://www.google.com/webmasters/verification/home).
   - Select your verified property (your website).
   - Scroll down the page and click on 'Add an owner'.
   - In the provided field, enter the email address of your service account and confirm. ✔️

## Usage Limits

- **Per batch**: You can submit up to 100 URLs in a single request. 📊
- **Daily**: The daily limit is set to 200 URLs. 📅

## Conclusion

This tool is designed to make the indexing process smoother and more efficient, eliminating the need for repeated manual submissions. Thanks to automation, you can ensure that your content is quickly visible on Google. ✨
