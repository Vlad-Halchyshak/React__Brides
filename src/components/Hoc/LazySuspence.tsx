import React from 'react'
import Loading from '../Loading/loading'

export function LazySuspense<WC>(WrappedComponent: React.ComponentType<WC>)  {

  return (props: WC) => {
    return (
      <React.Suspense fallback={<Loading />}>
        <WrappedComponent {...props} />
      </React.Suspense>
    );
  }
}