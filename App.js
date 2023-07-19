import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import tw from 'twrnc';
import axios from 'axios';
import { SWRConfig } from 'swr';

//URL Base da API no axios
axios.defaults.baseURL = 'https://parallelum.com.br/fipe/api/v2';

//Configurar o SWR com o Axios
const fetcher = (url) => axios.get(url).then((res) => res.data);

import StackNavigator from './src/StackNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <SWRConfig value={{ fetcher: fetcher }}>
        <View style={tw`flex-1 bg-indigo-950`}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </View>
      </SWRConfig>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
