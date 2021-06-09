function solucao(produtos){
    let valorTotal=0
       let valorTop=0;
       for(let i=0;i<produtos.length;i++){
         const preco=produtos[i].preco;
         valorTotal=valorTotal+preco
 
         if(preco>=10000){
           valorTop=valorTop+preco
         }
       }
       const resposta={
         totalTop:valorTop,
         
         percentual:valorTop/valorTotal
       } 
       console.log(resposta)
 }
     
     