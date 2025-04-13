import { join } from 'path';

export const config = {
  runner: 'local',
  framework: 'mocha',
  specs: ['./test/specs/**/*.js'],
  maxInstances: 1,

  services: [
    ['appium', {
      command: 'appium',
      args: { port: 4725 }
    }]
  ],

  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'emulator-5554',
    // REMOVE the .apk file so Appium won't reinstall or relaunch the app
    // 'appium:app': join(process.cwd(), 'appium-survey-app.apk'),

    // Add appPackage and appActivity to attach to the running app
    'appium:appPackage': 'com.anonymous.frontend',
    'appium:appActivity': 'com.anonymous.frontend.MainActivity',

    'appium:noReset': true,
    'appium:dontStopAppOnReset': true,
    'appium:autoGrantPermissions': true,
    'appium:fullReset': false
  }],

  mochaOpts: { timeout: 600000 },
  reporters: ['spec']
};
