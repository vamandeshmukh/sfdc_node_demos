import { express } from 'express';

const exp = express();
const port = 9999;

// exp.get(arg1, arg2);
// exp.get('/', () => {});

exp.get('/', (response, request) => {
    response.send(`Welcome to SFDC app at ${port}.`);
    console.log(`Welcome!`)
});

// exp.listen(arg1, arg2);
// exp.listen(port, () => {});

exp.listen(port, () => {
    console.log(`My app is running at ${port}.`)
});

