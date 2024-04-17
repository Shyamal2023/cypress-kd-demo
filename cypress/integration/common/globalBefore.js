
before(() => {
  Given('Login to Clario application', () => {
      cy.fixture('loginData').then(function (loginData) {
          this.loginData = loginData
          cy.login(loginData.SWL50,loginData.username, loginData.password);
      })
  });
  });

  
  import SubspecialtyPage from '../SWL/Management/GroupManagement/Subspecialty/SubspecialtyPage';
  const subspecialty = new SubspecialtyPage();
  before(() => {
    Given('Login to Clario application {string} with username {string} and password {string}', (url,username,password) => {
        cy.login(url,username,password)
        subspecialty.unCaught()
    })
  })

    

  