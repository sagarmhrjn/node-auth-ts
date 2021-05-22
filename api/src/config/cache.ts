import { RedisOptions } from 'ioredis'

const {
    REDIS_PORT = 6379,      // default port
    REDIS_HOST = 'localhost',
    REDIS_PASSWORD = 'secret'
} = process.env

export const REDIS_OPTIONS: RedisOptions = {
    // any variable extracted from process env is string.
    port: +REDIS_PORT,  // OR parseInt(REDIS_PORT, 10)   <typecasting to integer>
    host: REDIS_HOST,
    password: REDIS_PASSWORD,
}