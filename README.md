# compass_ionic
This is the code for a simple magnetic compass mobile application developed on ionic

# How to run the app
After cloning the repo, run npm install followed by the following:

`npm install -g cordova ionic`

Change the working directory to your project directory.
Now add the Cordova project for the Android Platform and install the basic Cordova plugins as well. 
The following code allows us to run the app on the Android emulator or a device:

`ionic platform add android`

The last step of the installation process is to run your app, which will start the mobile device, if connected, or the default emulator, if there is no device connected:

`ionic run android`


for more help see [environment setup & installation guide](https://www.tutorialspoint.com/ionic/ionic_environment_setup.htm)
