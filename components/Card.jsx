import * as React from "react";
import { Card, Text, Modal, Portal } from "react-native-paper";
import { StyleSheet, Pressable, Image } from "react-native";

const ImageCard = ({ title, description, url }) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    borderRadius: 10,
  };
  return (
    <Card style={styles.container} mode="outlined">
      <Card.Title titleStyle={styles.cardTitle} title={title} />
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Image
            source={{ uri: url }}
            resizeMode="center"
            style={{ height: "80%", margin: -80 }}
          />
        </Modal>
      </Portal>
      <Pressable onPress={showModal}>
        <Card.Cover style={styles.image} source={{ uri: url }} />
      </Pressable>
      <Card.Content>
        <Text variant="bodyMedium">{description}</Text>
      </Card.Content>
    </Card>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#fff",
  },
  image: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
