import {Redirect} from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'

let mapStateToPropsRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth
} as mapProps)

type mapProps = {
  isAuth: boolean
}
type DispatchPropsType = {
  
}
export function WithRedirect<WC>  (Component: React.ComponentType<WC>)  {

  const RedirectComponent: React.FC<mapProps & DispatchPropsType> = props => {
    let {isAuth, ...restProps} = props
    if (!isAuth) return <Redirect to="/login" />
    return <Component {...restProps as WC}/>
  
}

let ConnectAuthRedirectComp = connect<mapProps, DispatchPropsType, WC, AppStateType>(mapStateToPropsRedirect, {})(RedirectComponent)
return ConnectAuthRedirectComp
}