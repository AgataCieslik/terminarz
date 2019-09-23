import { instance } from "../Logging";

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

export async function GetCurrentUser(){
    try{
        const result = await instance.get('./me',{
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