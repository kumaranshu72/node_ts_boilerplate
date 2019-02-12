const mongoose = require('mongoose')
import * as config from '../config/config'

mongoose.connect(config.CONFIG.mongoUrl, {useNewUrlParser: true})
