import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
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
  Left,
  Body,
  Right,
} from "native-base";
import { Entypo, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Spinner from "react-native-loading-spinner-overlay";

import { REQUEST_STATUS } from "../../../RequestStatus";
import colors from "../../../../resources/styles/colors";
import API_BASE_URL from "../../../../resources/data/api";

const api_url = API_BASE_URL + "/contacts";
const api_url_addr = API_BASE_URL + "/addresses";
const api_url_pho = API_BASE_URL + "/phones";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      contactId: props.navigation.state.params.contactId,
      contact: { phones: [], addresses: [] },
      newAddress: {
        id: null,
        label: null,
        address: null,
        contactId: { id: props.navigation.state.params.contactId },
      },
      newPhone: {
        id: null,
        label: null,
        country: null,
        number: null,
        contactId: { id: props.navigation.state.params.contactId },
      },
      addingAddress: false,
      addingPhone: false,
      updatingAddress: null,
      updatingPhone: null,
    };
  }

  componentDidMount() {
    this.getContact();
  }

  getContact = () => {
    this.setState({ loading: true });

    fetch(api_url + "/" + this.state.contactId)
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          this.setState({ contact: data.data[0], loading: false });
        }
      })
      .catch((err) => console.error(err));
  };

  /* POST */
  createAddress = (data) => {
    fetch(api_url_addr, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          this.getContact();
        }
      })
      .catch((err) => console.error(err));
  };

  createPhone = (data) => {
    fetch(api_url_pho, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          this.getContact();
        }
      })
      .catch((err) => console.error(err));
  };

  /* PUT */
  updateAddress = (data) => {
    fetch(api_url_addr, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          this.getContact();
        }
      })
      .catch((err) => console.error(err));
  };

  updatePhone = (data) => {
    fetch(api_url_pho, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          this.getContact();
        }
      })
      .catch((err) => console.error(err));
  };

  /* DELETE */
  deleteAddress = (addressId) => {
    fetch(api_url_addr + "/" + addressId, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          this.getContact();
        }
      })
      .catch((err) => console.error(err));
  };

  deletePhone = (phoneId) => {
    fetch(api_url_pho + "/" + phoneId, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          this.getContact();
        }
      })
      .catch((err) => console.error(err));
  };

  /* CLEAN NEW OBJECTS */
  cleanAddress = () => {
    newAddress = {
      id: this.state.newAddress.id,
      label: null,
      address: null,
      contactId: { id: this.state.newAddress.contactId.id },
    };
    this.setState({ newAddress: newAddress });
  };

  cleanPhone = () => {
    newPhone = {
      id: this.state.newPhone.id,
      label: null,
      country: null,
      number: null,
      contactId: { id: this.state.newPhone.contactId.id },
    };
    this.setState({ newPhone: newPhone });
  };

  /* FORM FOR CREATE AND UPDATE */
  formAddress = () => {
    if (this.state.addingAddress) {
      return (
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 14, color: colors.bgLightBlue }}>
            New Address
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1, paddingEnd: 10 }}>
              <TextInput
                style={styles.input}
                value={this.state.newAddress.label}
                maxLength={10}
                onChangeText={(text) => {
                  newAddress = {
                    id: this.state.newAddress.id,
                    label: text,
                    address: this.state.newAddress.address,
                    contactId: { id: this.state.newAddress.contactId.id },
                  };
                  this.setState({ newAddress: newAddress });
                }}
                placeholder="Label (Home, Work, etc.)"
              />
              <TextInput
                style={styles.input}
                value={this.state.newAddress.address}
                onChangeText={(text) => {
                  newAddress = {
                    id: this.state.newAddress.id,
                    label: this.state.newAddress.label,
                    address: text,
                    contactId: { id: this.state.newAddress.contactId.id },
                  };
                  this.setState({ newAddress: newAddress });
                }}
                placeholder="Address"
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => {
                  this.createAddress(this.state.newAddress);
                  this.cleanAddress();
                  this.setState({ addingAddress: false });
                }}
              >
                <MaterialCommunityIcons
                  name="check"
                  size={22}
                  color={colors.bdGreen}
                  style={styles.actionIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ addingAddress: false });
                  this.cleanAddress();
                }}
              >
                <MaterialCommunityIcons
                  name="close"
                  size={22}
                  color={colors.txtMainRed}
                  style={styles.actionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            this.setState({ addingAddress: true });
          }}
        >
          <MaterialCommunityIcons
            name="plus"
            size={22}
            color={colors.bgDarkBlue}
          />
          <Text style={{ color: colors.bgDarkBlue }}>Add</Text>
        </TouchableOpacity>
      );
    }
  };

  formPhone = () => {
    if (this.state.addingPhone) {
      return (
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 14, color: colors.bgLightBlue }}>
            New Phone Number
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1, paddingEnd: 10 }}>
              <TextInput
                style={styles.input}
                value={this.state.newPhone.label}
                maxLength={10}
                onChangeText={(text) => {
                  newPhone = {
                    id: this.state.newPhone.id,
                    label: text,
                    country: this.state.newPhone.country,
                    number: this.state.newPhone.number,
                    contactId: { id: this.state.newPhone.contactId.id },
                  };
                  this.setState({ newPhone: newPhone });
                }}
                placeholder="Label (Home, Work, etc.)"
              />
              <View>
                <TextInput
                  style={styles.input}
                  value={this.state.newPhone.address}
                  maxLength={2}
                  onChangeText={(text) => {
                    newPhone = {
                      id: this.state.newPhone.id,
                      label: this.state.newPhone.label,
                      country: text,
                      number: this.state.newPhone.number,
                      contactId: { id: this.state.newPhone.contactId.id },
                    };
                    this.setState({ newPhone: newPhone });
                  }}
                  placeholder="code"
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input}
                  value={this.state.newPhone.number}
                  maxLength={15}
                  onChangeText={(text) => {
                    newPhone = {
                      id: this.state.newPhone.id,
                      label: this.state.newPhone.label,
                      country: this.state.newPhone.country,
                      number: text,
                      contactId: { id: this.state.newPhone.contactId.id },
                    };
                    this.setState({ newPhone: newPhone });
                  }}
                  placeholder="Phone number"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => {
                  this.createPhone(this.state.newPhone);
                  this.cleanPhone();
                  this.setState({ addingPhone: false });
                }}
              >
                <MaterialCommunityIcons
                  name="check"
                  size={22}
                  color={colors.bdGreen}
                  style={styles.actionIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ addingPhone: false });
                  this.cleanPhone();
                }}
              >
                <MaterialCommunityIcons
                  name="close"
                  size={22}
                  color={colors.txtMainRed}
                  style={styles.actionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            this.setState({ addingPhone: true });
          }}
        >
          <MaterialCommunityIcons
            name="plus"
            size={22}
            color={colors.bgDarkBlue}
          />
          <Text style={{ color: colors.bgDarkBlue }}>Add</Text>
        </TouchableOpacity>
      );
    }
  };

  render() {
    return (
      <Container style={{ backgroundColor: colors.bgWhite }}>
        <Spinner
          visible={this.state.loading}
          textContent={"Loading..."}
          textStyle={styles.spinnerTextStyle}
        />
        <ScrollView style={styles.content}>
          <View style={{ height: 80 }}>
            <Image
              source={{ uri: this.state.contact.photo }}
              style={styles.image}
            />
          </View>
          <View style={styles.contact_name}>
            <MaterialCommunityIcons
              name="account"
              size={40}
              color={colors.bgDarkBlue}
            />
            <Text style={styles.title}>
              {this.state.contact.name} {this.state.contact.surname}
            </Text>
          </View>
          <View style={styles.birthday}>
            <Entypo name="cake" size={20} color={colors.bgMainRed} />
            <Text style={{ marginHorizontal: 10, fontSize: 18 }}>
              {this.state.contact.birthday}
            </Text>
          </View>
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <MaterialCommunityIcons
                name="phone"
                size={22}
                color={colors.bgDarkBlue}
              />
              <Text style={styles.subtitle}>Phones</Text>
            </View>
            <View>
              {this.state.contact.phones.map((phone) => {
                return (
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: "#999",
                    }}
                  >
                    <Text style={{ color: "#999" }}>{phone.label}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View style={{ flex: 1, flexDirection: "row" }}>
                        <Text style={{ fontSize: 18, width: "14%" }}>
                          +{phone.country}
                        </Text>
                        <Text style={{ fontSize: 18 }}>{phone.number}</Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({ updatingPhone: phone.id });
                          }}
                        >
                          <MaterialCommunityIcons
                            name="pencil"
                            size={22}
                            color={colors.bgLightBlue}
                            style={styles.actionIcon}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            this.deletePhone(phone.id);
                          }}
                        >
                          <MaterialCommunityIcons
                            name="delete-outline"
                            size={22}
                            color={colors.txtMainRed}
                            style={styles.actionIcon}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              })}
              {this.formPhone()}
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <MaterialCommunityIcons
                name="map-marker"
                size={22}
                color={colors.bgDarkBlue}
              />
              <Text style={styles.subtitle}>Addresses</Text>
            </View>
            <View>
              {this.state.contact.addresses.map((address) => (
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "#999",
                  }}
                >
                  <Text style={{ color: "#999" }}>{address.label}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <Text style={{ fontSize: 18 }}>{address.address}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <TouchableOpacity>
                        <MaterialCommunityIcons
                          name="pencil"
                          size={22}
                          color={colors.bgLightBlue}
                          style={styles.actionIcon}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          this.deleteAddress(address.id);
                        }}
                      >
                        <MaterialCommunityIcons
                          name="delete-outline"
                          size={22}
                          color={colors.txtMainRed}
                          style={styles.actionIcon}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
              {this.formAddress()}
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

var { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.bdWhite,
  },
  image: {
    height: 70,
    width: null,
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  contact_name: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderColor: "#eee",
  },
  birthday: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomWidth: 2,
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderColor: "#eee",
  },
  title: {
    fontSize: 25,
    paddingTop: 3,
    color: colors.bgDarkBlue,
    fontWeight: "bold",
    width: "auto",
    textAlign: "center",
  },
  section: {
    marginTop: 15,
  },
  sectionTitle: {
    paddingVertical: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subtitle: {
    marginHorizontal: 5,
    fontSize: 20,
    color: colors.bgDarkBlue,
    fontWeight: "bold",
  },
  actionIcon: {
    marginHorizontal: 3,
    padding: 8,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#CCC",
  },
  addButton: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "#f6f6f6",
    borderRadius: 15,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  spinnerTextStyle: {
    color: colors.bgDarkBlue,
  },
});
