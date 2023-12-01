import { StyleSheet, ScrollView } from "react-native";
import { PaperProvider } from "react-native-paper";
import ImageCard from "./components/Card";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";

const getImages = async () => {
  const response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=bnC6A1Mr4VpOWsczKke3C9t8t6ckI4W51ne2qCXf&start_date=2023-11-25&end_date=2023-11-30"
  );
  const data = await response.json();
  return data;
};

export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages().then((data) => {
      setImages(data);
    });
  }, []);

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            {images.map((image) => (
              <ImageCard
                key={image.date}
                title={image.title}
                description={image.explanation}
                url={image.url}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223F64",
    alignItems: "center",
    justifyContent: "center",
  },
});
