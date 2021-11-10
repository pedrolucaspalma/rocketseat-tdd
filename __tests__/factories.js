const { factory } = require('factory-girl')
const { User } = require ('../src/app/models')

factory.define('User', User, {
    name: 'Diego',
    email: 'diego@rocketseat.com.br',
    password: '123456'
})

module.exports = factory