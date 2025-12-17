const express = require('express');
const app = express();
const articlesRoutes = require('./routes/articles');
app.use(express.json());
app.use('/api/articles', articlesRoutes);
app.listen(8080);