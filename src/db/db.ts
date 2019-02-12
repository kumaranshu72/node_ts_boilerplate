import { connect } from 'mongoose'
import * as config from '../config/config'

connect(config.CONFIG.mongoUrl, {useNewUrlParser: true})
