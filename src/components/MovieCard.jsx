function MovieCard({ movie }) {

    function onLikeBtn() {
        alert("Liked")
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <button onClick={onLikeBtn}>♡</button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.date}</p>
            </div>
        </div>

    )
}

export default MovieCard