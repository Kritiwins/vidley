const express = require('express');
const router = express.Router();

async function notifyCustomer(){
    const customer = await getCustomer(1);
    console.log('Customer: ', customer);
    if(customer.isGold){
    const movies = await getTopMovies();
    console.log('Top movies: ', movies);
    const email = await sendEmail(customer.email,movies);
    console.log('Email Sent...');
    }  
}
notifyCustomer();

function getCustomer(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Getting Customer Details...')
            resolve({
                id : 1,
                name: 'Kritika Jaiswal',
                isGold: 'true',
                email: 'email'
            })
        }, 2000);
    });
}

function getTopMovies(user){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Getting list of movies...`);
            resolve(['Movie1','Movie2']);
        }, 2000);
    });
}

function sendEmail(email,movies){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Sending list of movies to customer...')
            resolve();
        }, 2000);
    });
}

module.exports = router;