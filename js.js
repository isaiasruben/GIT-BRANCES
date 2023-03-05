function registar(){
    var inputs=document.getElementsByClassName('inputs');
    var mensage=document.getElementById('mensagem');
    var smss=document.getElementById('sms');
    var nome=document.getElementById('inome');
    var email=document.getElementById('iemail');
    var mensagem='';
    var sms='';
    
    for(let i=0;i<inputs.length;i++)
    {
        let element=inputs[i];
        if(element.value=="")
        {
            element.style.background='red';
            element.style.border='red';
            
        } 
        else
        {
            element.style.background="green";
            element.style.border='green';
        }
    
        if(email.value=="" && nome.value=="")
        {
            mensagem='Campo deve ser preenchido';
            sms='Campo deve ser preenchido';
            mensage.style.color='red';
            smss.style.color='red';
        }
    
        if(email.value=="")
        {
           sms='Campo deve ser preenchido';
           smss.style.color='red';
        }
        if(nome.value==''){
            mensagem='Campo deve ser preenchido';
            mensage.style.color='red';
    
        }
    
        if(nome.value!="" && email.value!="")
        {
            sms="Sucesso";
            mensagem="Sucesso";
            smss.style.color='green';
            mensage.style.color='green';
        }
        mensage.innerHTML=mensagem;
        smss.innerHTML=sms;
    }
    
    }