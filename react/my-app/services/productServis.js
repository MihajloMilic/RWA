const url = "http://localhost:3001/product";

export function getAllProducts() {
  return fetch(url).then(response => response.json());
}