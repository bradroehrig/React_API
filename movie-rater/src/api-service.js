const TOKEN = "0b5b3e40e093f6746767bed29354889f58bdaf0e'"

export class API {
    static updateMovie(mov_id, body) {
        return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`,
            },
            body: JSON.stringify( body )
        }).then( resp => resp.json())
    }
}