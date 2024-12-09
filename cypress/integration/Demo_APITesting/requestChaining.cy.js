import {util} from "../../support/util.js"

describe('API testing demo', () => {
    let accessToken = 'Bearer 93e89899563133aaf2fdd0c87b878d624aee3a44cec6aed8384a2b00bea83969';
    let gd;
 
    before('this is a before hook', () => {
        cy.fixture('postRequestData').then((data) => {
            gd = data;
        })
})
    it('should validate Post request', () =>{
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
                'authorization': accessToken
            },
            body: reqBody
        }) .then((res) =>{
            expect(res.status).to.be.eq(201);
            const userID = res.body.id
            return userID;
        }) .then((userID) => {
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users' +'/' + userID,
                headers: {
                    'authorization': accessToken
                }
            })
            .then((res) => {
                expect(res.status).to.be.eq(200);
                expect(res.body.name).to.be.eq(reqBody.name);
                expect(res.body.name).to.equal(reqBody.name);
                expect(res.body).has.property('name',reqBody.name);
                expect(res.body.email).to.equal(reqBody.email)
            })


        });
    });

});
        
           
        