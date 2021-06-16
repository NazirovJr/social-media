import React from "react";

const withSuspense = (Component, LoaderComponent) => {
    return (props) => {
        return <React.Suspense fallback={<LoaderComponent/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}

export default withSuspense
