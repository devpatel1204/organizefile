let fs=require("fs");
let path=require("path");
//let types=require("./utility.js");
let types={
    media : ["mp4","mkv"],
    archives: ["zip","7z","rar","tar","gz","ar","ios","xz"],
    documents:["docx","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","tex"],
    
    app:["exe","dmg","pkg","deb"]
}
function organizeFn(dp)
{    let destpath;
     //dp=dirctorypath
   // console.log("orgamize ",dp);
   //steps
   //1. input directory path
   //
    if(dp==undefined)
    {
        destpath=process.cwd();
        return;
    } 
    else
    {
        let doseexist=fs.existsSync(dp);
        if(doseexist)
        {
            //2. create->organize->directory
            destpath=path.join(dp,"organize_files");
            if(fs.existsSync(destpath)==false)
            {
                fs.mkdirSync(destpath);
            }
        }
        else
        {
            console.log("enter a valid path");
            return;
        }
       
    }
    organizehelper(dp,destpath);
}

function organizehelper(src,dest){
    let childname= fs.readdirSync(src);
    console.log(childname);
    for(i=0;i<childname.length;i++)
    {
          let childaddress = path.join(src,childname[i]);
          if(fs.lstatSync(childaddress).isFile())
          {
             let category= getcategory(childname[i]);
             console.log(childname[i],"<>",category);
             sendFile(childaddress,dest,category);
          }
    }
 }
 function sendFile(srcfilep,dest,category)
 {
     let categorypath=path.join(dest,category);
     if(fs.existsSync(categorypath)==false)
     {
         fs.mkdirSync(categorypath);
     }
     let filename=path.basename(srcfilep);
     let desFilepath=path.join(categorypath,filename);
     fs.copyFileSync(srcfilep,desFilepath);
     // fs.unlinkSync(srcfilep);
     
 }
 function getcategory(name)
 {
     let extansion = path.extname(name);
     extansion = extansion.slice(1);
     //console.log("----------->"+extansion);
     for(let type in types)
     {
          let currtypearray=types[type];
          for(let i=0;i<currtypearray.length;i++)
          {    // console.log("->>>>>>>"+currtypearray[i]);
              if(extansion==currtypearray[i])
              {
                  return type;
              }
          }
          
     }
     return "others";
 }
module.exports={
    organizekey:organizeFn
}