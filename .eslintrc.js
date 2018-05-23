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
        'react/prop-types': 0,
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
    }
};