const { User } = require('../../src/app/models');

describe("Authentication", () => {
  it('should authenticate with valid credentials', async () =>{
    const user = await User.create({
      name: 'Diego',
      email: 'diego@rocketseat.com.br',
      password_hash: '123123'
    })
  })

});