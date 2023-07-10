import React, { useState } from "react";
import stylesModal from "../styles/stylesModal";
import { Modal, Text, Pressable, View } from "react-native";
import { SimpleLineIcons, MaterialIcons, AntDesign } from "@expo/vector-icons";

const ModalLogoout = ({ screenName }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onModal = () => {
    navigation.navigate("Home", {});
  };

  return (
    <View style={stylesModal.containerModal}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={stylesModal.containerButtons}>
          <Pressable
            style={stylesModal.buttonLogout}
            title={`${screenName}`}
            onPress={() => onModal(screenName)}
          >
            <SimpleLineIcons name="logout" size={23} color="#fff" />
            <Text style={stylesModal.textLogoout}>Logo out</Text>
          </Pressable>

          <Pressable
            style={stylesModal.buttonClose}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <AntDesign name="closesquareo" size={24} color="#fff" />
            <Text style={stylesModal.textClose}>Fechar</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable
        style={stylesModal.IconButtonMenu}
        onPress={() => setModalVisible(true)}
      >
        <MaterialIcons name="menu-open" size={48} color="#fff" />
      </Pressable>
    </View>
  );
};
export default ModalLogoout;

