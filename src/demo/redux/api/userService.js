export function getAllUsers() {
    return fetch("http://jsonplaceholder.typicode.com/users")
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            return error;
        });
}
