import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import useSWR from 'swr';

import TituloPagina from '../components/TituloPagina';
import Loading from '../components/Loading';

const Valor = ({ route }) => {
  const { tipo, marca, modelo, ano } = route.params;

  const { data: valor, isLoading } = useSWR(
    `/${tipo}/brands/${marca}/models/${modelo}/years/${ano}`,
  );

  return (
    <SafeAreaView>
      <TituloPagina>Dados FIPE</TituloPagina>

      <ScrollView
        style={tw`bg-indigo-400 h-full rounded-t-[25px] mt-2 pt-4 px-4`}
      >
        {isLoading && <Loading />}

        <Text style={tw`text-2xl text-center text-indigo-950 font-bold`}>
          {valor?.price}
        </Text>

        {/* Marca */}
        <View style={tw`mb-2 border-b border-indigo-600 pb-4`}>
          <Text style={tw`text-xl text-indigo-900`}>Marca</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.brand}
          </Text>
        </View>

        {/* Modelo */}
        <View style={tw`mb-2 border-b border-indigo-600 pb-4`}>
          <Text style={tw`text-xl text-indigo-900`}>Modelo</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.model}
          </Text>
        </View>

        {/* Ano */}
        <View style={tw`mb-2 border-b border-indigo-600 pb-4`}>
          <Text style={tw`text-xl text-indigo-900`}>Ano</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.modelYear}
          </Text>
        </View>

        {/* Combustível */}
        <View style={tw`mb-2 border-b border-indigo-600 pb-4`}>
          <Text style={tw`text-xl text-indigo-900`}>Combustível</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.fuel}
          </Text>
        </View>

        {/* Código FIPE */}
        <View style={tw`mb-2 border-b border-indigo-600 pb-4`}>
          <Text style={tw`text-xl text-indigo-900`}>Código FIPE</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.codeFipe}
          </Text>
        </View>

        {/* Mês de referência */}
        <View style={tw`mb-2 border-b border-indigo-600 pb-4`}>
          <Text style={tw`text-xl text-indigo-900`}>Mês de referência</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.referenceMonth}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Valor;
