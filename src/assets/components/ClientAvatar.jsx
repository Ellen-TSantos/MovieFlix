
import React from "react";
import { Stack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const ClientAvatar = () => (
  <Stack fill spacing={1}>
    <Avatar icon={props => <Icon name="account" {...props} />}
     size={50}
     color="#745feb1f"
     tintColor="#fff" />
  </Stack>
);

export default ClientAvatar;