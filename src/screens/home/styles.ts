import { StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_WEIGHT_BOLD, FONT_WEIGHT_MEDIUM } from "../../constants/vars";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      // backgroundColor: COLORS.PRIMARY_COLOR_LIGHT,
   },
   header: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: '15%',
   },
   headerIcon: {
      width: 35,
      height: 35,
   },
   bell: {
      position: 'relative',
      width: 35,
      height: 35,
   },
   badges: {
      position: 'absolute',
      top: 1,
      right: -4,

      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 3,
      borderColor: 'white',

      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
   },
   badgeText: {
      color: 'white',
      fontSize: 10,
      fontWeight: FONT_WEIGHT_BOLD,
   },
   userInfo: {
      width: '55%',
      justifyContent: 'center',
      alignItems: 'center',
   },
   avatar: {
      width: 65,
      height: 65,
   },
   username: {
      fontFamily: FONTS.MulishExtraBold,
      fontSize: 18,
      fontWeight: FONT_WEIGHT_MEDIUM,
   },
   whatbill: {
      fontFamily: FONTS.MulishExtraBold,
      fontSize: 23,
      fontWeight: FONT_WEIGHT_BOLD,
      marginTop: 5,
   },

   cardWrapper: {
      flex: 1,
      // backgroundColor: COLORS.PRIMARY_COLOR_LIGHT,
      alignItems: 'center',
      justifyContent: 'center',
   },
   card: {
      width: '82%',
      height: '96%',
      borderRadius: 50,
      transform: [
         { perspective: -1000 },
         { rotateX: '30deg' },
      ],
      paddingTop: '8%',
      alignItems: 'center',
   },
   totalBill: {
      fontSize: 20,
      fontFamily: FONTS.MulishMedium,
      color: 'white',
      marginBottom: 10,
   },
   money: {
      fontSize: 40,
      fontFamily: FONTS.MulishBold,
      fontWeight: FONT_WEIGHT_BOLD,
      color: 'white',
      marginBottom: 20,
   },
   splitWith: {
      fontSize: 18,
      fontFamily: FONTS.MulishMedium,
      color: 'white',
      marginBottom: 10,
   },
   splittedWith: {
      width: '80%',
   },
   btnWrapper: {
      position: 'absolute',
      bottom: 10,

      width: 62,
      height: 62,
      borderRadius: 40,
      borderLeftWidth: 1,
      borderLeftColor: COLORS.PRIMARY_COLOR_DARK,

      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 99
   },
   btnNext: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: COLORS.PRIMARY_COLOR_DARK,

      justifyContent: 'center',
      alignItems: 'center',
   },
   nextIcon: {
      width: 22,
      height: 22,
      tintColor: 'white',
   }
});

export default styles;