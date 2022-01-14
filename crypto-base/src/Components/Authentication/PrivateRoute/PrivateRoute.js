import React from 'react'
import { Redirect } from 'react-router';
import { Route } from 'react-router'
import useFireBase from './../../../customHooks/useFireBase';
import Spinner from './../../spinner';


const PrivateRoute = ({children, ...rest}) => {
    
    const {user, isLoading} = useFireBase();

    if(isLoading){
        return <Spinner />
    } 

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ?
                children : <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>
        }
        ></Route>
    )
}

export default PrivateRoute