import express from 'express';
import appRouter from './router';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(appRouter);

if (process.env.NODE_ENV === 'production') {
    app.listen(3000);
}

export const viteNodeApp = app;
