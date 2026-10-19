import { Router } from 'express';
import { uploader } from '../util.js';

const router = Router();

const data = [{ id: 1, username: "Andres", email: "Andres@example.com", rol: "admin" },
{ id: 2, username: "Alvaro", email: "Alvaro@example.com", rol: "usuario" },
{ id: 3, username: "Juan", email: "Juan@example.com", rol: "usuario" }]

router.get('/', (req, res) => {
    res.json(data);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const user = data.find(u => u.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(user);
});

router.post('/', (req, res) => {
    const { id, username, email, rol } = req.body;
    if (!id || !username || !email || !rol) {
        return res.status(400).json({ message: 'Faltan campos para crear un usuario' })
    }
    const newUser = { id, username, email, rol }
    data.push(newUser)
    res.status(201).json(newUser);
});

export default router;