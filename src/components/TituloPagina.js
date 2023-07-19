import { View, Text } from 'react-native';
import tw from 'twrnc';

const TituloPagina = ({ children }) => {
  return (
    <View>
      <Text style={tw`text-2xl text-indigo-100 font-bold text-center h-14`}>
        {children}
      </Text>
    </View>
  );
};

export default TituloPagina;
