const {User} = require('../../src/app/models');

describe("Authentication", () => {
  it("should should sum two numbers", () => {
    const user = await User.create({name: 'Diego', email: 'diego@rocketseat', password_hash:"123123"})

    console.log(user)

    expect(user.email).toBe('diego@rocketseat.com.br')
  });

});