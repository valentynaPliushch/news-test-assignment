import {createNativeStackNavigator} from "@react-navigation/native-stack"
import NewsListScreen from '../screens/NewsListScreen'
import CreateNewsScreen from '../screens/CreateNewsScreen'
import {NewsActionsModalScreen} from '../screens/NewsActionsModalScreen'

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
    return (
        
            <Stack.Navigator>
                <Stack.Screen name='NewsList' component={NewsListScreen} options={{headerShown: false}}/>
                <Stack.Screen name='CreateNews' component={CreateNewsScreen} options={{headerShown: false}}/>
                      <Stack.Screen
        name="NewsActionsModal"
        component={NewsActionsModalScreen}
        options={{
          presentation: 'transparentModal',
          animation: 'slide_from_bottom',
          headerShown: false,
        }}
      />
            </Stack.Navigator>
            
    )
}