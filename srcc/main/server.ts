import app from './config/app';

app.listen(8080 || process.env.PORT, () => console.log('server running'));