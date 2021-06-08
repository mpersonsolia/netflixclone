const API_KEY = '18db9734571bc5dd208d012d5407608b';
const API_BASE = 'https://api.themoviedb.org/3';

//a função realiza a requisição externa e retorna o json, como resposta.
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

//lista dos filmes
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&languange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados pra Você',
                items: await basicFetch(`/trending/all/week?languange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_reated?languange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch (`/discover/movie?with_genres=28&languange=pt-BR&api_key=${API_KEY}`)
            },            
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch (`/discover/movie?with_genres=35&languange=pt-BR&api_key=${API_KEY}`)
            },            
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch (`/discover/movie?with_genres=27&languange=pt-BR&api_key=${API_KEY}`)
            },            
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch (`/discover/movie?with_genres=10749&languange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'tdocumentary',
                title: 'Documentário',
                items: await basicFetch (`/discover/movie?with_genres=99&languange=pt-BR&api_key=${API_KEY}`)
            },
        ]
    }
}