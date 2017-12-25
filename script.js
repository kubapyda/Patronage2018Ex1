class MoviesList {

    constructor() {
        const moviesList = document.getElementById('moviesList')
        const moviesCounterAll = document.getElementById('moviesCounterAll')
        const moviesCounterSeen = document.getElementById('moviesCounterSeen')
        this.countAllMovies()
        this.countSeenMovies()
        this.createMovie()
        this.isFilmWasSeen()
    }

    countAllMovies() {
        moviesCounterAll.innerHTML = moviesData.length
    }

    countSeenMovies() {
        let seenMovies = 0
        moviesData.forEach(movie => {
            if (movie.seen === 'T') {
                seenMovies++
            }
        })
        moviesCounterSeen.innerHTML = seenMovies
    }

    createMovie() {
        let i = 0
        moviesData.forEach(movie => {
            moviesList.innerHTML += `
                <li>
                    <span class="movieTitle">${movie.title}</span>
                    <span class="movieYear">${movie.year},</span>
                    <span class="movieGenre">${movie.genre}</span>
                    <span class="movieSummary">${movie.summary}</span>
                    <button class="seenMovieButton" id="movie-${i}">
                        <span class="movieSeen ${movie.seen === 'T' ? 'true' : 'false'}"></span>
                    </button>
                </li>`
            i++
        })
    }

    isFilmWasSeen() {
        const moviesSeenButton = document.querySelectorAll('.seenMovieButton')
        moviesSeenButton.forEach(movie => {
            movie.addEventListener('click', (event) => {
                const index = +event.path[1].getAttribute('id').substr(6, 1)
                const movie = moviesData[index]
                const seenMarker = event.path[0]
                if (movie.seen === 'T') {
                    movie.seen = 'F'
                    seenMarker.classList.remove('true')
                    seenMarker.className += ' false'
                } else {
                    movie.seen = 'T'
                    seenMarker.classList.remove('false')
                    seenMarker.className += ' true'
                }
                this.countSeenMovies()
            })
        })
    }
}

new MoviesList()