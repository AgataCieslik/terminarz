import { instance } from "../js/Logging";

export async function ValidateUser(login, password, path){
    try{
        const result = await instance.post(path,{
            login,
            password
        });
        return {
            data: result.data, 
            status: result.status
        };
    }
    catch (err){
        return false;
    }
}

export async function GetCurrentUser(token){
    try{
        const result = await instance.get('./users/me',{
            headers:{
                "x-auth-token": token
            }
        });
        return result;
    }
    catch (err){
        return err;
    }
}