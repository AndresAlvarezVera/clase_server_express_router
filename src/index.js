import express from 'express';
import path from "path";
import { fileURLToPath } from "url";

import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/products.router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static(path.join(__dirname, '../public')));
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.get('/', (req, res) => {
  res.send('HOLA MUNDO!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})