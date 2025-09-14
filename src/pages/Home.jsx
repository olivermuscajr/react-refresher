import { useState } from 'react'
import MovieCard from '../components/MovieCard'


export default function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    const movies = [
        { id: 1, title: "Harry Potter", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "2018" },
        { id: 3, title: "James Bond", release_date: "1998" },
    ]

    function handleAddTodo(event) {
        event.preventDefault()
        setSearchQuery("")
    }

    return (
        <>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    placeholder="Search for movies"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <div className="movie-grid">
                {
                    movies.map(movie => (movie.title.toLowerCase().startsWith(searchQuery) &&
                        <MovieCard movie={movie} key={movie.id} />
                    ))
                }
            </div>
        </>


    );
}
