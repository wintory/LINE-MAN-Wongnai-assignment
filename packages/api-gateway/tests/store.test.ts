import { app } from '..';
import request from 'supertest';

describe('Store endpoint', () => {
  it('should return all store data', async () => {
    const res = await request(app).get('/api/store');
    expect(res.statusCode).toEqual(200);
    expect(res.body.stores.length).toEqual(2);
  });

  it('should return store detail data', async () => {
    const res = await request(app).get('/api/store/567051');
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual('ลืมเคี้ยว');
  });

  it('should return store detail data', async () => {
    const res = await request(app).get('/api/store/227018');
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual('Ekkamai Macchiato - Home Brewer');
  });
});
