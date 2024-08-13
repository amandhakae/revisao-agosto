import { View } from "react-native";
import { Paragraph, Surface } from "react-native-paper";
import { useEffect } from "react";
import { db } from "../config/firebase";
import styles from "../config/styles";
import { collection, getDocs } from "firebase/firestore";

export default function HomeScreen() {
  useEffect(() => {
    const colRef = collection(db, "usuarios");
    const querySnapshot = colRef;
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }, []);

  return (
    <Surface style={styles.container}>
      <View>
        <Paragraph>Bem vindx</Paragraph>
      </View>
    </Surface>
  );
}
