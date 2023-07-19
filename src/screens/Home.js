import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from 'twrnc';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center`}>
      <View style={tw`gap-4 items-center w-full`}>
        <Text style={tw`text-3xl text-indigo-100 font-bold`}>
          App Tabela FIPE
        </Text>

        {/* Botões */}
        <View style={tw`flex-row w-full justify-around`}>
          {/* Carros */}
          <TouchableOpacity
            style={tw`p-2 bg-indigo-300 rounded-lg items-center`}
            onPress={() =>
              navigation.navigate('Marcas', {
                tipo: 'cars',
              })
            }
          >
            <FontAwesome5 name="car" size={24} />
            <Text style={tw`text-xl font-bold`}>Carros</Text>
          </TouchableOpacity>

          {/* Motos */}
          <TouchableOpacity
            style={tw`p-2 bg-indigo-300 rounded-lg items-center`}
            onPress={() =>
              navigation.navigate('Marcas', {
                tipo: 'motorcycles',
              })
            }
          >
            <FontAwesome5 name="motorcycle" size={24} />
            <Text style={tw`text-xl font-bold`}>Motos</Text>
          </TouchableOpacity>

          {/* Caminhões */}
          <TouchableOpacity
            style={tw`p-2 bg-indigo-300 rounded-lg items-center`}
            onPress={() =>
              navigation.navigate('Marcas', {
                tipo: 'trucks',
              })
            }
          >
            <FontAwesome5 name="truck" size={24} />
            <Text style={tw`text-xl font-bold`}>Caminhões</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
