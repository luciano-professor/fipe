import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const AnoItem = ({ ano }) => {
  const navigation = useNavigation();

  const { ...parametros } = useRoute().params;

  return (
    <View style={tw`mx-2 py-6 border-t border-indigo-900`}>
      <TouchableOpacity
        style={tw`flex-row justify-between`}
        onPress={() =>
          navigation.navigate('Valor', {
            ano: ano.code,
            ...parametros,
          })
        }
      >
        <Text style={tw`text-indigo-200 text-xl`}>{ano.name}</Text>
        <Entypo name="chevron-right" size={24} style={tw`text-indigo-800`} />
      </TouchableOpacity>
    </View>
  );
};

export default AnoItem;
