
function helpFn()
{
    console.log(`List of All command:
                 node main.js tree "directoryPath"
                 node main.js organize "directoryPath"
                 node main.js help`);
}
module.exports={
    helpkey: helpFn
}