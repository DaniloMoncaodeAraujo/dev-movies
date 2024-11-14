import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '88026eadd00e50654c3f06e44db9869e',
        language: 'pt-br',
        page: 1,
    }
})

export default api