describe('Alias and Get command demo', () => {

    beforeEach('Initiate the main Url', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'authorization': 'Bearer dee086221f204dc221a0dc11fbddab3fde0caa2e9281f450dd752f9bca56c50f'
            }
        }).as('users')
    })

    it('should validate the status code usin alias', () => {
        cy.get('@users').
            its('status').should('eq', 200);
       
       })



    it('should validate the header using alias', () => {
        cy.get('@users').its('headers').its('content-type').should('include','application/json; charset=utf-8')

    })

    it('should validate  the data using alias', () => {
   cy.get('@users').its('body').then((res)=>{
    expect(res[0]).has.property('name','Devagya Nambeesan')
   })

    })
})

