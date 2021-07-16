module.exports = {
    extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:react/recommended'],
    rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'arrow-parens': ['warn', 'as-needed'],
        'arrow-spacing': [1, { before: true, after: true }],
        'class-methods-use-this': 0,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
            },
        ],
        'import-alias/import-alias': [
            'error',
            {
                relativeDepth: 0,
                aliases: [{ alias: '', matcher: '^src/*' }],
            },
        ],
        'import/prefer-default-export': 0,
        'import/no-useless-path-segments': 1,
        'max-len': [1, { code: 120, ignorePattern: '^import ([^\\n]*) from (\'|")([^]*)' }],
        'no-implicit-coercion': 'error',
        'no-shadow': 'off',
        'no-trailing-spaces': 1,
        quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
        'react/jsx-tag-spacing': 1,
        'react/prop-types': 0,
        'react/jsx-boolean-value': ['error'],
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': 1,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: false,
                types: {
                    String: {
                        message: 'Use string instead',
                        fixWith: 'string',
                    },
                    Boolean: {
                        message: 'Use boolean instead',
                        fixWith: 'boolean',
                    },
                    Number: {
                        message: 'Use number instead',
                        fixWith: 'number',
                    },
                    Symbol: {
                        message: 'Use symbol instead',
                        fixWith: 'symbol',
                    },
                    Object: {
                        message: [
                            'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
                            '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
                            '- If you want a type meaning "any value", you probably want `unknown` instead.',
                        ].join('\n'),
                    },
                },
            },
        ],
        'no-underscore-dangle': ['error', { allow: ['__typename'] }],
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: ['**/*.test.ts', '**/*.test.tsx', 'src/setupTests.js'] },
        ],
        'prettier/prettier': ['error'],
        'react-hooks/rules-of-hooks': 'error',
    },
    overrides: [
        {
            files: ['src/**/*.test.ts', 'src/**/*.test-data.ts'],
            rules: {
                '@typescript-eslint/no-object-literal-type-assertion': 'OFF',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2019,
        ecmaFeatures: {
            arrowFunctions: false,
            classes: false,
            defaultParams: false,
            destructuring: false,
            forOf: true,
            generators: false,
            jsx: true,
            modules: false,
            objectLiteralComputedProperties: true,
            objectLiteralDuplicateProperties: false,
            objectLiteralShorthandMethods: false,
            objectLiteralShorthandProperties: false,
            spread: true,
            templateStrings: false,
        },
    },
    env: {
        es6: true,
        browser: true,
        'jest/globals': true,
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['./src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
            },
        },
        react: {
            version: 'detect',
        },
    },
    plugins: ['@typescript-eslint', 'jest', 'jsx-a11y', 'react', 'prettier', 'import-alias', 'react-hooks'],
};
