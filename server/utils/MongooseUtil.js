//CLI: npm install mongoose--save
 const mongoose = require('mongoose');
 const MyConstants = require('./MyConstants');
 const uri = 'mongodb+srv://Swam-PI:14m7h30wn3r@cluster0.wme8132.mongodb.net/?appName=Cluster0';
//  mongoose.connect(uri, { useNewUrlParser: true })
 mongoose.connect(uri)
.then(() => { console.log('Connected to ' + MyConstants.DB_SERVER + '/' + MyConstants.
DB_DATABASE); })
.catch((err) => { console.error(err); });