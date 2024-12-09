describe('API testing demo', () => {

    it('should validate GET reuest', () =>{
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'authorization': 'Bearer dee086221f204dc221a0dc11fbddab3fde0caa2e9281f450dd752f9bca56c50f'
            }
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).has.length(10);
            expect(res.body[0]).has.property('name','Devagya Nambeesan');
        })
       
    });


})