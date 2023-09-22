import { Bagel } from '@kakengloh/bagel';

const app = new Bagel();

app.get('/', async (req, res) => res.send('Hello from Bagel.js on Zeabur!'));

app.listen(process.env.PORT || 3000);
