import express from 'express'
import path from 'path'
import routes from './routes'
import cors from 'cors'

import {errors} from 'celebrate'

const app = express();
app.use(cors())

app.use(express.json())
app.use(routes)
app.use(errors())

app.listen(3333)
app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads')))



// request param => vem na própria rota e indentifica um recurso
//query param => são parametros que vem na rota e geralmente são opcionais
//request body => são paramentros para criar/att informações


