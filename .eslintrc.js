module.exports = {
    'extends': 'airbnb',
    'root': true,
    'env': {
        'browser': true,
        'node': true
    },
    'rules': {
        // enable additional rules
        'comma-dangle': 0,
        'import/prefer-default-export': 0,
        'no-undef': ['warn'],
        'no-unused-vars': ['warn'],
        'object-curly-newline': 0,
        'react/prefer-stateless-function': 0,
        'react/prop-types': 0,
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
    }
};