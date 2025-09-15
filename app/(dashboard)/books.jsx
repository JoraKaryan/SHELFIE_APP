import {StyleSheet} from "react-native";

import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

const Books = () => {
    return (
        <ThemedView style={styles.container}>

            <ThemedText title={true} style={styles.heading}>
                Your Reading List
            </ThemedText>
            <Spacer/>

        </ThemedView>
    )
}

export default Books;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})