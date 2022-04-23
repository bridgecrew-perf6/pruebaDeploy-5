const axios = require('axios');

export const getAuthors = async () =>{
    try {
        const res = await axios.get('/api/authors');
        return res.data;
    } catch (err) {
        return err.response.data.errors;
    }
}

export const createAuthor = async (author) => {
    try {
        const res = await axios.post('/api/author/new', {author});
        return res;
    } catch (err) {
        
        return err.response.data.errors;
    }
}
export const getAuthorById = async (id) => {
    try {
        const res = await axios.get(`/api/author/${id}`);
        return res;
    } catch (err) {
        return err.response.data.errors;
    }
}
export const editAuthorById = async (id,author) => {
    
    try {
        const res = await axios.put(`/api/author/${id}/edit`, {author});
        return res;
    }catch(err){
        return err.response.data.errors;
    }
}
export const deleteAuthorById = async (id) => {
    try {
        const res = await axios.delete(`/api/author/${id}/delete`);
        return res;
    } catch (err) {
        return err.response.data.errors;
    }
}
/* module.exports = {
    getAuthors,
    createAuthor,
    getAuthorById,
    editAuthorById,
} */