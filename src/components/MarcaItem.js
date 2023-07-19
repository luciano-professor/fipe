import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const MarcaItem = ({ marca }) => {
  const navigation = useNavigation();

  const { ...parametros } = useRoute().params;

  return (
    <View style={tw`mx-2 py-6 border-t border-indigo-900`}>
      <TouchableOpacity
        style={tw`flex-row justify-between`}
        onPress={() =>
          navigation.navigate('Modelos', { marca: marca.code, ...parametros })
        }
      >
        <Text style={tw`text-indigo-200 text-xl`}>{marca.name}</Text>
        <Entypo name="chevron-right" size={24} style={tw`text-indigo-800`} />
      </TouchableOpacity>
    </View>
  );
};

export default MarcaItem;
