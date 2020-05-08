// import ChatReducer from "./Chats_Reducer"


  
// let store = {
//   _state: {

//     ChatsPage: {
//       ChatItems: [
//         { id: 1, name: "Tanya", age: "24", city: "Kyiv" },
//         { id: 2, name: "Vika", age: "27", city: "Lviv" },
//         { id: 3, name: "Angela", age: "34", city: "Sumy" },
//         { id: 4, name: "Ilona", age: "29", city: "Kyiv" },
//       ],

//       ChatMessages: [
//         { id: 1, name: "Tanya", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus qui rem tempore, laudantium" },
//         { id: 2, name: "Vika", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus qui rem tempore, laudantium" },
//         { id: 3, name: "Angela", message: "dolor sit amet consectetur adipisicing elit. Neque ducimus qui rem tempore, laudantium, akaskss love you babe" }
//       ],

//       MyMessages: [
//         { id: 3, name: "Vito", message: "Too many people spend money they haven’t earned, to buy things they don’t want, to impress people they don’t like." },
//         { id: 4, name: "Vito", message: "Too many people spend money they haven’t earned, to buy things they don’t want, to impress people they don’t like." },

//       ],
//       MyTextMessage: ""
//     }
//   },


//   getState() {
//     return this._state
//   },

//   _callSubscriber() {
//     console.log('ye')
//   },

//   dispatch(action) {
//     this._state.ChatsPage = ChatReducer(this._state.ChatsPage, action)
//     this._callSubscriber(this._state)
//   },


//   subscribe(observer) {
//     this._callSubscriber = observer
//   }
// }








//   export default store;
// window.store = store;