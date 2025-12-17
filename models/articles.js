let idCounter =0
const articles = []
const getAllArticles = () => articles

const getArticle = (id) => articles.find(article => article.id === id)

const createArticle = (title, content) => {
    const newArticle = {id: ++idCounter, title, content}
    articles.push(newArticle)
    return newArticle
}
const deleteArticle = (id) => {
    const index = articles.findIndex(article => article.id === id)
    if (index !== -1) {
        articles.splice(index, 1)
        return true
    }
    return false
}
const updateArticle = (id, title, content) => {
    const article = getArticle(id)
    if (article) {
        if (title !== undefined) article.title = title
        if (content !== undefined) article.content = content
        return article
    }
    return null
}

module.exports = {
    getAllArticles,
    getArticle,
    createArticle, 
    deleteArticle,
    updateArticle
}