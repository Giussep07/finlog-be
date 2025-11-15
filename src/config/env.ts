import dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
    port: number;
    nodeEnv: string;
    databaseUrl: string;
}

const envConfig: EnvConfig = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    databaseUrl: process.env.DATABASE_URL || '',
};

export default envConfig;
