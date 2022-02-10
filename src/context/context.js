import React, { useState } from 'react';
import {useContext , useReducer} from 'react';
import reducer from '../reducers/reducer';
import {
	OPEN_SIDEBAR,
	CLOSE_SIDEBAR,
}
from '../actions'
const Intialstate ={
	isSidebaropen:false,
}
const AppContext = React.createContext();
const AppProvider = ({children})=>{
	const [loading , setLoading] =  React.useState(false)
	const [page, setPage] = useState(1)
	const [state, dispatch] = useReducer(reducer,Intialstate);
	const opensidebar = () =>{
		dispatch({type:OPEN_SIDEBAR})
	}
	const closesidebar = () =>{
		dispatch({type:CLOSE_SIDEBAR})
	}
	const HandleNextPage = (e) =>{
        e.preventDefault();
       if(page >= 3){
            setPage(1)
        }else{

            setPage(page+1);
        }
    }
    const HandlePrevPage = (e) =>{
        e.preventDefault();
        setPage(page-1)
        if (page <= 1){
            setPage(3);
        }
         
    }
	
//  templates 


	return <AppContext.Provider 
	value = {{
		...state,
		opensidebar,
		closesidebar,
		page,
		setPage,
		loading,
		setLoading,
		HandleNextPage,
		HandlePrevPage,
		
	}}>
	{children}
	</AppContext.Provider>
}
const UseGlobalProductContext= ()=>{
	return useContext(AppContext);
}
export {
	AppProvider, UseGlobalProductContext
}