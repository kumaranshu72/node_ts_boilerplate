const Gelf = require('gelf')

import { grayLogConfig } from '../config'

export const gelf: any = new Gelf({
  connection: grayLogConfig.grayconnection,
  graylogHostname: grayLogConfig.graylogHOST,
  graylogPort: grayLogConfig.graylogPORT,
  maxChunkSizeLan: grayLogConfig.graymaxChunkSizeLan,
  maxChunkSizeWan: grayLogConfig.graymaxChunkSizeWan,
})
