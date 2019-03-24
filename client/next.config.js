const dotEnvResult = require('dotenv').config();

if (dotEnvResult.error) {
    throw dotEnvResult.error;
}

module.exports = {
    publicRuntimeConfig: {
        RINKEBY_API: process.env.RINKEBY_API
    }
};
