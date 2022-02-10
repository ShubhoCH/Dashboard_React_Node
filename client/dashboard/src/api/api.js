import axios from 'axios';

export const callApi = (url) =>  {
    axios.get(url).then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      alert(e);
    });   
}