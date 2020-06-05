import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View styles={styles.body}>
        <Image source={require("./assets/icon.png")} />
      </View>
      <View style={styles.body}>
        <Text>hello world</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
