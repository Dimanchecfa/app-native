import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View , Text } from "native-base"
import Old from "./old";
import Today from "./today";



const Tab = createMaterialTopTabNavigator();


const Free = () => {
    return (
      
        <Tab.Navigator>
            <Tab.Screen name="Today" component={Today} />
            <Tab.Screen name="Old" component={Old} />
        </Tab.Navigator>

        
    )
}
export default Free;