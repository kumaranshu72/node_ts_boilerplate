export const mongoConfig = {
    mongoUrl: process.env.MONGO_URL,
}

export const redisConfig = {
  redisPort: parseInt(process.env.REDIS_PORT, 10) || 6379,
  redisUrl: process.env.REDIS_URL || 'redis',
}

export const grayLogConfig = {
  grayconnection: 'wan',
  graylogHOST: process.env.GRAYLOGHOST || 'graylog',
  graylogPORT: parseInt(process.env.GRAYLOGPORT, 10) || 12201,
  graymaxChunkSizeLan: 8154,
  graymaxChunkSizeWan: 1420,
}