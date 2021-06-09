function solucao(tempo, distancia) {
	if(tempo<5){
        console.log(600)
    }if(tempo>=5&&tempo<=60){
        var custo1=tempo*100+distancia*50
        console.log(custo1)
    }if(tempo>60){
        if(distancia<100){
            var custo2=200*distancia
            console.log(custo2)
        }if(distancia>=100){
            var custo3=150*distancia
            console.log(custo3)
        }
    }

}