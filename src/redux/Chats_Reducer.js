



let initialState = {
  
    ChatItems: [
      { id: 1, name: "Tanya", age: "24", city: "Kyiv" },
      { id: 2, name: "Vika", age: "27", city: "Lviv" },
      { id: 3, name: "Angela", age: "34", city: "Sumy" },
      { id: 4, name: "Ilona", age: "29", city: "Kyiv" },
    ],

    ChatMessages: [
      { id: 1, name: "Tanya", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus qui rem tempore, laudantium love you babe love you babe" },
      { id: 2, name: "Vika", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus qui rem tempore, laudantium love you babe love you babe" },
      { id: 3, name: "Angela", message: "dolor sit amet consectetur adipisicing elit. Neque ducimus qui rem tempore, laudantium, akaskss love you babe  love you babe love you babe" }
    ],

    MyMessages: [
      { id: 3, name: "Vito", message: "Too many people spend money they haven’t earned, to buy things they don’t want, to impress people they don’t like." },
      { id: 4, name: "Vito", message: "Too many people spend money they haven’t earned, to buy things they don’t want, to impress people they don’t like." },

    ]
  }
  
  const ChatReducer = (state = initialState, action) => {
    
    switch (action.type) {

      case "Send_Message":
          let AnyText = action.MyTextMessage
          return {
            ...state,
            
              MyMessages: [...state.MyMessages, {
                id: 5,
                message: AnyText
              }]
          }
          default:
            return state
    }
  }

export let SendMessageAction = (MyTextMessage) => ({type: "Send_Message", MyTextMessage })


export default ChatReducer