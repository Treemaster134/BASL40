function correctBinary(data, mode)
{
    if(mode == 8)
    {

        let tempdata = Math.abs(data).toString(2).padStart(8, '0').split("");
        
        if(data < 0)
        {
            
            tempdata = Math.abs(data + 1).toString(2).padStart(8, '0').split("");
            for(let i = 0; i < tempdata.length; i++)
            {
                tempdata[i] = Number(tempdata[i] != "1"); 
            }
        }
    
    
        return tempdata.join("");
    }
    if(mode == 16)
    {
        let tempdata = Math.abs(data).toString(2).padStart(16, '0').split("");
    
    
        return tempdata.join("");
    }
}



function clampDecimal(decimal)
{
    if(decimal > 127)
    {
        decimal = -128 + ((decimal-1) - 127);
        console.log(decimal);
        return;
    }
    if(decimal < -128)
    {
        decimal = 127 + ((decimal+1) + 128);
        console.log(decimal);
        return;
    }
}
