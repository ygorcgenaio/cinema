function ValidaCPF(){	
    var RegraValida=document.getElementById("RegraValida").value; 
    var cpfValido = /^(([0-9]{5}-[0-9]{1})|([0-9]{8}))$/;	 
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

   function mCEP(cep){
cep=cep.replace(/\D/g,"")
cep=cep.replace(/(\d{5})(\d)/,"$1-$2")
//cep=cep.replace(/(\d{0})(\d)/,"$1.$2")
cep=cep.replace(/(\d{3})(\d{2,3})$/,"$1-$2")
return cep
}