const PATH = "http://localhost:3004/movie";

export const getAllMovie = () =>
{
    return fetch(`${PATH}`)
    .then(response => response.json())
       
}
export const getByNameMovie = (name) =>
{
    return fetch(`${PATH}?q=${name}`)
    .then(response => response.json())
}
export const getByGeneryMovie = (genery) =>
{
    return fetch(`${PATH}?q=${genery}`)
    .then(response => response.json())
}

export const getByIdMovie = (movieIds) =>
{
    var newMovies = Array();
    newMovies = movieIds.map(element => {
        return fetch(`${PATH}?id=`+element)
    .then(response => response.json())
    })
    return Promise.all(newMovies).then(response=> response);
    
}