const Author = require('../models/author.model');

module.exports.createAuthor = (req, res) => {
    console.log(req.body);
    Author.create(req.body.author)
    .then(newAuthor => res.json(newAuthor))
    .catch(err => res.status(400).json(err));
}
module.exports.getAuthorById = (req, res) => {
    Author.findById(req.params.id)
    .then(author => res.status(200).json(author))
    .catch(err => res.status(400).json(err));
}
module.exports.getAuthors = (req, res) => {
    Author.find().sort({name:'asc'})
    .then(authors => res.status(200).json(authors))
    .catch(err => res.status(400).json(err));
}
module.exports.editAuthorById = (req, res) => {
    Author.findOneAndUpdate({_id:req.params.id}, req.body.author, {new: true})
    .then(result => res.json({result}))
    .catch(err => res.status(500).json({err}));
}
module.exports.deleteAuthorById = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then(result => res.json({result}))
    .catch(err => res.status(500).json({err}));
}