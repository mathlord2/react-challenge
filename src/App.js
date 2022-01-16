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

  useEffect(() => {
    if (value !== "" && searched) {
      fetchAnime(value);
    }
  }, [genre, status, rated]);

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

  const clearAll = () => {
    setValue("");
    setAnimeList([]);
    setSearched(false);
    setError(null);
    setGenre({});
    setStatus({});
    setRated({});
  }

  const fetchAnime = async (query) => {
    setError(null);
    setSearched(true);
    setSearching(true);

    const results = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}
    &genre=${genre.value}&status=${status.value}&rated=${rated.value}`)
      .then(res => res.json())
      .catch(e => setError(e));
    
    try {
      setAnimeList(results.results);
    } catch (e) {
      setError(e);
    }
    
    setSearching(false);
  }

  return (
    <div class="App">
      <h1>AnimeSearch</h1>
      <Searcharea placeholder="Search" value={value} onChange={onChange}
        onClick={searchAnime} disabled={searching}/>
      <Filter genre={genre} status={status} rated={rated}
        changeGenre={changeGenre} changeStatus={changeStatus} changeRated={changeRated}/>
      <a onClick={clearAll}><p>Clear All</p></a>
      <Results results={animeList} searching={searching} searched={searched} error={error}/>
    </div>
  );
}

export default App;
