import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GLOBAL_STYLES from '../../constants/globalStyles';
import { LINEAR_COLORS_CARD } from '../../constants/vars';
import { userData } from '../../models/data';
import { useStore } from '../../store';
import styles from './styles';

const Home = () => {
   const [state, dispatch] = useStore();
   return (
      <View style={styles.container}>
         <SafeAreaView style={GLOBAL_STYLES.flex1}>

            <View style={styles.header}>
               <TouchableOpacity>
                  <Image source={require('../../assets/icons/menu.png')} style={styles.headerIcon} />
               </TouchableOpacity>
               <View style={styles.userInfo}>
                  <Image source={require('../../assets/icons/avatars/man.png')} style={styles.avatar} />
                  <Text style={styles.username}>Khoa Truong</Text>
                  <Text style={styles.whatbill}>What bill today?</Text>
               </View>
               <TouchableOpacity style={styles.bell}>
                  <Image source={require('../../assets/icons/bell.png')} style={styles.headerIcon} />
                  <View style={styles.badges}>
                     <Text style={styles.badgeText}>1</Text>
                  </View>
               </TouchableOpacity>
            </View>

            <View style={styles.cardWrapper}>
               <LinearGradient colors={LINEAR_COLORS_CARD} style={styles.card} start={{ x: 0.25, y: 0 }}>
                  <Text style={styles.totalBill}>Total bills</Text>
                  <Text style={styles.money}>300$</Text>
                  <Text style={styles.splitWith}>Splitted with</Text>
                  <View style={styles.splittedWith}>
                     <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                     >
                        {
                           userData.map((item: any, index: number) => {
                              return <View style={{ marginLeft: index == 0 ? 0 : -15 }}>
                                 <Image source={item.avatar} style={styles.avatar} />
                              </View>
                           })
                        }
                     </ScrollView>
                  </View>
               </LinearGradient>
               <TouchableOpacity style={styles.btnWrapper}>
                  <View style={styles.btnNext}>
                     <Image source={require('../../assets/icons/right-arrow.png')} style={styles.nextIcon} />
                  </View>
               </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
            </View>
         </SafeAreaView>
      </View>
   );
};

export default Home;