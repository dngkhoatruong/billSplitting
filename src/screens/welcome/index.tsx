import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import GLOBAL_STYLES from '../../constants/globalStyles';
import { getWeather } from '../../services/api/welcomeApi';
import { formatDate, formatTime } from '../../utils/date';
import { formatCelsius } from '../../utils/degree';
import styles from './styles';

const Welcome = () => {
   const [loading, setLoading] = useState<boolean>(true);
   const [weather, setWeather] = useState<any>();
   const [datetime, setDateTime] = useState<string>();


   const onGetWeather = useCallback(async () => {
      setLoading(true);
      try {
         const data = await getWeather('353981');
         setWeather(data[0]);
         setLoading(false);
      } catch (error) {
         console.log(error.message);
         setLoading(false);
      }
   }, []);

   useEffect(() => {
      onGetWeather();

      // reset getWeather every hour
      const resetWeather = setInterval(() => {
         onGetWeather();
      }, 60 * 60 * 1000);

      return () => clearInterval(resetWeather);
   }, [onGetWeather]);

   useEffect(() => {
      const setTimmer = setInterval(() => {
         setDateTime(new Date().toLocaleString());
      }, 1000);

      return () => clearInterval(setTimmer);
   }, []);

   const renderDegrees = useMemo(() => {
      if (!weather) return;

      const weatherText = ['Sunny', 'T-Storms', 'Cloudy', 'Showers'];
      const describle = weather.IconPhrase.split();
      const iconText = weatherText.filter((text: string) => describle.includes(text))[0];
      const IMAGES = {
         sunny: require('../../assets/icons/sunny.png'),
         cloudy: require('../../assets/icons/cloudy.png'),
         showers: require('../../assets/icons/showers.png'),
         thunderstorms: require('../../assets/icons/t-storms.png'),
         weather: require('../../assets/icons/weather.png'),
      }

      return (
         <>
            <Image source={IMAGES[iconText ? iconText.toLowerCase() : 'weather']} style={styles.weatherIcon} />
            <Text style={styles.textDegrees}>{weather && formatCelsius(weather.Temperature.Value)}</Text>
         </>
      );
   }, [weather]);

   const renderLoading = () => {
      return loading ? <ActivityIndicator color="black" /> : null;
   };

   return (
      <View style={styles.container}>
         {renderLoading()}
         <View style={styles.bgWrapper}>
            <Image
               source={require('../../assets/images/welcomeBG.png')}
               style={styles.bg}
            />
         </View>
         <SafeAreaView style={styles.introContainer}>
            <View style={GLOBAL_STYLES.flex1}>
               <View style={styles.timeDegreesWrapper}>
                  <View style={GLOBAL_STYLES.flex1}>
                     <Text style={styles.clock}>{weather && formatTime(datetime)}</Text>
                  </View>
                  <View style={styles.degreeWrapper}>
                     {renderDegrees}
                  </View>
               </View>
               <Text style={GLOBAL_STYLES.subText}>{weather && formatDate(weather.DateTime)}</Text>
            </View>

            <View style={GLOBAL_STYLES.flex1}>
               <Image source={require('../../assets/icons/scissors.png')} style={GLOBAL_STYLES.logoImg} />
               <View style={styles.introWrapper}>
                  <Text style={GLOBAL_STYLES.appName}>kSplit</Text>
                  <Text style={[GLOBAL_STYLES.subText, { marginVertical: 20 }]}>Easy way to slit bills with your friends, colleague or anyone.</Text>
                  <Text style={[GLOBAL_STYLES.subText]}>Join For Free.</Text>
               </View>
            </View>

            <View style={styles.btnWrapper}>
               <TouchableOpacity style={styles.letGoBtn}>
                  <Text style={styles.textLetgo}>Let's Split It</Text>
                  <Image style={styles.arrowImg} source={require('../../assets/icons/arrowRight.png')} />
               </TouchableOpacity>
               <TouchableOpacity style={styles.createBtn}>
                  <Text style={styles.textCreateAccount}>Create an account.</Text>
               </TouchableOpacity>
            </View>
         </SafeAreaView>
      </View>
   );
};

export default Welcome;