class CatApi {
    static getAllCats() {
        return fetch("http://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                return error;
            });
    }
}

export default CatApi;
