import React, { useEffect, useState } from 'react'; //useEffect: executa o código adicionado.
import './App.css'
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';

export default () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => { // pega a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  // página inicial: header, destaque, listas (lists) e rodapé
  return (
    <div className = "page">
      <section className = "lists">
        {movieList.map((item, key) => (
          <MovieRow key = {key} title = {item.title} items = {item.items}/> // props
        ))}
      </section>      
    </div>
  );
}