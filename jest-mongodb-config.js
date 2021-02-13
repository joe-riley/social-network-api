modult.exports = {
  
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest',
    },
    binary: {
      version: '4.4.3',
      // version: 'latest',
      skipMD5: true,
    },
    autoStart: false,
  }
};
