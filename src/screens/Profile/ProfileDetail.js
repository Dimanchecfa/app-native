import { Button, Input, Stack, Text } from "native-base";
import React from "react";
import { ImageBackground, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-paper";

const ProfileDetail = () => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageBackground
                source={{
                  uri: "https://picsum.photos/200",
                }}
                style={{
                  height: "100",
                  width: "100",
                }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    name="camera"
                    size={40}
                    color="#fff"
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderColor: "#fff",
                      opacity: 0.8,
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            John Doe
          </Text>
        </View>
        
        <View style={styles.action}>
        <Stack space={4} w="100%" alignItems="center">
        <Input
            w={{
              base: "100%",
              md: "50%",
            }}
            InputLeftElement={
              <Icon name="account" size={30} ml="2" color="muted.400" />
            }
            placeholder="Name"
            h={{
              base: "50px",
              md: "50px",
            }}
            
          />
          <Input
            w={{
              base: "100%",
              md: "50%",
            }}
            InputLeftElement={
              <Icon name="email" size={30} ml="2" color="muted.400" />
            }
            placeholder="Email"
            h={{
              base: "50px",
              md: "50px",
            }}
          />
          <Input
            w={{
              base: "100%",
              md: "50%",
            }}
           
            InputLeftElement={
              <Icon name="phone" size={30} ml="2" color="muted.400" />
            }
            placeholder="Telephone"
            h={{
              base: "50px",
              md: "50px",
            }}
          />
           <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>

        </Stack>
         
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
   
  },
  action: {
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
    
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
  },
});

export default ProfileDetail;
