import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import * as R from "ramda";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Fab,
  Badge,
  Body,
  Right,
} from "native-base";
import { VStack, Box, Divider } from "native-base";
import {
  Entypo,
  MaterialCommunityIcons,
  Feather,
  createIconSetFromFontello,
} from "@expo/vector-icons";
import numeral from "numeral";
import { LinearGradient } from "expo-linear-gradient";
import Spinner from "react-native-loading-spinner-overlay";

import logo from "../../../resources/images/icono.png";
import { REQUEST_STATUS } from "../../RequestStatus";
import colors from "../../../resources/styles/colors";
import API_BASE_URL from "../../../resources/data/api";

const api_url = API_BASE_URL + "/contacts";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      contacts: [
        {
          id: 1,
          name: "Juan Pablo",
          surname: "Perez",
          photo:
            "https://miro.medium.com/max/3840/1*_laiUDqvJrVn5Skp8bpoSg.jpeg",
          phones: [
            {
              id: 1,
              label: "Home",
              country: 57,
              number: "198742222",
            },
            {
              id: 2,
              label: "work",
              country: 57,
              number: "198745632",
            },
          ],
          addresses: [
            {
              id: 1,
              label: "Home",
              address: "Street redux 864 ",
            },
          ],
          birthday: "09/10/1990",
        },
        {
          id: 2,
          name: "Carolina",
          surname: "Weeber",
          photo:
            "https://www.thatbangkoklife.com/wp-content/uploads/2020/03/koh-nang-yuan.jpg",
          phones: [
            {
              id: 3,
              label: "Home",
              country: 57,
              number: "198967458",
            },
          ],
          addresses: [
            {
              id: 2,
              label: "Home",
              address: "Street base 64 ",
            },
            {
              id: 3,
              label: "Work",
              address: "Street Lombok 864 ",
            },
          ],
          birthday: "09/10/1990",
        },
      ],
    };
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts = () => {
    this.setState({ loading: true });

    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          this.setState({ contacts: data.data, loading: false });
        }
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <Container style={{ backgroundColor: colors.bgDarkBlue }}>
        <Spinner
          visible={this.state.loading}
          textContent={"Loading..."}
          textStyle={styles.spinnerTextStyle}
        />
        <View
          style={{ height: 50, backgroundColor: "transparent", marginTop: 30 }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "flex-end",
                }}
              >
                <Image
                  style={styles.tinyLogo}
                  source={require("../../../resources/images/icono.png")}
                />
                <View
                  style={{
                    flex: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 0,
                  }}
                >
                  <Text
                    allowFontScaling={false}
                    style={{
                      color: colors.bdWhite,
                      backgroundColor: "transparent",
                      fontSize: 28,
                      width: 150,
                      textAlign: "center",
                    }}
                  >
                    WeConnect
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Container padder style={styles.content}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 5,
              marginBottom: 5,
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <Text allowFontScaling={false} style={styles.title}>
              My contacts
            </Text>
          </View>

          <View style={{ flexDirection: "column" }}>
            {this.state.contacts.map((contact) => (
              <TouchableOpacity
                style={{ borderRadius: 15 }}
                onPress={() => {
                  /* TODO: create edit contact */
                  this.props.navigation.navigate("Contact", {
                    contactId: contact.id,
                  });
                }}
              >
                <Card
                  style={{
                    borderWidth: 5,
                    backgroundColor: colors.bgWhite,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 15,
                  }}
                >
                  <CardItem cardBody>
                    <Image
                      source={{ uri: contact.photo }}
                      style={styles.image}
                    />
                  </CardItem>
                  <CardItem>
                    <Body
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <MaterialCommunityIcons
                        name="face"
                        size={20}
                        color={colors.bgDarkBlue}
                      />
                      <Text allowFontScaling={false}>
                        {contact.name} {contact.surname}
                      </Text>
                    </Body>
                    <Right
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Text allowFontScaling={false}>{contact.birthday}</Text>
                      <Entypo name="cake" size={20} color={colors.bgMainRed} />
                    </Right>
                  </CardItem>
                  <CardItem
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      marginBottom: 14,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Text
                        allowFontScaling={false}
                        style={styles.card_subtitles}
                      >
                        Phones:
                      </Text>
                      <Badge info>
                        <Text>{contact.phones.length}</Text>
                      </Badge>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Text
                        allowFontScaling={false}
                        style={styles.card_subtitles}
                      >
                        Addresses:
                      </Text>
                      <Badge warning>
                        <Text>{contact.addresses.length}</Text>
                      </Badge>
                    </View>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        </Container>
        <Fab
          style={{
            backgroundColor: colors.bgMagenta,
            borderWidth: 3,
            borderColor: colors.bdWhite,
            width: 70,
            height: 70,
            borderRadius: 50,
          }}
          position="bottomLeft"
          containerStyle={{}}
          onPress={() => this.props.navigation.navigate("Profile")}
        >
          <Entypo style={{ color: colors.bdWhite }} name="user" />
        </Fab>
      </Container>
    );
  }
}

var { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  tinyLogo: {
    marginLeft: 40,
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 25,
    paddingTop: 3,
    color: colors.bgDarkBlue,
    fontWeight: "bold",
    width: "auto",
    textAlign: "center",
  },
  icon: {
    fontSize: 15,
    color: colors.bgMagenta,
  },
  image: {
    height: 70,
    width: null,
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  text: {
    fontSize: 12,
  },
  card_subtitles: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    marginTop: 20,
    paddingTop: 10,
    backgroundColor: colors.bdWhite,
  },
  ribbonLeft: {
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderLeftColor: "transparent",
    borderTopWidth: 15,
    borderTopColor: colors.bgDarkBlue,
    borderBottomWidth: 15,
    borderBottomColor: colors.bgDarkBlue,
  },
  ribbonRight: {
    width: 0,
    height: 0,
    borderRightWidth: 20,
    borderRightColor: "transparent",
    borderTopWidth: 15,
    borderTopColor: colors.bgDarkBlue,
    borderBottomWidth: 15,
    borderBottomColor: colors.bgDarkBlue,
  },
  shadow: {
    flexGrow: 1,
    flexBasis: 0,
    shadowColor: colors.bgDarkBlue,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 2,
  },
  spinnerTextStyle: {
    color: colors.bgDarkBlue,
  },
});
