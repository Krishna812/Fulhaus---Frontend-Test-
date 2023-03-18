const axios = require('axios');
const fs = require('fs');

axios.get('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6')
  .then(response => {
    const data = response.data;
    const fileContent = `const data = ${JSON.stringify(data)};\n\nexport default data;`;
    fs.writeFileSync('./src/data/data.js', fileContent);
  })
  .catch(error => {
    console.error(error);
    alert('error');
  });