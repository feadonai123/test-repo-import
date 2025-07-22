const teste = () => {
  console.log('teste');
};


export { teste }; // ES Module

// CommonJS compatibility
module.exports = { teste };