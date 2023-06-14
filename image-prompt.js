const openai = require('./openai');

(async () => {
    try {
    const response = await openai.createImage({
        prompt: 'Kingpin holding spiderman in the palm of his hand',
        n: 2,
        size: '512x512'
    });
    console.log(response.data);
} catch (error) {
    console.log(error.response.data);
}
})();