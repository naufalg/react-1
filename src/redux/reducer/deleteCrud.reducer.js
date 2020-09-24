// import {
//     DELETE_DATA_REQUEST
//     // DELETE_DATA_SUCCESS,
//     // DELETE_DATA_FAILED,
//   } from "../action/getCrud.action";
  
//   const initialCrudState = {
//     data: [],
//     isLoading: false,
//     error: null,
//   };
//   const deleteCrudReducer = (state = initialCrudState, action) => {
//     switch (action.type) {
//       case GET_DATA_REQUEST:
//         return {
//           ...state,
//           isLoading: true,
//         };
//       case GET_DATA_SUCCESS:
//         return {
//           ...state,
//           isLoading: false,
//           data: action.result,
//         };
//       case GET_DATA_FAILED:
//         return {
//           ...state,
//           isLoading: false,
//           error: action.error,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default deleteCrudReducer;
  