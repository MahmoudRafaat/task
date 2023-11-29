function output(){
    let message=document.getElementById('out');
    message.innerHTML='';
    let input=document.getElementById('input').value;
    try{
        if(input.trim()=="")
        throw "is empty";
        if(input>5)
        throw 'high';
        if(input<5)
        throw 'low';
        if(isNaN(input))
        throw 'is not a number';
         input=Number(input);
    }catch(err){
        message.innerHTML="Output "+err;
    }

}