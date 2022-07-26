import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { getWeather } from '../../services/api/welcomeApi';
import { useStore } from '../../store/hooks';

const Welcome = () => {
   const [state, dispatch] = useStore();
   const [weather, setWeather] = useState({});

   useEffect(() => {
      (async () => {
         try {
            const data = await getWeather('353981');
            setWeather(data);
         } catch (error) {
            console.log(error.message);
         }
      })();
   }, []);

   return (
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white' }}>
         <View style={{ flex: 2 }}>
            <Image
               source={require('../../assets/images/welcomeBG.png')}
               style={{
                  width: 200,
                  height: '100%'
               }}
            />
         </View>
         <SafeAreaView
            style={{ flex: 3 }}
         >
            <Text>Welcome</Text>
            <Text>{JSON.stringify(weather)}</Text>
         </SafeAreaView>
      </View>
   );
};

export default Welcome;