const app = require('./app');

const port = process.env.DEV_PORT|| 3000;

app.listen(port);
console.log(`now listening on port ${port}`);