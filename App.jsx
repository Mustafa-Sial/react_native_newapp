import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from "./src/screens/HomeScreen"
import { SafeAreaView } from 'react-native-safe-area-context';


const App = () => {
  return (
    <SafeAreaView>
       <HomeScreen/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})