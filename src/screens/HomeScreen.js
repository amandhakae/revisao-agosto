import { View } from "react-native";
import { Paragraph, Surface } from "react-native-paper";
import styles from "../config/styles";
import { useEffect } from "react";

export default function HomeScreen() {

    useEffect(()=>{
        
    },[]);

  return (
    <Surface style={styles.container}>
      <View>
        <Paragraph>Bem vindx</Paragraph>
      </View>
    </Surface>
  );
}
