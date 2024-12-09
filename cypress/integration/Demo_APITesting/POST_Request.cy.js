import {util} from "../../support/util.js"

describe('API testing demo', () => {

    let gd;
 
    before('this is a before hook', () => {
        cy.fixture('postRequestData').then((data) => {
            gd = data;
        })
})
    it('should validate Post request', () =>{
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'authorization': 'Bearer dee086221f204dc221a0dc11fbddab3fde0caa2e9281f450dd752f9bca56c50f'
            },
            body: {
                name: "user_test1",
                email: "user_test2@gmail",
                gender: "male",
                status: "active"
            }
        }).then((res) => {
            expect(res.status).to.be.eq(201);
            expect(res.body.name).to.be.eq("user_test1");
            expect(res.body.name).to.equal("user_test1");
            expect(res.body).has.property('name','user_test1');
            expect(res.body.email).to.equal('user_test2@gmail')
        })

           
    });

    it('should validate Post request - request variable', () =>{
        const reqBody = {
            name: "user_test1",
            email: "user_test3@gmail",
            gender: "male",
            status: "active"
        }
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'authorization': 'Bearer dee086221f204dc221a0dc11fbddab3fde0caa2e9281f450dd752f9bca56c50f'
            },
            body: reqBody
        }).then((res) => {
            expect(res.status).to.be.eq(201);
            expect(res.body.name).to.be.eq("user_test1");
            expect(res.body.name).to.equal("user_test1");
            expect(res.body).has.property('name','user_test1');
            expect(res.body.email).to.equal('user_test3@gmail')
        })
   });


   it('should validate Post request - fixture data', () =>{
    const reqBody = {
        name: gd.tid1.name,
        email: gd.tid1.email,
        gender: gd.tid1.gender,
        status: gd.tid1.status
    }
    cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users',
        headers: {
            'authorization': 'Bearer dee086221f204dc221a0dc11fbddab3fde0caa2e9281f450dd752f9bca56c50f'
        },
        body: reqBody
    }).then((res) => {
        expect(res.status).to.be.eq(201);
        expect(res.body.name).to.be.eq(reqBody.name);
        expect(res.body.name).to.equal(reqBody.name);
        expect(res.body).has.property('name',reqBody.name);
        expect(res.body.email).to.equal(reqBody.email)
    })
});

it.only('should validate Post request - randomize data ', () =>{
    const reqBody = {
        name: gd.tid1.name,
        email: util.randomEmail(),
        gender: gd.tid1.gender,
        status: gd.tid1.status
    }
    cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users',
        headers: {
            'authorization': 'Bearer dee086221f204dc221a0dc11fbddab3fde0caa2e9281f450dd752f9bca56c50f'
        },
        body: reqBody
    }).then((res) => {
        expect(res.status).to.be.eq(201);
        expect(res.body.name).to.be.eq(reqBody.name);
        expect(res.body.name).to.equal(reqBody.name);
        expect(res.body).has.property('name',reqBody.name);
        expect(res.body.email).to.equal(reqBody.email)
    })
});


})