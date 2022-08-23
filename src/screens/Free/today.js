import { Divider, HStack, Stack, VStack, Wrap } from "native-base";
import { Text, View } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";

const Today = () => {
  return (
    <View className="w-full h-full">
      
        <Stack style={{ flexDirection: "row"  , flex:"wrap" , height: 120  ,padding:3, margin: 7, borderRadius: 10, }}>
          <HStack style={{  width: '75%' , height: '100%' , backgroundColor: 'gray' ,borderRadius: 10}}>
            <Avatar.Image size={40} source={{ uri: "https://picsum.photos/200" }} style={{ marginLeft : 10 , marginTop:20}}  />
            <VStack style={{ flexDirection: "column" , width: '100%' , height: '100%' , backgroundColor: 'gray' ,borderRadius: 10}}>
              <Text style={{ fontSize: 15 , marginLeft: 10, marginTop: 5 , fontWeight:'bold' }}>
                Premiere League
              </Text>
              <Text style={{ fontSize: 15 , marginLeft: 10 , marginTop: 7 }}>
               Liverpool
              </Text>
              <Text style={{ fontSize: 15 , marginLeft: 10 , marginTop: 5 }}>
                Manchester United
              </Text>
              <Divider style={{ marginLeft: 10 , marginTop: 10 }} />
              
            </VStack>
            
            
            </HStack>
          

          <HStack style={{ flexDirection: "row" , width: '25%' , height: '100%' , backgroundColor: 'blue'}}>
            <IconButton icon="message-text" size={30} />
   
          </HStack>
          

          
          
      </Stack>
        
        

      
    </View>
  );
};


export default Today;
