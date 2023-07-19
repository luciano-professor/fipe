import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import tw from 'twrnc';

const ModeloItem = ({ modelo }) => {
  const navigation = useNavigation();

  const { ...parametros } = useRoute().params;

  return (
    <View style={tw`mx-2 py-6 border-t border-indigo-900`}>
      <TouchableOpacity
        style={tw`flex-row justify-between`}
        onPress={() =>
          navigation.navigate('Anos', {
            modelo: modelo.code,
            ...parametros,
          })
        }
      >
        <Text style={tw`text-indigo-200 text-xl`}>{modelo.name}</Text>
        <Entypo name="chevron-right" size={24} style={tw`text-indigo-800`} />
      </TouchableOpacity>
    </View>
  );
};

export default ModeloItem;
