module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
		plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
						'@context': './src/context',
						'@router': './src/router',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@services': './src/services',
						'@storage': './src/services/storage',
						'@ui': './src/ui',
            '@theme': './src/theme',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
