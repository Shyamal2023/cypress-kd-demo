let logindata
before(() => {
  Given('Login to OrangeHRM', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.fixture('loginUser.json').then((data) => {
    logindata = data
    cy.login(logindata.username,logindata.password)
    
    })
  })
})



  


  




    

  