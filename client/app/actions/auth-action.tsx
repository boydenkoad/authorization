'use server'

import { Api } from "@/api/api";
import { IUser } from "@/api/types/user";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";


export async function Authorization(user:IUser){


    
    try{
        const result = await Api.authorization(user)
    
        if(result){
            console.log(result)
            redirect('/home')
        }else{
            console.log(result)
        }
    }catch(e:any){
        throw e.response.data
    }

   

    

    
}