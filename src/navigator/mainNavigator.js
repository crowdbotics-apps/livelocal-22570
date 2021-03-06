import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard15172190Navigator from '../features/Dashboard15172190/navigator';
import ArticleList6172189Navigator from '../features/ArticleList6172189/navigator';
import ArticleList172170Navigator from '../features/ArticleList172170/navigator';
import ArticleList172169Navigator from '../features/ArticleList172169/navigator';
import ArticleList172168Navigator from '../features/ArticleList172168/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard15172190: { screen: Dashboard15172190Navigator },
ArticleList6172189: { screen: ArticleList6172189Navigator },
ArticleList172170: { screen: ArticleList172170Navigator },
ArticleList172169: { screen: ArticleList172169Navigator },
ArticleList172168: { screen: ArticleList172168Navigator },

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
