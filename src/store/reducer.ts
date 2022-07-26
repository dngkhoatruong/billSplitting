

interface IActionPayload {
   type: string,
   payload: any
};

const initState = {
   bills: ['qweqwe', 'qwew'],
   userProfile: {a: 'qweqw'},
   members: []
};

const reducer = (state: typeof initState, action: IActionPayload) => {
   switch (action.type) {
      case 'GET':
         return {
            ...state,
         };
      default:
         break;
   }
};

export { initState };
export default reducer;