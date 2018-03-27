const express = require('express');
const morgan = require('morgan');

const blogPostsRouter = require('./blogPostsRouter');
const app = express();


app.use(morgan('common'));

app.use('/blog-posts', blogPostsRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});