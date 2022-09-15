import express from 'express';
import bodyParser from 'body-parser';

// bodyParser allows us to take incoming post requests

import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());


//Route
app.use('/users', usersRoutes);


// app.get('/', (req, res) => {
//     res.send('Hello from homepage')
// })

app.listen(PORT, ()=> console.log(`server ti wa online lori http://localhost:${PORT}`));