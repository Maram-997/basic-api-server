'use strict';

const express = require('express');
const router = express.Router();

const {
    createClothes,
    getClothes,
    getAllClothes,
    updateClothes,
    deleteClothes,
    
} = require('../implementations/clothesImpl');

router.get('/Clothes', getAllClothes);
router.post('/Clothes', createClothes);
router.get('/Clothes/:id', getClothes);
router.put('/Clothes/:id', updateClothes);
router.delete('/Clothes/:id', deleteClothes);

module.exports = router;