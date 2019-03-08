import app from '../src/app'

import chai from 'chai'

import request from 'supertest'

import 'mocha'

import { expect } from 'chai'

describe('GET /api/v1/health', () => {
  it('should return 200 OK', () => {
    const random: number  = Math.ceil(Math.random() * 1000)
    return request(app)
           .get('/api/v1/health')
           .set('x-forwarded-for', '127.0.0.1')
           .set('accept-encoding', 'application/gzip')
           .set('accept', 'application/json')
           .set('x-correlation-id', random.toString())
           .expect(200)
           .expect('{"status": "LIVE"}')
  })
})

describe('GET /api/v1/health', () => {
  it('should return 422 Unprocessable Entity', () => {
    const random: number  = 10
    request(app)
           .get('/api/v1/health')
           .set('x-forwarded-for', '127.0.0.1')
           .set('accept-encoding', 'application/gzip')
           .set('accept', 'application/json')
           .set('x-correlation-id', random.toString())

    return request(app)
           .get('/api/v1/health')
           .set('x-forwarded-for', '127.0.0.1')
           .set('accept-encoding', 'application/gzip')
           .set('accept', 'application/json')
           .set('x-correlation-id', random.toString())
           .expect(422)
           // .expect('{"status": "LIVE"}')
  })
})

describe('GET /api/v1/health', () => {
  it('should return 422 Unprocessable Entity', () => {
    const random: number  = Math.ceil(Math.random() * 1000)
    return request(app)
           .get('/api/v1/health')
           .set('x-forwarded-for', '127.0.0.1')
           .set('accept-encoding', 'application/php')
           .set('accept', 'application/json')
           .set('x-correlation-id', random.toString())
           .expect(422)
           // .expect('{"status": "LIVE"}')
  })
})

describe('GET /api/v1/health', () => {
  it('should return 422 Unprocessable Entity', () => {
    const random: number  = Math.ceil(Math.random() * 1000)
    return request(app)
           .get('/api/v1/health')
           .set('x-forwarded-for', '127.0.0.1')
           .set('accept-encoding', 'application/php')
           .set('accept', 'application/xml')
           .set('x-correlation-id', random.toString())
           .expect(422)
           // .expect('{"status": "LIVE"}')
    done()
  })
})
