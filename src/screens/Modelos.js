import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import useSWR from 'swr';

import TituloPagina from '../components/TituloPagina';
import Loading from '../components/Loading';
import ModeloItem from '../components/ModeloItem';

const Modelos = ({ route }) => {
  const { tipo, marca } = route.params;

  const { data } = useSWR(`/${tipo}/brands/${marca}/models`);

  // const data = [];

  return (
    <SafeAreaView style={tw`flex-1`}>
      <TituloPagina>Modelos</TituloPagina>

      <FlatList
        data={data}
        renderItem={({ item }) => <ModeloItem modelo={item} />}
        key={(item) => item.code}
        ListEmptyComponent={<Loading />}
      />
    </SafeAreaView>
  );
};

export default Modelos;
