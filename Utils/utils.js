const axios = require('axios');

async function getData() { 
    const response = await axios.get('https://api.publicapis.org/entrie');    
    return response.data;  
}



module.exports.getData = getData;
