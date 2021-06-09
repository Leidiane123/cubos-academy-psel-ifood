function solucao(joao, andre) {
    if(joao==="PEDRA"){
          if(andre==="TESOURA"){
            console.log("JOAO")
        } if(andre==="PAPEL"){
            console.log("ANDRE")
        } if(joao===andre){
            console.log("EMPATE")
        }
    }if(joao==="PAPEL"){
           if(andre==="TESOURA"){
            console.log("ANDRE")
        }  if(andre==="PEDRA"){
            console.log("JOAO")
        }if(joao===andre){
            console.log("EMPATE")
        }
        
    }if(joao==="TESOURA"){
           if(andre==="PAPEL"){
            console.log("JOAO")
        }  if(andre==="PEDRA"){
            console.log("ANDRE")
        }if(joao===andre){
            console.log("EMPATE")
        }
    }
} 