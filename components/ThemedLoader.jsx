import {ActivityIndicator, useColorScheme} from 'react-native'
import {Colors} from "../constants/Colors";
import ThemedView from "./ThemedView";

const ThemedLoader = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light


    return (
        <ThemedView style={{flex: 1, justifyContent: "center", alignItems: "center"}} >
            <ActivityIndicator color={theme.iconColor} size="large"/>
        </ThemedView>
    )
}
export default ThemedLoader;