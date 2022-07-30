import { StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_WEIGHT_BOLD } from "./vars";

const GLOBAL_STYLES = StyleSheet.create({
   subText: {
      fontSize: 13,
      color: COLORS.PRIMARY_TEXT2,
      fontFamily: FONTS.AvenirNextRegular,
      lineHeight: 20
   },
   logoImg: {
      width: 60,
      height: 60,
   },
   appName: {
      fontSize: 28,
      fontWeight: FONT_WEIGHT_BOLD,
      color: COLORS.PRIMARY_TEXT1,
      fontFamily: FONTS.UbuntuBold,
   },

   flex1: {
      flex: 1,
   },
   flex2: {
      flex: 2,
   },
   flex3: {
      flex: 3,
   },
   flex4: {
      flex: 4,
   },
});

export default GLOBAL_STYLES;