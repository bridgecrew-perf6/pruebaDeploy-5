const { createAuthor, getAuthorById, getAuthors, editAuthorById, deleteAuthorById } = require('../controllers/author.controller');

module.exports = app => {
    app.post('/api/author/new', createAuthor);
    app.get('/api/authors', getAuthors);
    app.get('/api/author/:id', getAuthorById);
    app.put('/api/author/:id/edit', editAuthorById);
    app.delete('/api/author/:id/delete', deleteAuthorById);
}