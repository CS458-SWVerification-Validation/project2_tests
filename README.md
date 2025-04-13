IMPORTANT!
Before run the test you need to login manually at the mobile app!!! We automated only the survey test as project requires. If you don't login manually then all tests will fail.
Prerequisites
Before running the tests, make sure you have:

Node.js and npm installed

Appium installed globally:
npm install -g appium

Java JDK installed (with environment variables configured)

An Android emulator or real device connected and authorized

ADB (Android Debug Bridge) installed and working

WebdriverIO and project dependencies installed:
npm install

APK Setup 
The test project does not include the APK file due to file size restrictions.

Before running the tests:

Locate the .apk file (e.g., app-debug.apk) in your mobile app project.

Copy the .apk file into this folder (your local test project folder).

Then, install it on your device or emulator using:
adb install app-release.apk

If it's already installed and needs updating:
adb uninstall <package_name>
adb install app-release.apk
Replace <package_name> with your app's actual package name if necessary.

IMPORTANT!
Before run the test you need to login manually at the mobile app!!! We automated only the survey test as project requires. If you don't login manually then all tests will fail.

Running the Tests
With the app installed and device/emulator ready, run:
npx wdio run wdio.conf.js

This will launch the Appium server, connect to the device, and execute all tests in survey.spec.js.
