import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn11114186Navigator from '../features/SignIn11114186/navigator';
import SignIn12114185Navigator from '../features/SignIn12114185/navigator';
import ArticleList114153Navigator from '../features/ArticleList114153/navigator';
import ArticleList114152Navigator from '../features/ArticleList114152/navigator';
import ArticleList114151Navigator from '../features/ArticleList114151/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn11114186: { screen: SignIn11114186Navigator },
SignIn12114185: { screen: SignIn12114185Navigator },
ArticleList114153: { screen: ArticleList114153Navigator },
ArticleList114152: { screen: ArticleList114152Navigator },
ArticleList114151: { screen: ArticleList114151Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
