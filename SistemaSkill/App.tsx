import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SistemaProvider from './context/SistemaSKill/SistemSkill';



export default function App() {
  return (
    <SistemaProvider>
    <NavigationContainer>
      <GestureHandlerRootView>
      <Routes/>
      </GestureHandlerRootView>
    </NavigationContainer>
    </SistemaProvider>

  );
}

