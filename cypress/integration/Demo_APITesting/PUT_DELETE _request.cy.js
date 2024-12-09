import {util} from "../../support/util.js"

describe('API testing demo', () => {
    let accessToken = 'Bearer 93e89899563133aaf2fdd0c87b878d624aee3a44cec6aed8384a2b00bea83969';
    let gd;
    let apiUrl = 'https://gorest.co.in/public/v2/users'
 
    before('this is a before hook', () => {
        cy.fixture('postRequestData').then((data) => {
            gd = data;
        })
})
    it('should validate PUT request', () =>{
        const reqBody = {
        name: gd.tid1.name,
        email: util.randomEmail(),
        gender: gd.tid1.gender,
        status: gd.tid1.status
        }

        const putReqBody = {
        name: gd.tid2.name,
        email: util.randomEmail(),
        gender: gd.tid2.gender,
        status: gd.tid2.status
            
        }
        cy.request({
            method: 'POST',
            url: apiUrl,
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
                method: 'PUT',
                url: apiUrl +'/' + userID,
                headers: {
                    'authorization': accessToken
                },
                body: putReqBody
                
            })
            .then((res) => {
                
                expect(res.body.name).to.be.eq(putReqBody.name);
                expect(res.body.name).to.equal(putReqBody.name);
                expect(res.body).has.property('name',putReqBody.name);
                expect(res.body.email).to.equal(putReqBody.email)
            })


        });
    });

    it.only('should validate DELETE request', () =>{
        const reqBody = {
        name: gd.tid1.name,
        email: util.randomEmail(),
        gender: gd.tid1.gender,
        status: gd.tid1.status
        }

        const putReqBody = {
        name: gd.tid2.name,
        email: util.randomEmail(),
        gender: gd.tid2.gender,
        status: gd.tid2.status
            
        }
        cy.request({
            method: 'POST',
            url: apiUrl,
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
                method: 'PUT',
                url: apiUrl +'/' + userID,
                headers: {
                    'authorization': accessToken
                },
                body: putReqBody
                
            })
            .then((res) => {
                
                expect(res.body.name).to.be.eq(putReqBody.name);
                expect(res.body.name).to.equal(putReqBody.name);
                expect(res.body).has.property('name',putReqBody.name);
                expect(res.body.email).to.equal(putReqBody.email);
                return userID;
            });
            }).then((userID) => {
                cy.request({
                    method: 'DELETE',
                    url: apiUrl +'/' + userID,
                    headers: {
                        'authorization': accessToken
                    }
                })
                .then((res) => {
                    expect(res.status).to.be.eq(204);
                })
            })


        });
    });

