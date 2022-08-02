interface IActionPayload {
   type: string,
   payload: any
};

const initState = {
   bills: [],
   userProfile: {name: '', email: ''},
   members: []
};

const reducer = (state: typeof initState, action: IActionPayload) => {
   switch (action.type) {
      case 'SET_PROFILE':
         console.log(action);
         return {
            ...state,
            userProfile: {
               ...state.userProfile,
               name: action.payload.name,
               email: action.payload.email,
            }
         };
      default:
         break;
   }
};

export { initState };
export default reducer;