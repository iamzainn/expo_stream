
import { Router } from "expo-router/build/types";
import { Storage } from "@kinde-oss/react-native-sdk-0-7x";
export const handleRedirectTo = async (router:Router) => {
    const accessToken = await Storage.getAccessToken();
    // console.log("Accesstoken : "+accessToken);
    if(accessToken){
    return router.replace("/home");
    }
    else{
        return router.replace("/Auth");
    }
}