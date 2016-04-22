exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['drop-down.js'],
  rootElement: '[ng-app="driver.app"]',
  framework: 'jasmine'
};


