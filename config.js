module.exports = {
    ENV : process.env.NODE_ENV || 'development',
    PORT : process.env.PORT || 3000,
    URL : process.env.BASE_URL || 'http://localhost:3000',
    SECRET : 'Papaguacha',
    MONGODB_URL: process.env.MONGODB_URL ||
    'mongodb://papaguacha:papaguacha4773@ds249233.mlab.com:49233/portfolio-crud',
}
