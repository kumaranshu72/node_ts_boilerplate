import redis from 'redis'
import { promisify } from 'util'
import * as config from '../config/config'

class Redis {
  private connection: redis.RedisClient
  private options: redis.ClientOpts
  private getAsync: any
  private setAsync: any

  constructor() {
    this.options = {
      host: config.CONFIG.redisUrl,
      port: config.CONFIG.redisPort
    }
    this.connection = redis.createClient(this.options)
    this.getAsync = promisify(this.connection.get).bind(this.connection)
    this.setAsync = promisify(this.connection.setex).bind(this.connection)
  }

  public get = (key: string) => {
    return this.getAsync(key)
  }

  public set = (key: string, value: string, ttl: number) => {
    return this.setAsync(key, ttl, value)
  }
}

export const RedisConnection: Redis = new Redis()
