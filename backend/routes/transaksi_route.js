import express from 'express'
import {
   getAllPeminjaman,
   getPeminjamanById,
   addPeminjaman,
   pengembalianBarang,
   getUsageAnalysis,
   analyzeItems
} from '../controllers/transaksi_controllers.js'

import {authorize} from '../controllers/auth_controllers.js'
import {IsMember, IsAdmin} from '../middleware/role_validation.js'

const app = express()


app.get('/borrow', authorize, [IsAdmin], getAllPeminjaman)
app.get('/borrow/:id', authorize, [IsAdmin], getPeminjamanById)
app.post('/borrow', authorize, [IsMember], addPeminjaman)
app.post('/return', authorize, [IsMember], pengembalianBarang)
app.post('/getusage', getUsageAnalysis)
app.post('/analyz', analyzeItems)

export default app