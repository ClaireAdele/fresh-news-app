import axios from "axios";

export const getArticle = (article_id) => { 
    return axios.get(`https://claire-castanet-nc-news.herokuapp.com/api/articles/${article_id}`).then((response) => {
    const article = response.data.article;
    return article;
    })
}

export const getAllArticles = (sort, topic, votes) => {
    if(!sort && !topic && !votes) {
        return axios.get("https://claire-castanet-nc-news.herokuapp.com/api/articles").then((response) => {
            const articles = response.data.articles;
            return articles;
        })
    } else if(sort) {
        return axios.get(`https://claire-castanet-nc-news.herokuapp.com/api/articles${sort}`).then((response) => {
            const articles = response.data.articles;
            return articles;
            })
    } else if(topic) {
        return axios.get(`https://claire-castanet-nc-news.herokuapp.com/api/articles?topic=${topic}`).then((response) => {
            const articles = response.data.articles;
            return articles;
        })
    }
}

export const deleteCommentAPI = (comment) => {
    return axios.delete(`https://claire-castanet-nc-news.herokuapp.com/api/comments/${comment}`)
}

export const postNewComment = (article_id, comment) => {
    return axios.post(`https://claire-castanet-nc-news.herokuapp.com/api/articles/${article_id}/comments`, comment).then((res) => {
            return res;
    })
}

export const patchVotes = (article_id, comment_id, number)  => {
    comment_id ?
        axios.patch(`https://claire-castanet-nc-news.herokuapp.com/api/articles/${article_id}/comments/${comment_id}`, {inc_votes : number})
        : 
        axios.patch(`https://claire-castanet-nc-news.herokuapp.com/api/articles/${article_id}`, {inc_votes : number})
}
