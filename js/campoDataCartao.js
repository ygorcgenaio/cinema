function ValidaCPF(){	
    var RegraValida=document.getElementById("RegraValida").value; 
    var cpfValido = /^(([0-9]{4}.[0-9]{4}.[0-9]{4}.[0-9]{4})|([0-9]{15}))$/;	 
    if (cpfValido.test(RegraValida) == true)	{ 
    console.log("CPF Válido");	
    } else	{	 
    console.log("CPF Inválido");	
    }
    }
  function fMasc(objeto,mascara) {
obj=objeto
masc=mascara
setTimeout("fMascEx()",1)
}

  function fMascEx() {
obj.value=masc(obj.value)
}

   function mDATA(cpf){
cpf=cpf.replace(/\D/g,"")
cpf=cpf.replace(/(\d{4})(\d)/,"$1.$2")
cpf=cpf.replace(/(\d{4})(\d)/,"$1.$2")
cpf=cpf.replace(/(\d{4})(\d)/,"$1.$2")
cpf=cpf.replace(/(\d{4})(\d{1,2})$/,"$1-$2")
return cpf
}