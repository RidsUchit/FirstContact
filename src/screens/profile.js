import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react'

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={{
                    uri: 'https://via.placeholder.com/150',
                }}
            />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>johndoe@example.com</Text>
            <View style={styles.statsContainer}>
                <View style={styles.stat}>
                    <Text style={styles.statTitle}>Followers</Text>
                    <Text style={styles.statValue}>150</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statTitle}>Following</Text>
                    <Text style={styles.statValue}>200</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statTitle}>Posts</Text>
                    <Text style={styles.statValue}>25</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    email: {
        fontSize: 18,
        marginBottom: 10,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginTop: 30,
    },
    stat: {
        alignItems: 'center',
    },
    statTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    statValue: {
        fontSize: 16,
    },
});
export default ProfileScreen;