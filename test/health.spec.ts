import app from '../src/app'

import chai from 'chai'

import request from 'supertest'

import 'mocha'

import { expect } from 'chai'

describe('GET /api/v1/health', () => {
  it('should return 200 OK', () => {
    const random: number  = Math.ceil(Math.random() * 1000)
    return request(app)
           .get('/api/v1/heath')
           .set('X-Forwarded-For', '127.0.0.1')
           .set('Accept-Encoding', 'application/gzip')
           .set('Accept', 'application/jsons')
           .set('x-correlation-Id', random.toString())
           .expect(200)
           .expect('{"status": "LIVE"}')
    done()
  })
})
