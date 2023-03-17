import express, {Request,Response,Application} from 'express';
import fs from 'fs';
import cors from 'cors';

const app:Application = express();
app.use(cors());

const PORT = 8080;

app.get('/transactions', function (req:Request, res:Response):void {
   fs.readFile( __dirname + "/" + "transactions.json", 'utf8', function (err, data) {
      res.end( data );
   });
})

app.listen(PORT, ():void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});