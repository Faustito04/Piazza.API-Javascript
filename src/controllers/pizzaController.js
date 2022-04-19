import express from 'express';
import { PizzaService } from '.../services/PizzaService.js'

const router = express.router;
const pizzaService = new PizzaService();

router.get('/getAll', async (req, res) => {
    console.log("Get Operation");

    const pizzas = await pizzaService.getPizzas();

    return res.status(200).json(pizzas)
});

router.get('/:id', async (req, res) => {
    console.log(`Request URL Param: ${req.params.id}`);
    console.log("Get Operation");

    const pizza = await pizzaService.getById();

    return res.status(200).json(pizza)
})

export default router