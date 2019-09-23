
const PATH = "http://localhost:3004/tvShows";

export const getAllShow = () =>
{
    return fetch(`${PATH}`)
    .then(response => response.json())
}
export const getByNameShow = (name) =>
{
    return fetch(`${PATH}?name=${name}`)
    .then(response => response.json())
}
export const getByGeneryShow = (genery) =>
{
    return fetch(`${PATH}?genery=${genery}`)
    .then(response => response.json())
}
