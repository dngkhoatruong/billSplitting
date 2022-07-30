import { StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_WEIGHT_MEDIUM } from "../../constants/vars";


const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
   },
   bgWrapper: {
      flex: 2,
   },
   bg: {
      width: 220,
      height: '100%',
   },
   introContainer: {
      flex: 3,
      marginHorizontal: 15,
   },
   timeDegreesWrapper: {
      flexDirection: 'row',
      marginBottom: 10,
   },
   clock: {
      fontSize: 22,
      fontWeight: '500',
      color: COLORS.PRIMARY_TEXT1, 
      fontFamily: FONTS.AvenirNextRegular,
   },
   degreeWrapper:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
   },
   textDegrees: {
      fontSize: 15,
      color: COLORS.PRIMARY_TEXT1,
      fontWeight: FONT_WEIGHT_MEDIUM,
      fontFamily: FONTS.AvenirNextRegular,
   },
   weatherIcon: {
      width: 25,
      height: 20,
      marginRight: 10,
   },
   introWrapper: {
      flex: 1,
      marginTop: 15,
   },
   btnWrapper: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
   },
   letGoBtn: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 50,
      borderRadius: 10,
      backgroundColor: COLORS.PRIMARY_COLOR_LIGHT,
   },
   textLetgo: {
      fontSize: 16,
      fontFamily: FONTS.UbuntuBold,
      lineHeight: 24,
      color: COLORS.PRIMARY_TEXT1,
      marginRight: 10,
   },
   arrowImg: {
      width: 18,
      height: 10,
   },
   createBtn: {
      backgroundColor: 'transparent',
      marginVertical: 30,
   },
   textCreateAccount: {
      fontSize: 16, 
      fontFamily: FONTS.AvenirNextRegular,
      lineHeight: 24,
      color: COLORS.PRIMARY_TEXT1,
   }
});

export default styles;