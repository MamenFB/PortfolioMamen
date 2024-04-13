import express from 'express';
import mongoose from 'mongoose';

const app = express();

¡
mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.listen(4000, () => {
    console.log('server is running on port 4000');
});
