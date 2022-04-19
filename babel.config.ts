/* eslint-disable import/no-commonjs */

export default api => {
  api.cache(true)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
          useBuiltIns: 'usage',
          corejs: 2,
        },
      ],
      '@babel/typescript',
      [
        '@babel/preset-react',
        { runtime: 'automatic', importSource: '@emotion/react' },
      ],
    ],
    plugins: [
      [
        'babel-plugin-transform-require-ignore',
        {
          extensions: ['.less', '.css'],
        },
      ],
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true,
        },
      ],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-arrow-functions',
      '@babel/plugin-transform-template-literals',
      '@babel/plugin-transform-runtime',
      '@babel/plugin-transform-async-to-generator',
      '@babel/proposal-object-rest-spread',
      [
        'babel-plugin-inline-import',
        {
          extensions: ['.svg'],
        },
      ],
      '@emotion/babel-plugin',
    ],
    env: {
      production: {
        presets: ['react-optimize'],
      },
    },
  }
}
