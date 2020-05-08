import React from 'react'
import Loading from '../Loading/loading'

export const LazySuspense = (Component) => {

  return (props) => {
    return <React.Suspense fallback={<Loading />}>
      <Component {...props} />
    </React.Suspense>
  }
}