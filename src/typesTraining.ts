export {};
/* import { actions } from './redux/Chats_Reducer';
import { UsersType } from './types/types';



type UserTypes = {
  firstName: string
  lastName: string
  age: number
}

type Photo = {
  small: string
  big: string
}


type ServerResponse<D> = {
  data: D;
  messages: Array<string>
  errorCode: number

};

const response: ServerResponse<UserTypes> = {
  data: {
    firstName: "Vlad",
    lastName: "git",
    age: 23,
  },
  messages: ["Hello", "bitch"],
  errorCode: 2,
};
const response2: ServerResponse<Photo> = {
  
  data: {
    big: "Vlad",
    small: "git",
  },
  
  messages: ["Hello", "bitch"],
  errorCode: 2,
};


type Nullable<T> = null | T

const initial = {
  name: "some",
  age: 25,
  user: null as Nullable<UserTypes>,
};

type StateType = typeof initial

const Reducer = (state: StateType = initial, action: actions) => {
  switch (action.type) {
    case "AGE": 
      return {
        ...state, age: action.age
      };
      
    case "FIRST_TYPE":
      return {
        ...state, name: action.firstName + " " + action.lastName
      }
     
  }

  return state;
};

const AC1 = (firstName: string, lastName: string) => ({ type: 'FIRST_TYPE', firstName, lastName} as const)
const AC2 = (age: number) => ({ type: 'AGE', age } as const)

type actions = ReturnType<typeof AC1> | ReturnType<typeof AC2>
/* const ac1: ForAC1 = {type:'FIRST_TYPE'}  */
 