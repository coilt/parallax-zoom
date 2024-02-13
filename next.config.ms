// Import withTM from next-transpile-modules
const withTM = require('next-transpile-modules')([
  // Add the packages you want to transpile
  'three',
  '@acme/ui', // Your existing packages
  'lodash-es', // Your existing packages
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js configuration options
};

// Export the configuration wrapped by withTM
module.exports = withTM(nextConfig);