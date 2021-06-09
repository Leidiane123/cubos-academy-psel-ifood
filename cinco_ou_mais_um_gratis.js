function solucao(precos) {
        
    if(precos.length<=4){
        let soma=0
        for(let i=0;i<precos.length;i++){
        soma=soma+precos[i]
      } console.log(soma)
           
    }
       if(precos.length>4){
        let soma1=0
        let vMenor = precos[0]
        for(let i = 0; i < precos.length; i++){
            if(vMenor > precos[i]) { vMenor = precos[i]; }
        } 
        for(let i=0;i<precos.length;i++){
            soma1=soma1+precos[i]}
            let resultado=soma1-vMenor
            console.log(resultado)
       } 
}