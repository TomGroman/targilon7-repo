const articles = require('../models/articles');

exports.getAllArticles = (req, res) => {
    res.json(articles.getAllArticles());
}

exports.getArticleById = (req, res) => {
    const id = parseInt(req.params.id);
    const article = articles.getArticle(id);
    if (!article) {
        return res.status(404).json({error: "Article not found"});
    }
    res.json(article);
}

exports.createArticle = (req, res) => {
    const {title, content} = req.body;
    if (!title || !content) {
        return res.status(400).json({error: "Title and content are required"});
    }
    const newArticle = articles.createArticle(title, content);
    res.status(201).location(`/api/articles/${newArticle.id}`).end();
}
exports.deleteArticle = (req, res) => {
    const id = parseInt(req.params.id);
    const success = articles.deleteArticle(id);
    if (!success) {
        return res.status(404).json({error: "Article not found"});
    }
    res.status(204).end();
}

exports.updateArticle = (req, res) => {
    const id = parseInt(req.params.id);
    const {title, content} = req.body;
    const article = articles.getArticle(id);
    if (!article) {
        return res.status(404).json({error: "Article not found"});
    }
    const updatedArticle = articles.updateArticle(id, title, content);
    res.json(updatedArticle);
    res.status(200).end();
}