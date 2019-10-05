module.exports = {
    createUser ({ username}) {
      console.log(`Add user ${username}`)
      return Promise.resolve()
    }
  }