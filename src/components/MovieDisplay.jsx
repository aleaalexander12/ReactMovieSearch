import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function MovieDisplay({movie}) {
    const loaded = () =>{ 
    return (
        <div>
            <h1>{movie.Title}</h1>
            <h2>{movie.Genre}</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Year}</h2>

        </div>
    )}

    const loading = () => {
        return (
            <div>
                <h1><Skeleton highlightColor='#f5f5f5'/></h1>
                <h2><Skeleton /></h2>
                <Skeleton height="450px"/>
                <h2><Skeleton /></h2>
            </div>
        )
    }

    return movie ? loaded() : loading();
}