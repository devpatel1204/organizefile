#!/usr/bin/env node
let inputArray= process.argv.slice(2);
//console.log(inputArray);
let c = inputArray [0];
let fs=require("fs");
let path=require("path");
let helpobject=require("./cammand/help");
let treeobject=require("./cammand/tree");
let organizeobject=require("./cammand/organize");
switch(c)
{
    case "tree":
        treeobject.treekey(inputArray[1]);
        break;
    case "organize":
        organizeobject.organizekey(inputArray[1]);
        break;
    case "help":
        helpobject.helpkey();
        break;
    default :
        console.log("enter a valid syntex 😂");
        break;
}


