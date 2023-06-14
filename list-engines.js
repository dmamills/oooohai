const openai = require('./openai');

(async () => {
    const response = await openai.listModels();
    console.log(response.data.data);
})();