import axios from "axios";

// const request = axios.create({
//     baseURL: "https://claire-castanet-nc-news.herokuapp.com/api/",
//   });

export const getArticle = (article_id) => { 
    return axios.get(`https://claire-castanet-nc-news.herokuapp.com/api/articles/${article_id}`).then((response) => {
    const article = response.data.article;
    return article;
    })
}

export const getAllArticles = (sort) => {
    if(!sort) {
        return axios.get("https://claire-castanet-nc-news.herokuapp.com/api/articles").then((response) => {
            const articles = response.data.articles;
            return articles;
        })
    } else {
        return axios.get(`https://claire-castanet-nc-news.herokuapp.com/api/articles${sort}`).then((response) => {
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
