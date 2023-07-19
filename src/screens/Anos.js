import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useSWR from 'swr';
import tw from 'twrnc';

import TituloPagina from '../components/TituloPagina';
import Loading from '../components/Loading';
import AnoItem from '../components/AnoItem';

const Anos = ({ route }) => {
  const { tipo, marca, modelo } = route.params;

  const { data } = useSWR(`/${tipo}/brands/${marca}/models/${modelo}/years`);

  return (
    <SafeAreaView>
      <TituloPagina>Anos</TituloPagina>

      <FlatList
        data={data}
        renderItem={({ item }) => <AnoItem ano={item} />}
        keyExtractor={(item) => item.code}
        ListEmptyComponent={<Loading />}
      />
    </SafeAreaView>
  );
};

export default Anos;
