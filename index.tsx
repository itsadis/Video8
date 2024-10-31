import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';

const App = () => {
  return (
    <View style={{ padding: 20 }}>
      <View style={{ width: 2000, height: 80, backgroundColor: '#0abde3' }}></View>
      <Text>Adisty Nurharumandari</Text>
      <Text>Pati, Jawa Tengah</Text>
      <Hobby />
      <Text>*****</Text>
      <Photo />
      <TextInput style={{ borderWidth: 1, marginTop: 10, padding: 5 }} placeholder="Masukkan teks di sini" />
    </View>
  );
};

const Hobby = () => {
    return <Text>Mendengarkan musik, memasak</Text>;
};

const Photo = () => {
  return (
    <Image 
      source={{ uri: 'https://mitrapost.com/wp-content/uploads/2023/08/kota-pati.jpg' }}
      style={{ width: 600, height: 200, marginTop: 10 }} 
    /> 
  );
};

export default App;
