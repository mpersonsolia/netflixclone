import React, { useEffect, useState } from 'react'; //useEffect: executa o código adicionado.
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow/movieRow';
import FeaturedMovie from './components/FeaturedMovie/featuredMovie';
import Header from './components/Header/header';

export default () => {
  
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);


  useEffect(() => {
    const loadAll = async () => { 
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // pegando o filme em destaque (featured) de forma aleatória
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1)) // como o array começa no zero, é preciso colocar o -1 da lista de items
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  // monitoramento da página em relação à cor do header (preto ou transparente)
  useEffect(() => {
    const scrollListener = () => {

    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, []);

  // página inicial (page): header, destaque (featured movie), listas (lists) e rodapé
  return (
    <div className = "page">

      <Header black = {blackHeader}/>

      {featuredData && 
        <FeaturedMovie item = {featuredData} /> 
      }
      
      <section className = "lists"> 
        {movieList.map((item, key) => (
          <MovieRow key = {key} title = {item.title} items = {item.items}/> // props
        ))}
      </section>      
    </div>
  );
}