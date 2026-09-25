// CLI : npm install mongoose -- save
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first'); // Optional performance tweak
dns.setServers(['8.8.8.8', '8.8.4.4']);
const mongoose = require('mongoose');
const MyConstants = require('./MyConstants');

const uri = 'mongodb+srv://' + MyConstants.DB_USER + ':' + MyConstants.DB_PASS + '@' + MyConstants.DB_SERVER + '/' + MyConstants.DB_DATABASE;

mongoose.connect(uri)
  .then(() => { console.log('Connected to ' + MyConstants.DB_SERVER + '/' + MyConstants.DB_DATABASE); })
  .catch((err) => { console.error(err); });