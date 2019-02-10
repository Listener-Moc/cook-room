module.exports = {
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 10,
        "sourceType": "module",
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "rules": {
        "no-console": "warn",
        "no-unused-vars": "warn",
        "semi": "error",
        "comma-spacing": "error"
    }
};