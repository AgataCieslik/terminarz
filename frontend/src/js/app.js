// const express = require('express');
// const app = express();
// app.use(express.static(__dirname + '/public'));
// app.listen(3000);

// const indexRouter = require('./routes/index');
// const newRouter = require('./routes/new');
// const weekRouter = require('./routes/week');
// const allRouter = require('./routes/all');

// app.use('/', indexRouter);
// app.use('/new', newRouter);
// app.use('/week', weekRouter);
// app.use('/all', allRouter);

import '../public/stylesheets/style.css';
import './APICommunication.js';
import './functionalities.js';


import * as APICommunication from './APICommunication.js';
import * as functionalities from './functionalities';

console.log('jestem w panelu logowania');
