import axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: `https://run.mocky.io/`
})

export const foodAPI = {
    eatable() {
        return instance.get (`v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e`)
            .then(response => {
                console.log('API: ', response)
                return response.data
            });
    },

}
