import { Text, View } from "react-native";
import { Avatar, Card, IconButton } from 'react-native-paper';

const Today = () => {
  return (
    <View style={{ 
      flex: 1,
      height: '100%',
      
      

      
    }}   >
      <Card 
      style={{
        flex: 1,
        heigh: 1
      }}
      >
        
        <Card.Content>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', align2Items: 'center' }}>
             
              <Text>
                <Text className="text-bold"  >John Doe</Text>
                <Text className="flex-1  text-sm items-center justify-center bg-white" >
                  {"\n"}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  
                </Text>
              </Text>
            </View>
            
          </View>
        </Card.Content>
      </Card>
    </View>

  );
};
export default Today;
