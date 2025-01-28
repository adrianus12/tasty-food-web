import { useState, useEffect, useRef, useCallback } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(null);
    const [error, setError] = useState(null);
    const abortFetch = useRef(new AbortController())

    const fetchData = useCallback(()=>{
        fetch(url, {signal: abortFetch.current.signal})
            .then(res => {
                console.log(res);
                if  (!res.ok) { 
                    
                    //error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                console.log(data);
                setData(data);
                setError(null);
            })
            .catch(err => {
                console.log(err)                
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    //auto catches network/connection error
                    setIsPending(false);
                    setError(err.message);
                }
            })
    },[url])

    useEffect(() => {
        
        console.log('fetch')
        fetchData()
         
    }, [fetchData])

    return {data, isPending, error, fetchData};
}
 
export default useFetch;