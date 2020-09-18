import { ActionTypes } from './redux-store';



type ChatItemsType = {
  id: number
  name: string
  age: string
  city: string
}
type ChatMessagesType = {
  id: number
  name: string 
  message: string
}
type MyMessagesType = {
  id: number
  name: string 
  message: string
}

let initialState = {
  
    ChatItems: [
      { id: 1, name: "Tanya", age: "24", city: "Kyiv" },
      { id: 2, name: "Vika", age: "27", city: "Lviv" },
      { id: 3, name: "Angela", age: "34", city: "Sumy" },
      { id: 4, name: "Ilona", age: "29", city: "Kyiv" },
  ] as Array<ChatItemsType>,

    ChatMessages: [
      { id: 1, name: "Tanya", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus qui rem tempore, laudantium love you babe love you babe" },
      { id: 2, name: "Vika", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus qui rem tempore, laudantium love you babe love you babe" },
      { id: 3, name: "Angela", message: "dolor sit amet consectetur adipisicing elit. Neque ducimus qui rem tempore, laudantium, akaskss love you babe  love you babe love you babe" },
    ] as Array<ChatMessagesType>,

    MyMessages: [
      { id: 3, name: "Vito", message: "Too many people spend money they haven’t earned, to buy things they don’t want, to impress people they don’t like." },
      { id: 4, name: "Vito", message: "Too many people spend money they haven’t earned, to buy things they don’t want, to impress people they don’t like." },

    ] as Array<MyMessagesType>,
  }
  
 type Action = ActionTypes<typeof actions> 
export type initialStateType = typeof initialState

const ChatReducer = (state = initialState, action: Action): initialStateType => {
    
    switch (action.type) {
       case "Send_Message":
          let AnyText = action.MyTextMessage
          return {
            ...state,
            MyMessages: [...state.MyMessages, {
                id: 5,
                message: AnyText
            } as MyMessagesType ]
          }
          default:
            return state
    }
  }

export const actions = {
SendMessageAction: (MyTextMessage: string) => ({ type: "Send_Message", MyTextMessage })
} 


export default ChatReducer