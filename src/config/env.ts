import dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
    port: number;
    nodeEnv: string;
    databaseUrl: string;
    corsOrigins: string;
}

const envConfig: EnvConfig = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    databaseUrl: process.env.DATABASE_URL || '',
    corsOrigins: process.env.CORS_ORIGINS || '*',
};

export default envConfig;
