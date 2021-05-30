let fs=require("fs");
let path=require("path");
function treeFn(dp)
{
    //console.log("tree ",dp);
    let destpath;
     //dp=dirctorypath
   // console.log("orgamize ",dp);
   //steps
   //1. input directory path
   //
    if(dp==undefined)
    {
        treehelper(process.cwd(),"");
        return;
    }
    else
    {
        doseexist=fs.existsSync(dp);
        if(doseexist)
        {
            treehelper(dp,"");
        }
        else
        {
            console.log("enter a valid path");
            return;
        }
       
    }
}

function treehelper(dirp,indent)
{
    if(fs.lstatSync(dirp).isFile())
    {
        let filename=path.basename(dirp);
        console.log(indent+"|---"+filename);
    }else
    {
        let dirname=path.basename(dirp);
        console.log(indent+"--->"+dirname);
        let childrens=fs.readdirSync(dirp);
        let i;
        for(i=0;i<childrens.length;i++)
        {
            let childpath=path.join(dirp,childrens[i]);
            treehelper(childpath,indent + "\t");
        }
    }     
}
module.exports={
    treekey:treeFn
}