import {View, Text, StyleSheet, useColorScheme, StatusBar} from 'react-native'
import {Slot, Stack} from "expo-router";
import {Colors} from "../constants/Colors";

const RootLayout = () => {
    const colorScheme = useColorScheme();   {/* սարքի theme-ը (light կամ dark) */}
    const theme = Colors[colorScheme] ?? Colors.light;  {/* եթե չի գտնում սարքի theme-ը՝ light theme-ն է օգտագործում */}
    return (
        // navigator (Stack, Slot, Tabs, Drawer ...)
        <>
            {/* վերևի status bar-ը (battery, clock, wifi), ավտոմատ գույն */}
            <StatusBar value="auto"/>

            {/* Header */}
            <Stack screenOptions={{
                headerStyle: {backgroundColor: theme.navBackground},    /* header-ի ֆոնը (կախված theme-ից) */
                headerTintColor: theme.title                            /* header-ի տեքստի գույնը */
            }}
            >
                <Stack.Screen name="(auth)" options={{headerShown: false}} />
                <Stack.Screen name="index" options={{title: 'Home'}}/>  {/* Header-ի title-ը */}
            </Stack>
        </>
    )
}
export default RootLayout;