import { StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_WEIGHT_BOLD } from "../../constants/vars";

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   imgWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   img: {
      width: 400,
      height: 285,
   },
   infoWrapper: {
      flex: 1,
      marginBottom: 40,
   },
   appNameWrapper: {
      flex: 1,
      marginHorizontal: 50,
      alignItems: 'center',
   },
   appName: {
      fontSize: 38,
      fontFamily: FONTS.MulishExtraBold,
      color: COLORS.PRIMARY_TEXT1,
      fontWeight: FONT_WEIGHT_BOLD,
      marginBottom: 15,
   },
   description: {
      fontSize: 18,
      fontFamily: FONTS.MulishLight,
      color: COLORS.PRIMARY_TEXT1,
      textAlign: 'center',
      lineHeight: 24,
   },
   formWrapper: {
      width: '100%',
      alignItems: 'center' 
   },
   input: {
      width: '70%',
      height: 55,
      backgroundColor : "#EBEBEB",
      marginBottom: 25,
      padding: 15,
      paddingLeft: 25,

      fontFamily: FONTS.MulishMedium,
      fontSize: 16,
      color: COLORS.PRIMARY_TEXT1,

      borderRadius: 30,
      borderColor: COLORS.PRIMARY_TEXT1,

      shadowColor: COLORS.PRIMARY_TEXT1,
      shadowOpacity: 0.4,
      shadowOffset: {width: -2, height: 10},
      shadowRadius: 25,
   },
   btn: {
      width: '60%',
      backgroundColor: 'white',
      shadowColor: COLORS.PRIMARY_TEXT1,
      borderRadius: 30,

      shadowOpacity: 0.8,
      shadowOffset: { width: 1, height: 2 },
      shadowRadius: 10,
      marginTop: 15,
   },
   textBtn: {
      fontSize: 20,
      fontFamily: FONTS.MulishBold,
      fontWeight: FONT_WEIGHT_BOLD,
      textAlign: 'center',
      color: '#C5ECE4'
   },
   linear: {
      width: '100%',
      height: 60,
      padding: 15,
      borderRadius: 30,
   }
});

export default styles;
