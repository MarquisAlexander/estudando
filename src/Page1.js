import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const Page1 = ({ navigation }) => (
  <View style={styles.container}>
    <Text>testando nova branch</Text>
    <View style={styles.botao}>
    <Button style={styles.botao}
      title="Ir para About"
      onPress={() => navigation.navigate('About') }
    />
    </View>
  </View>
);

Page1.navigationOptions = {
  title: 'Page1',
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    
    //alignItems: 'center'
  },
  text: {
    alignItems: "center"
  },
  heading: {
      marginTop: 40
    
  },
  botao: {
      flexDirection: 'row',
      marginTop: 541,
      
      
    }
    })

export default Page1;