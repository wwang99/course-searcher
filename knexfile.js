
module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            user: 'postgres',
            password: '',
            database: 'course-planner'
        }
    },
    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL
    }
};
