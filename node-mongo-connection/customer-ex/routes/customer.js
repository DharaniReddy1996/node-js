const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Customer = mongoose.model('Customer', new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 50,

    },
    isGold: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
}));

// get all the data- get api
router.get('/',async (req, res) => {
    let result = await Customer.find();
    res.send(result);
})

// post data post api
router.post('/', async (req, res) => {
/*
   const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);
*/

    let customer = new Customer({
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
    });
    customer = await customer.save().then(function (){
       console.log("Customer saved");
        res.send(customer);
    }).catch(reason => {
        console.log('validation error',reason.message);
        res.status(400).send(reason.message);
    })


});

router.get('/Id/:id',async (req, res) =>{
const customer = await Customer.findById(req.params.id);
if(!customer){
    res.status(404).send('no customer found with id');
}
res.send(customer);
});

router.get('/name/:name', async(req, res) => {
    let result = await Customer.find({name: req.params.name});
    console.log('Display Gold Customers'+ result);
    res.send(result);
});

router.get('/Gold/:isGold', async(req, res) => {
    let result = await Customer.find({isGold: req.params.isGold});
    console.log('Display Gold Customers'+ result);
    res.send(result);
});

router.put('/ID/:id', async (req, res) => {
    const {error} = validateCustomer(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const customer = await Customer.findByIdAndUpdate(req.params.id, {name: req.body.name},{new:true});
    if ((!customer)) {
        return res.status(404).send('The customer with the given ID was not found.');
    }
    res.send(customer);
});


router.delete('/:id', async (req, res) => {
    const customer = await Customer.findByIdAndRemove(req.params.id);
    if (!customer) return res.status(404).send('The customer with the given ID was not found.');
    res.send(customer);
});


router.put('/updatefirst/:id', async (req, res) => {
    //update One record
    const customer = await Customer.findOneAndUpdate(req.params.id,
        {name: req.body.name,
            isGold: req.body.isGold,
            phone: req.body.phone
        },{new:true});
    if ((!customer)) {
        return res.status(404).send('The customer with the given ID was not found.');
    }
    res.send(customer);
});

// it ie used to update all the data with 
router.put('/updateall/:id', async (req, res) => {
    const customer = await Customer.updateMany({_id: req.params.id},
        {name: "Gold  : "+ req.body.name,
            isGold: req.body.isGold,
            phone: req.body.phone
        },{new:true});
    if ((!customer)) {
        return res.status(404).send('The customer with the given ID was not found.');
    }
    res.send(customer);
});


function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(5).max(50).required(),
        isGold: Joi.boolean()
    };
    return Joi.validate(customer, schema);
}



module.exports = router;