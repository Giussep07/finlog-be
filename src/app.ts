import express from 'express';
import morgan from "morgan";
import cors from "cors";
import categoryRoutes from './routes/category.route';
import envConfig from './config/env';

const app = express();

app.use(cors({
    origin: envConfig.corsOrigins.split(",") || [],
    credentials: true
}));

app.use(morgan("dev"));

app.use((req, res, next) => {
    console.log(">>> REQUEST:", req.method, req.url);
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);

    const oldSend = res.send;
    res.send = function (body) {
        console.log("<<< RESPONSE BODY:", body);
        return oldSend.call(this, body);
    };

    next();
});

app.use(express.json());

// Category routes
app.use('/api/categories', categoryRoutes);

export default app;
