// index.js
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';

// here we are importing the register screens function from the screens.js file an suing it here
// otherwise all the files need to be registered in this 
registerScreens();

// it also specifies the opening stach of the app so in this case it is the initialized screen.

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing'
      }
    },
  });
});