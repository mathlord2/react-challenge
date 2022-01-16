import React, { useState, useEffect } from "react";

import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Searcharea from "./components/Searcharea/Searcharea";
import Filter from "./components/Filter/Filter";
import Results from "./components/Results/Results";

function App() {
  const [value, setValue] = useState(""); //Search query of user
  const [animeList, setAnimeList] = useState([]); //List of animes
  const [searched, setSearched] = useState(false); //Whether results have returned or not
  const [searching, setSearching] = useState(false); //Whether the user has done a search or not
  const [error, setError] = useState(null); //If an error occured with fetching API or not

  //Filters
  const [genre, setGenre] = useState({});
  const [status, setStatus] = useState({});
  const [rated, setRated] = useState({});
  const [sortRating, setSortRating] = useState(false);

  useEffect(() => {
    if (value !== "" && searched) {
      fetchAnime(value);
    }
  }, [genre, status, rated, sortRating]);

  const onChange = e => {
    setValue(e.target.value);
  }

  const searchAnime = e => {
    e.preventDefault();
    
    fetchAnime(value);
  }

  const changeGenre = val => {
    setGenre(val);
  }

  const changeStatus = val => {
    setStatus(val);
  }

  const changeRated = val => {
    setRated(val);
  }

  const changeRating = () => {
    setSortRating(!sortRating);
  }

  const clearAll = () => {
    setValue("");
    setAnimeList([]);
    setSearched(false);
    setError(null);
    setGenre({});
    setStatus({});
    setRated({});
    setSortRating(false);
  }

  const fetchAnime = async (query) => {
    setError(null);
    setSearched(true);
    setSearching(true);

    const results = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}
    &genre=${genre.value}&status=${status.value}&rated=${rated.value}`)
      .then(res => res.json())
      .catch(e => setError(e));
    
    if (results) {
      if (sortRating) {
        results.results.sort((a, b) => {
          return b.score - a.score;
        });
      }

      setAnimeList(results.results);
    } else {
      setError(true);
    }
    
    setSearching(false);
  }

  return (
    <div class="App">
      <h1>AnimeSearch</h1>
      <Searcharea placeholder="Search" value={value} onChange={onChange}
        onClick={searchAnime}/>
      <Filter genre={genre} status={status} rated={rated} sortRating={sortRating}
        changeGenre={changeGenre} changeStatus={changeStatus} changeRated={changeRated} changeRating={changeRating}/>
      <a onClick={clearAll}><p>Clear All</p></a>
      <Results results={animeList} searching={searching} searched={searched} error={error}/>
    </div>
  );
}

export default App;
