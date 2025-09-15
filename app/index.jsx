import {Text, StyleSheet, Image} from 'react-native'
import {Link} from "expo-router"

//Themed components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo style={styles.img}/>
            <Spacer height={20} />

            <ThemedText style={styles.title} title={true}> The Number 1</ThemedText>

            <Spacer height={10}/>
            <ThemedText> Reading list APP</ThemedText>
            <Spacer height={10}/>

            <Link href="/login" style={styles.link}>
                <ThemedText> Login Page </ThemedText>
            </Link>
            <Link href="/register" style={styles.link}>
                <ThemedText> Register Page </ThemedText>
            </Link>
            <Link href="/profile" style={styles.link}>
                <ThemedText> Profile Page </ThemedText>
            </Link>
        </ThemedView>
    )
}
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    img: {
        marginVertical: 20,
        width: 150,
        height: 100,
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px 10px rgba(0, 0, 0, 1)',
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    }
})

