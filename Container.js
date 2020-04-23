import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Records from './Pages/Records';
import Create from './Pages/Tasks/Create';
import Edit from './Pages/Tasks/Edit';
import Index from './Pages/Tasks/Index';
import Show from './Pages/Tasks/Show';

const NavigationStack = createStackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  Records: { screen: Records },
  Create: { screen: Create },
  Edit: { screen: Edit },
  Index: { screen: Index },
  Show: { screen: Show },
},
{
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#4D4365', elevation: 0, shadowOpacity: 0 },
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold' },
  }
});

const Container = createAppContainer(NavigationStack);
export default Container;