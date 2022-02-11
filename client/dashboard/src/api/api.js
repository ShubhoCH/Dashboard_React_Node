import axios from 'axios';

export function callApi(config)  {
    // return axios.get(`http://localhost:5000${url}/`);        // require url for this
    return axios(config);
}
