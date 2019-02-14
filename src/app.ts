import express from 'express'

import * as bodyParser from 'body-parser'

import { connect } from 'mongoose'

import * as config from './config/config'

import router from './routes'

class App {

  public app: express.Application

  constructor() {
      this.app = express()
      this.config()
      this.mountRoutes()
  }

  private config(): void {
    // DB connection
    connect(config.CONFIG.mongoUrl, {useNewUrlParser: true})
    // support application/json type post data
    this.app.use(bodyParser.json())
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }))
  }

  private mountRoutes(): void {
    this.app.use(router)
  }

}

export default new App().app
