import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import { searchMovies, getPopularMovies } from '../services/api'
import "../css/Home.css"

export default function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])



    async function handleAddTodo(event) {
        event.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return
        setLoading(true)
        setError(null)
        try {
            const searchResult = await searchMovies(searchQuery)
            setMovies(searchResult)
        } catch (error) {
            console.log(error)
            setError("Failed to search movies")
        } finally {
            setLoading(false)
        }

        setSearchQuery("")
    }

    return (
        <div className='home'>
            <form className='search-form' onSubmit={handleAddTodo}>
                <input
                    type="text"
                    placeholder="Search for movies"
                    value={searchQuery}
                    className='search-input'
                    onChange={(e) => setSearchQuery(e.target.value)} />
                <button className='search-button' type="submit">Search</button>
            </form>

            {error && <div className='error-message'>{error}</div>}

            {(loading) ? <div className="loading-screen">Loading...</div> :
                <div className="movies-grid">
                    {
                        movies.map(movie => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))
                    }
                </div>}

        </div>


    );
}
