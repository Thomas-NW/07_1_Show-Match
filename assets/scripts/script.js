//variables


const tmdbKey = '94406989928ec2b2df604a84ef1604a1';
const title = document.querySelector('#title');
const year = document.querySelector('#year');
const emptySearch = document.querySelector('#emptySearch');
const keywordTmdb = document.querySelector('#keywordTmdb');
const submitBtnTmdb = document.querySelector('#submitBtnTmdb');
const btnClear = document.querySelector('#btnClear');
const refineType = document.querySelector('#refineSearch');
const showType = document.querySelector('#showType');
const results = document.querySelector('#results');
const moviesContainer = document.querySelector('#moviesContainer');
const movieSection = document.querySelector('#movies');
const movieCardBoxes = document.querySelector('#movieCardBoxes');
const tvContainer = document.querySelector('#tvContainer');
const tvSection = document.querySelector('#tv');
const tvCardBoxes = document.querySelector('#tvCardBoxes');
const pageSubmenu = document.querySelector('#pageSubmenu');
const storedSearches = JSON.parse(localStorage.getItem("searches")) || [];

// fetch tmdb config file
const fetchConfig = () => {
  const getTmdbConfig = `https://api.themoviedb.org/3/configuration?api_key=${tmdbKey}`;
  fetch(getTmdbConfig)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    
})
};

fetchConfig();

//submit button for searh bar

submitBtnTmdb.addEventListener('click', function (event) {
  const formValidator = keywordTmdb.checkValidity();
  if (formValidator) {
    event.preventDefault();
    let tmdbKeyword = keywordTmdb.value.trim();
    // Create local storage for previous searched titles, deDupes them, and sorts them
    storedSearches.push(tmdbKeyword);
    let deDupedSearches = [...new Set(storedSearches)];
    deDupedSearches.sort();
    localStorage.setItem('searches', JSON.stringify(deDupedSearches));
    getTmdb(tmdbKeyword);
  } else {
    emptySearch.style.display = 'inline-block';
  }
});




//send value of input bar to the tmdb multi search query and fetch it

const getTmdb = keyword => {
  const tmdbKeyword = `https://api.themoviedb.org/3/search/multi?api_key=${tmdbKey}&language=en-US&query=${keyword}&page=1&include_adult=false`;

  fetch(tmdbKeyword)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    if (data.results.length === 0) {
      failedSearch.style.display = 'inline-block';
    }

    let tvResults = [];
    let movieResults = [];

    
    for (let i = 0; i <= data.results.length - 1; i++) {
      if (data.results[i].media_type === 'movie') {
        movieResults.push(data.results[i]);
      } else if (data.results[i].media_type === 'tv') {
        tvResults.push(data.results[i]);
    } 
    }

    tvCardBoxes.innerHTML = '';
    movieCardBoxes.innerHTML = '';
  
    searchMovies(movieResults);
    searchTv(tvResults);

  })

};

//fetch the tv query
const searchTv = tv => {
  for (let i = 0; i <= tv.length - 1; i++) {
    let fetchTv = `https://api.themoviedb.org/3/tv/${tv[i].id}?api_key=${tmdbKey}&language=en-US`;
    fetch(fetchTv)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      
      displayTv(data);
    })
  }
};

//fetch the movies query
const searchMovies = movies => {

  // let moviesForDisplay = []
  for (let i = 0; i <= movies.length - 1; i++) {
    let fetchMovies = `https://api.themoviedb.org/3/movie/${movies[i].id}?api_key=${tmdbKey}&language=en-US`;
    fetch(fetchMovies)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      
      displayMovies(data);
      
    })
  }
  
};


//display results of movies to dom
const displayMovies = display => {

  const cardBoxEl = document.createElement('div');
  cardBoxEl.setAttribute('class', 'col-lg-3 col-md-4 col-sm-6');
  const cardArticleEl = document.createElement('article');
  cardArticleEl.setAttribute('class', 'card mb-2');
  const cardHeaderEl = document.createElement('header');
  cardHeaderEl.setAttribute('class', 'title-header');
  const divCardBlockEl = document.createElement('div');
  divCardBlockEl.setAttribute('class', 'card-block');
  const imgCardEl = document.createElement('div');
  imgCardEl.setAttribute('class', 'img-card');
  const showImageEl = document.createElement('img');

  if (display.poster_path !== null) {
    showImageEl.setAttribute('src', `https://image.tmdb.org/t/p/w154${display.poster_path}`);
    showImageEl.setAttribute('alt', `${display.title}`);
    showImageEl.setAttribute('class', 'w-100 custom-size-img');
  } else {
    showImageEl.setAttribute('src', './assets/images/film-strip.jpg');
    showImageEl.setAttribute('alt', 'Stock Film Strip')
  }

  const taglineEl = document.createElement('p');
  taglineEl.setAttribute('class', 'tagline card-text text-xs-center px-1 py-1');
  const watchNowEl = document.createElement('button');
  watchNowEl.setAttribute('data-title', display.title)
  watchNowEl.setAttribute('class', 'pure-button pure-button-primary pure-button-active custom-button youtube-router');
  watchNowEl.innerHTML = 'Watch Now';
  const cardIconEl = document.createElement('i');
  cardIconEl.setAttribute('class', 'fab fa-youtube-square ml-2');
  
  const titleEl = document.createElement('h2')

  titleEl.innerHTML = display.title;
  taglineEl.innerHTML = display.overview;

  cardHeaderEl.append(titleEl);
  cardArticleEl.append(cardHeaderEl);
  cardBoxEl.append(cardArticleEl);
  movieCardBoxes.append(cardBoxEl);

  watchNowEl.append(cardIconEl);
  imgCardEl.append(showImageEl);
  divCardBlockEl.append(imgCardEl);
  divCardBlockEl.append(taglineEl);
  divCardBlockEl.append(watchNowEl);

  cardHeaderEl.append(titleEl);
  cardArticleEl.append(cardHeaderEl);
  cardArticleEl.append(divCardBlockEl);

  cardBoxEl.append(cardArticleEl);
  movieCardBoxes.append(cardBoxEl);

};

//display results of tv shows to dom
const displayTv = display => {
 

  const cardBoxEl = document.createElement('div');
  cardBoxEl.setAttribute('class', 'col-lg-4 col-md-6 col-sm-12');
  const cardArticleEl = document.createElement('article');
  cardArticleEl.setAttribute('class', 'card mb-2');
  const cardHeaderEl = document.createElement('header');
  cardHeaderEl.setAttribute('class', 'title-header');
  const divCardBlockEl = document.createElement('div');
  divCardBlockEl.setAttribute('class', 'card-block');
  const imgCardEl = document.createElement('div');
  imgCardEl.setAttribute('class', 'img-card');
  const showImageEl = document.createElement('img');

  if (display.poster_path !== null) {
    showImageEl.setAttribute('src', `https://image.tmdb.org/t/p/w154${display.poster_path}`);
    showImageEl.setAttribute('alt', `${display.title}`);
    showImageEl.setAttribute('class', 'w-100 custom-size-img');
  } else {
    showImageEl.setAttribute('src', './assets/images/film-strip.jpg');
    showImageEl.setAttribute('alt', 'Stock Film Strip')
  }
  
  const taglineEl = document.createElement('p');
  taglineEl.setAttribute('class', 'tagline card-text text-xs-center px-1 py-1');
  const watchNowEl = document.createElement('button');
  watchNowEl.setAttribute('class', 'pure-button pure-button-primary pure-button-active custom-button youtube-router');
  watchNowEl.innerHTML = 'Watch Now';
  const cardIconEl = document.createElement('i');
  cardIconEl.setAttribute('class', 'fab fa-youtube-square ml-2');
  
  
  const titleEl = document.createElement('h2')
  

  titleEl.innerHTML = display.name;
  taglineEl.innerHTML = display.overview;

  cardHeaderEl.append(titleEl);
  cardArticleEl.append(cardHeaderEl);
  cardBoxEl.append(cardArticleEl);
  tvCardBoxes.append(cardBoxEl);

  watchNowEl.append(cardIconEl);
  imgCardEl.append(showImageEl);
  divCardBlockEl.append(imgCardEl);
  divCardBlockEl.append(taglineEl);
  divCardBlockEl.append(watchNowEl);

  cardHeaderEl.append(titleEl);
  cardArticleEl.append(cardHeaderEl);
  cardArticleEl.append(divCardBlockEl);

  cardBoxEl.append(cardArticleEl);
  tvCardBoxes.append(cardBoxEl);

  
};

//creates the list of previous searches and appends them to search history
const storedSearchesList = () => {
  storedSearches.forEach((search) => {
    const searchListItem = document.createElement('li');
    const searchItem = document.createElement('a');
    searchItem.setAttribute('href', '#');
    searchItem.setAttribute('class', 'search-item');

    searchItem.innerHTML = search;
    searchListItem.append(searchItem);
    pageSubmenu.append(searchListItem);

  })
};

storedSearchesList();

//Creates the array of search history items and listens for clicks to reexecute the search
const searchItemsList = document.getElementsByClassName('search-item');
const searchItemsArray = Array.from(searchItemsList);

searchItemsArray.forEach((item) => {
  item.addEventListener('click', function() {
    keywordTmdb.value = item.innerHTML;
    submitBtnTmdb.click();
  })
})

//Creates eventlistner for clear button
btnClear.addEventListener('click', function() {
  localStorage.clear();
})