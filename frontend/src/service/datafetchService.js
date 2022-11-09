import axios from 'axios'
export const dataFetchPost= (url,data)=> {
    console.log(data);
    return axios({
        method: 'post',
        url: url,
        data : data,
        headers: {
            'access-control-allow-origin': '*',
            'access-control-allow-headers':'content-type,Authorization,X-Requested-With',
            'Access-control-allow-methods':'DELETE POST GET OPTIONS'
        }
    });
}

export const dataFetchGet= (url)=> {
    // return axios.get(url);
    return axios({
        url: url,
        headers: {
            'access-control-allow-origin': '*',
            'access-control-allow-headers':'content-type,Authorization,X-Requested-With',
            'Access-control-allow-methods':'DELETE POST GET OPTIONS'
        }});
}