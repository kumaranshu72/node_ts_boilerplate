import redis from 'redis'
import * as config from '../config/config'

class Redis {
  private connection: redis.RedisClient
  private options: redis.ClientOpts

  constructor() {
    this.options = {
      host: config.CONFIG.redisUrl,
      port: config.CONFIG.redisPort
    }
    this.connection = redis.createClient(this.options)
  }

  public get(key: string) {
    return this.connection.get(key)
  }

  public set(key: string, value: string, ttl: number) {
    if (ttl === 0) {
      this.connection.set(key, value)
    }
    else {
      this.connection.setex(key, ttl, value)
    }
  }
}

export const RedisConnection: Redis = new Redis()
