const fs = require('fs');
const webpack = require('webpack');
const dotenv = require('dotenv');

const fileName = 'src/configurations/environment.ts';

const variables = [
    'REACT_APP_ENVIRONMENT',
    'REACT_APP_API_URL',
    'REACT_APP_CLIENT_ID',
    'REACT_APP_CLIENT_API_KEY',
    'REACT_APP_DEVELOPMENT_STAGE',
    'REACT_APP_WEB_URL',
    'REACT_APP_LD_MOBILE_KEY',
    'REACT_APP_LD_CLIENT_SIDE_ID',
    'REACT_APP_CLOUDINARY_CLOUD_NAME',
    'REACT_APP_CLOUDINARY_SWANLINGS_PRESET',
    'REACT_APP_CLOUDINARY_BOUNTY_PRESET',
    'REACT_APP_CLOUDINARY_VERIFIED_BADGE_PRESET',
    'REACT_APP_FACEBOOK_APP_ID',
    'REACT_APP_FIREBASE_APP_ID',
    'REACT_APP_FIREBASE_API_KEY',
    'REACT_APP_FIREBASE_AUTH_DOMAIN',
    'REACT_APP_FIREBASE_PROJECT_ID',
    'REACT_APP_FIREBASE_MESSAGING_SENDER_ID',
    'REACT_APP_FIREBASE_MEASUREMENT_ID',
    'REACT_APP_MARKETING_WEBSITE_URL',
    'REACT_APP_SENTRY_DSN',
    'REACT_APP_WEB3_HTTP_PROVIDER',
];

const envCallBack = (err) => {
    if (err) throw err;
    console.log('App config file is created successfully.');
}

// const envVars = fs.readFile('.env', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//         //console.log(Object.keys(data).toString());
//         console.log(process.env.REACT_APP_URL);
//     });

// const testEnv = () => {
//     // call dotenv and it will return an Object with a parsed key 
//     const env = dotenv.config().parsed;

//     // reduce it to a nice object, the same as before
//     const envKeys = Object.keys(env).reduce((prev, next) => {
//         prev[`process.env.${next}`] = JSON.stringify(env[next]);
//         return prev;
//     }, {});

//     return {
//         plugins: [
//         new webpack.DefinePlugin(envKeys)
//     ]
// };

const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

console.log(envKeys);   

//fs.writeFile(fileName, appConfig, envCallBack);