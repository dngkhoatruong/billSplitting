import { Formik } from 'formik';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GLOBAL_STYLES from '../../constants/globalStyles';
import { LINEAR_COLORS_BG, LINEAR_COLORS_BTN } from '../../constants/vars';
import { useStore } from '../../store';
import styles from './styles';

const Welcome = ({ navigation }) => {
   const [state, dispatch] = useStore();

   const onStart = (name: string, email: string) => {
      dispatch({
         type: 'SET_PROFILE',
         payload: { name, email },
      });

      navigation.navigate('Home');
   };

   return (
      <LinearGradient colors={LINEAR_COLORS_BG} style={styles.container}>
         <View style={styles.imgWrapper}>
            <Image style={styles.img} source={require('../../assets/images/logo2.png')} />
         </View>
         <View style={styles.infoWrapper}>
            <View style={styles.appNameWrapper}>
               <Text style={styles.appName}>SplittingByK</Text>
               <Text style={styles.description}>The easiest way to split bills with your family, friends or anyone.</Text>
            </View>
            <View style={GLOBAL_STYLES.flex2}>
               <Formik
                  initialValues={{
                     name: '',
                     email: '',
                  }}
                  onSubmit={values => onStart(values.name, values.email)}
               >
                  {({ handleChange, handleBlur, handleSubmit, values }) => (
                     <View style={styles.formWrapper}>
                        <TextInput
                           name="name"
                           placeholder='Your name'
                           style={styles.input}
                           onBlur={handleBlur('name')}
                           onChangeText={handleChange('name')}
                           value={values.name}
                        />
                        <TextInput
                           name="email"
                           placeholder='Your Email'
                           style={styles.input}
                           onBlur={handleBlur('email')}
                           onChangeText={handleChange('email')}
                           value={values.email}
                           keyboardType="email-address"
                        />

                        <TouchableOpacity
                           style={styles.btn}
                           onPress={handleSubmit}
                        >
                           <LinearGradient
                              colors={LINEAR_COLORS_BTN}
                              style={styles.linear}
                              start={{ x: 0.0, y: 0.75 }}
                              end={{ x: 1.0, y: 0.75 }}
                           >
                              <Text style={styles.textBtn}>Let's Start</Text>
                           </LinearGradient>
                        </TouchableOpacity>
                     </View>
                  )}
               </Formik>
            </View>
         </View>
      </LinearGradient>
   );
};

export default Welcome;