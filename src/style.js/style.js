import { useEffect, useLayoutEffect } from "react";
import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";

 export const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 

