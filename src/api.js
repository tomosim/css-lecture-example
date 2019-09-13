const axios = require('axios');


const getRandomImage = () => {
    return axios.get('https://picsum.photos/400/300/?random').then(data => {
        return (data.request.responseURL);
    })
}

module.exports = { getRandomImage };