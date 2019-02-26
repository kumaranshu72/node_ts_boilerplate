const Gelf = require('gelf')
import * as config from '../config/config'

export const gelf: any = new Gelf({
  connection: config.CONFIG.grayconnection,
  graylogHostname: config.CONFIG.graylogHOST,
  graylogPort: config.CONFIG.graylogPORT,
  maxChunkSizeLan: config.CONFIG.graymaxChunkSizeLan,
  maxChunkSizeWan: config.CONFIG.graymaxChunkSizeWan
})
