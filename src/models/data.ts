import { EXPENSE_TYPE } from "../constants/types";

const userData = [
   {
      avatar: require('../assets/icons/avatars/user1.png'),
      name: 'Kim',
   },
   {
      avatar: require('../assets/icons/avatars/user2.png'),
      name: 'Myn',
   },
   {
      avatar: require('../assets/icons/avatars/user3.png'),
      name: 'T.Ha',
   },
   {
      avatar: require('../assets/icons/avatars/user4.png'),
      name: 'Y.Khoa',
   },
   {
      avatar: require('../assets/icons/avatars/user5.png'),
      name: 'a Danh',
   },
   {
      avatar: require('../assets/icons/avatars/user6.png'),
      name: 'Chiec',
   },
];

const recentExpense = [
   {
      type: EXPENSE_TYPE.DRINKS,
   },
   {
      type: EXPENSE_TYPE.EATING,
   },
   {
      type: EXPENSE_TYPE.FUEL,
   },
   {
      type: EXPENSE_TYPE.GRAB,
   },
   {
      type: EXPENSE_TYPE.MARKET,
   },
   {
      type: EXPENSE_TYPE.MOTOBIKE,
   },
   {
      type: EXPENSE_TYPE.PLANE,
   },
   {
      type: EXPENSE_TYPE.SHOPPING,
   },
];

export {userData, recentExpense};