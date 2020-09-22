import express from 'express'
import ClassesController from './controllers/ClassesControlers'
import ConnectionController from './controllers/ConnectionsController'

const routes = express.Router()
const classesControllers = new ClassesController()
const conectionsControllers = new ConnectionController()


routes.get('/classes', classesControllers.index)
routes.post('/classes', classesControllers.create)

routes.post('/connections', conectionsControllers.create)
routes.get('/connections', conectionsControllers.index)

export default routes