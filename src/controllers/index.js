import express from "express";
import {getBooks} from "../db/index.js"

const getAllBooks=async(req,res)=>{
    try{
        const allBooks=await getBooks()

        res.json(allBooks).end
    }catch(err){
        console.log(err)
    }
}

export{
    getAllBooks
}