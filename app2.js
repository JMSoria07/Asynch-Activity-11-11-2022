const mongoose = require('mongoose')
const express = require('express')
const Customer = require('./model/customers')
const { createIndexes } = require('./model/customers')

const dbUri = "mongodb+srv://Arldrei:admin1243@cluster0.t9q2msx.mongodb.net/pictoresa2?retryWrites=true&w=majority"
const app = express()

mongoose.connect(dbUri)
    .then(app.listen(3000, (err) => {
    if(!err) console.log('listening to port 3000...')
    }))
    .catch(error => {
    if(error) console.log('unable to connect...')
    })

//Create
// app.get('/addCustomer', (req, res) => {
//     const s1 = new Customer ({
//         user_id: 1,
//         name: "Shalom Del Rosario",
//         address_id: 1,
//         order_id: "001"
//     })
//     s1.save()
//         .then(result => {
//             console.log(result)
//         })
//         .catch(error => {
//             if(error) console.log('unable to insert the document')
//         })
//     })

//Alternative using Uri
app.use(express.json())
// app.post('/addCustomer', (req, res) => {
//     const s1 = new Customer(req.body);
//     s1.save()
//         .then(result => {
//             console.log(result)
//         })
//         .catch(error => {
//             if(error) console.log('unable to insert document')
//         })
//     })

//Read
// app.get('/customers', (req, res) => {
//     Customer.findById('636ddb3e03f418d8cf366599')
//         .then(result => {
//             res.send(result)
//          })
//         .catch(err => res.send(err))
//     })

//Update
app.patch('/customers', (req, res) => {
    Customer.findByIdAndUpdate('636ddb3e03f418d8cf366599', req.body)
        .then(result => {
            res.send(result)
         })
        .catch(err => console.log(err))

})

//Delete
// app.delete('/customers', (req, res) => {
//     Customer.findByIdAndDelete('636ddb5303f418d8cf36659b')
//         .then(result => {
//             res.send(result)
//          })
//         .catch(err => console.log(err))
// })