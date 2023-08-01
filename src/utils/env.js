const _isProduction = process.env.NODE_ENV === 'production';
const BASIC_URL='http://localhost:8012/'

const env = {
    development: {
        BASIC_URL
    },
    production: {
        BASIC_URL
    }
};
const prsDevelopment=_isProduction ? env.production.BASIC_URL : env.development.BASIC_URL;
export  const isProduction=prsDevelopment;
