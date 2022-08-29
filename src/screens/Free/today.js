import { Divider, HStack, Stack, VStack, Wrap } from "native-base";
import { Text, View } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";

const Today = () => {
  return (
    <View className="w-full h-full">
      <Stack
        style={{
          flexDirection: "row",
          flex: "wrap",
          height: 120,
          padding: 3,
          margin: 7,
          borderRadius: 10,
        }}
      >
        <HStack
          style={{
            width: "65%",
            height: "100%",
            backgroundColor: "gray",
            borderRadius: 10,
          }}
        >
          <Avatar.Image
            size={40}
            source={{ uri: "https://picsum.photos/200" }}
            style={{ marginLeft: 10, marginTop: 20 }}
          />
          <VStack
            style={{
              flexDirection: "column",
              width: "100%",
              height: "100%",
              backgroundColor: "gray",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                marginLeft: 10,
                marginTop: 5,
                fontWeight: "bold",
              }}
            >
              Premiere League
            </Text>
            <Text style={{ fontSize: 15, marginLeft: 10, marginTop: 7 }}>
              Liverpool
            </Text>
            <Text style={{ fontSize: 15, marginLeft: 10, marginTop: 5 }}>
              Manchester United
            </Text>
            <Divider style={{ marginLeft: 10, marginTop: 5 }} />
            <HStack style={{ height: "30%", marginLeft: 10, marginTop: 5 }}>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 5,
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Equipe 1 Gagne
              </Text>
            </HStack>
          </VStack>
        </HStack>

        <Avatar.Text
          size={35}
          style={{ marginLeft: 5, marginTop: 20 }}
          color="white"
          label="1.8"
        />

        <HStack
          style={{
            flexDirection: "column",
            width: "25%",
            height: "100%",
            backgroundColor: "blue",
            borderTopRightRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              marginLeft: 10,
              marginTop: 5,
              fontWeight: "bold",
              color: "white",
            }}
          >
            10/08/2020
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginTop: 5,
              color: "white",
              textAlign: "center",
            }}
          >
            10:00
          </Text>
          <Divider style={{ marginTop: 5, color: "white" }} />
          <Text style={{ fontSize: 15, color: "white", textAlign: "center" }}>
            ?/?
          </Text>
          <Divider style={{ marginTop: 6, color: "white" }} />
          <Text
            style={{
              fontSize: 15,
              marginTop: 5,
              color: "white",
              textAlign: "center",
            }}
          >
            En attente
          </Text>
        </HStack>
      </Stack>
    </View>
  );
};

export default Today;
