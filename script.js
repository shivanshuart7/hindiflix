
fetch('movies.json')
  .then(response => response.json())
  .then(movies => {
    const movieList = document.getElementById('movie-list');
    movies.forEach(movie => {
      const div = document.createElement('div');
      div.className = 'movie-card';
      div.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" />
        <h3>${movie.title}</h3>
        <a href="${movie.download}" download>Download</a>
      `;
      movieList.appendChild(div);
    });
  });
