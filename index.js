const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

app.get('/',(req, res)=>{
  res.json({
    "message": "Entorno listo"
  })
})


app.listen(process.env.PORT || 3000,()=>{
  console.log(`Server corriento en el puerto ${process.env.PORT || 3000}`);
})