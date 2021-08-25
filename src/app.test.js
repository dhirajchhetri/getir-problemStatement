const { app } = require('./app');
const request = require('supertest');
const { messageCode, messageText} = require('./dictionary/constants')

describe("Get the item result ", () => {
    it('get should get the key counts as per the filterssupplied ', async () => {
        const res = await request(app).post('/keyCounts').send({ "startDate": "2021-02-01",  "endDate": "2021-02-05",  "minCount": 2700,  "maxCount": 3000  });
        expect(res.body).toHaveProperty('code');
        expect(res.body.code).toEqual(messageCode.Success);
        expect(res.body).toHaveProperty('msg');
        expect(res.body.msg).toEqual(messageText.Success);
        expect(res.body).toHaveProperty('data');
        expect(res.status).toBe(200);
    });
})
