import { View, useSafeArea, ScrollView } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
const Profile = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={{
            backgroundColor: '#FF6347',
            borderBottomColor: "#dddddd",
            borderBottomWidth: 1,
        }}>
        <View
          style={[
            styles.userInfoSection,
            {
              
            },
          ]}
        >
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image
              source={{ uri: "https://picsum.photos/200" }}
              size={80}
            />
            <View style={{ marginLeft: 20 }}>
              <Title
                style={[styles.title, { marginTop: 15, marginBottom: 15 }]}
              >
                John Doe
              </Title>
              <Caption style={styles.caption}>@j_doe</Caption>
            </View>
          </View>
        </View>

        <View
          style={[
            styles.userInfoSection,
            {
             
             
            },
          ]}
        >
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#FFFF" size={20} />
            <Text style={{ color: "#FFFF", marginLeft: 20 }}>
              {" "}
              Kolkata India{" "}
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone"  color="#FFFF" size={20} />
            <Text style={{ color :"#FFF", marginLeft: 20 }}>
              {" "}
              +91 1234567890{" "}
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#FFFF" size={20} />
            <Text style={{ color: "#FFFF", marginLeft: 20 }}>
              dimanchenamo@gmail.com
            </Text>
          </View>
        </View>
        </View>
        {/* <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox , {
                borderRightColor: '#dddddddd',
                borderRightWidth: 1,
            }]}>
               <Title> Divider</Title> 
               <Caption>@j_doe</Caption>
            </View>
            <View style={styles.infoBox}>
                <Title> Divider</Title>
                <Caption>@j_doe</Caption>
            </View>
        </View> */}
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color="#FF6347" size={20} />
              <Text style={{ color: "7777", marginLeft: 10 }}>
                {" "}
                Abonnement{" "}
              </Text>
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="account" color="#FF6347" size={20} />
              <Text style={{ color: "7777", marginLeft: 10 }}>
                {" "}
                Parametres{" "}
              </Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="logout" color="#FF6347" size={20} />
              <Text style={{ color: "7777", marginLeft: 10 }}>
                {" "}
                Se deconnecter{" "}
              </Text>
            </View>
          </TouchableRipple>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
