import app from './app';
import envConfig from './config/env';

app.listen(envConfig.port, () => {
    console.log(`Server is running on port ${envConfig.port} in ${envConfig.nodeEnv} mode.`);
});
