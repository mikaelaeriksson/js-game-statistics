
export function getData() {
    return fetch('https://stryk.herokuapp.com/tipset')
        .then(response => response.json())
        .then(data =>
            data
        );
}
