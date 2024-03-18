// Create web server
// Create a route for comments
// Use a middleware to parse the body of the request
// Create a POST route for comments
// Create a GET route for comments
// Create a DELETE route for comments
// Create a PUT route for comments
// Create a PATCH route for comments

// Express.js
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Comments
const comments = [
  {
    id: 1,
    user: 'John',
    comment: 'Hello World'
  },
  {
    id: 2,
    user: 'Mary',
    comment: 'Hello Node'
  }
];

// Routes
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,
    user: req.body.user,
    comment: req.body.comment
  };
  comments.push(comment);
  res.send(comment);
});

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.delete('/comments/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) return res.status(404).send('The comment with the given ID was not found');
  const index = comments.indexOf(comment);
  comments.splice(index, 1);
  res.send(comment);
});

app.put('/comments/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) return res.status(404).send('The comment with the given ID was not found');
  comment.user = req.body.user;
  comment.comment = req.body.comment;
  res.send(comment);
});

app.patch('/comments/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) return res.status(404).send('The comment with the given ID was not found');
  comment.user = req.body.user || comment.user;
  comment.comment = req.body.comment || comment.comment;
  res.send(comment);
});

// Listen
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// HTTP requests
// POST /comments
// GET /comments
// DELETE /comments/1
// PUT /comments/1
// PATCH