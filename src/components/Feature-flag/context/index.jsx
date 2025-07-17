import { createContext, useContext, useEffect, useState } from "react";
import featureFlagApiCall from "../data";

export const featureContext = createContext(null);


export const FeatureContextProvider = ({children})=>{

    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    const fetchFeatureFlag = async ()=>{
        try {
            setLoading(true)
            const response = await featureFlagApiCall();
            console.log(response);
            setEnabledFlags(response);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
            throw new Error(error);
        }
    }

    useEffect(()=>{
        fetchFeatureFlag();
    },[])
    return (
        <featureContext.Provider value={{enabledFlags, loading}}>
            {children}
        </featureContext.Provider>
    )
}

export const useFeature = ()=>{
    const feature = useContext(featureContext);
    return feature;
}