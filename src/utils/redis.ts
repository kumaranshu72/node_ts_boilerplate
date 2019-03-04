import redis from 'redis'
import { promisify } from 'util'
import * as config from '../config/config'

class Redis {
  private connection: redis.RedisClient
  private options: redis.ClientOpts
  private getAsync: any
  private setAsync: any
  private hsetAsync: any
  private hgetAsync: any

  constructor() {
    this.options = {
      host: config.CONFIG.redisUrl,
      port: config.CONFIG.redisPort
    }
    this.connection = redis.createClient(this.options)
    this.getAsync = promisify(this.connection.get).bind(this.connection)
    this.setAsync = promisify(this.connection.setex).bind(this.connection)
    this.hsetAsync = promisify(this.connection.hset).bind(this.connection)
    this.hgetAsync = promisify(this.connection.hget).bind(this.connection)
  }

  public get = (key: string) => {
    return this.getAsync(key)
  }

  public set = (key: string, value: string, ttl: number) => {
    return this.setAsync(key, ttl, value)
  }
  public hset = (key: string, key1: string, value: string) => {
    return this.hsetAsync(key, key1, value)
  }
  public hget = (key: string, key1: string) => {
    return this.hgetAsync(key, key1)
  }
}

export const RedisConnection: Redis = new Redis()
