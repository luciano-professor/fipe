import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import useSWR from 'swr';

import TituloPagina from '../components/TituloPagina';
import Loading from '../components/Loading';
import MarcaItem from '../components/MarcaItem';

const Marcas = ({ route }) => {
  const { tipo } = route.params;

  //indo na api buscar os dados com o swr
  const { data } = useSWR(`/${tipo}/brands`);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <TituloPagina>Marcas</TituloPagina>

      {/* Lista */}
      <FlatList
        data={data}
        renderItem={({ item }) => <MarcaItem marca={item} />}
        keyExtractor={(item) => item.code}
        ListEmptyComponent={<Loading />}
      />
    </SafeAreaView>
  );
};

export default Marcas;
