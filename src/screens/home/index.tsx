import React from 'react';
import { Text, View } from 'react-native';
import { useStore } from '../../store';

const Home = () => {
    const [state, dispatch] = useStore();
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Home screen: {state.userProfile.name}</Text>
        </View>
    );
};

export default Home;