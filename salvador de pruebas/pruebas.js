$(document).ready(function(){

    squareCarmineVermilion = new square ("Carmin-bermellón", 2300)
    squareRedAmaranth = new square ("Rojo-amaranto", 3200)

    total=squares.reduce((a, b) => a + b, 0);
    let squareTotal = total
    document.getElementById("cartSpamTotal").innerHTML = squareTotal
        

   $("#redSquareContainer").append( /* spamea los productos en su lugar */
    `<div class="squareContainerProduct">
        <div class="squareRedAmaranthImg" id="squareRedAmaranthImg"></div>
        <div class="squareFeatures" id="squareRedAmaranthFeatures">
            <p class="textColor">Nombre:</p>
            <p class="textColor"><strong>${squareRedAmaranth.nombre}</strong></p>
            <p class="textColor">Precio: ${squareRedAmaranth.precio}</p>
            <button class="buttonColor" id="buySquareRedAmaranthButton">Agregar al carrito</button>
        </div>
    </div>
    <div class="squareContainerProduct">
      <div class="squareCarmineVermilionImg" id="squareCarmineVermilionImg"></div>
      <div class="squareFeatures" id="squareCarmineVermilionFeatures">
        <p class="textColor">Nombre:</p>
        <p class="textColor"><strong>${squareCarmineVermilion.nombre}</strong></p>
        <p class="textColor">Precio:${squareCarmineVermilion.precio}</p>
        <button class="buttonColor" id="buySquareCarmineVermilionButton">Agregar al carrito</button>
      </div>
    </div>`
   )
   $("#squareCarmineVermilionImg").click(function(){ /* funcionalidad del boton de agregar al carrito y spam en el carrito */
    $("#squareCarmineVermilionFeatures").toggle(`0`)
    $("#buySquareCarmineVermilionButton").click(function(){
        if (sessionStorage.getItem("squareCarmineVermilioninCar") == 1) {
            $("#productAddSucces").fadeIn(0)
            $("#productAddSucces").fadeOut(3000)
            $("#cartTable").append(`
            <tr class="tablaTitulo" id="squareCarmineVermilion">
                <td><div class="squareCarmineVermilionCartImg"></div></td>
                <td class:"textColor">${squareCarmineVermilion.nombre}</td>
                <td class:"textColor">${squareCarmineVermilion.precio}</td>
                <td><button class="buttonColor" id="removeSquareCarmineVermilion">X</button></td>
            </tr>`)
            sessionStorage.setItem("squareCarmineVermilioninCar", 2)
            console.log(sessionStorage.getItem("squareCarmineVermilioninCar"))
            squares.push(squareCarmineVermilion.precio)
            console.log(squares)

            
            total=squares.reduce((a, b) => a + b, 0);
            let squareTotal = total
            document.getElementById("cartSpamTotal").innerHTML = squareTotal

            $("#removeSquareCarmineVermilion").click(function(){
                $("#squareCarmineVermilion").remove()

                squares.push(-2300)
                total=squares.reduce((a, b) => a + b, 0);
                let squareTotal = total
                document.getElementById("cartSpamTotal").innerHTML = squareTotal    
                console.log(squares)

                sessionStorage.setItem("squareCarmineVermilioninCar", 1)
            })
            
            return sessionStorage.getItem("squareCarmineVermilioninCar")
        }if (sessionStorage.getItem("squareCarmineVermilioninCar") == 2) {
            $("#productBuyBefore").fadeIn(0)
            $("#productBuyBefore").fadeOut(3000)
        }
     })
}) 
   $("#squareRedAmaranthImg").click(function(){ /* funcionalidad del boton de agregar al carrito y spam en el carrito */
    $("#squareRedAmaranthFeatures").toggle(`0`)
    $("#buySquareRedAmaranthButton").click(function(){
        if (sessionStorage.getItem("squareRedAmaranthCar") == 1) {
            $("#productAddSucces").fadeIn(0)
            $("#productAddSucces").fadeOut(3000)
            $("#cartTable").append(`
            <tr class="tablaTitulo" id="squareRedAmaranth">
                <td><div class="squareRedAmaranthCartImg"></div></td>
                <td class:"textColor">${squareRedAmaranth.nombre}</td>
                <td class:"textColor">${squareRedAmaranth.precio}</td>
                <td><button class="buttonColor" id="removeSquareRedAmaranth">X</button></td>
            </tr>`)
            sessionStorage.setItem("squareRedAmaranthCar", 2)
            console.log(sessionStorage.getItem("squareRedAmaranthCar"))
            squares.push(squareRedAmaranth.precio)
            console.log(squares)


            total=squares.reduce((a, b) => a + b, 0);
            let squareTotal = total
            document.getElementById("cartSpamTotal").innerHTML = squareTotal

            $("#removeSquareRedAmaranth").click(function(){
                $("#squareRedAmaranth").remove()

                squares.push(-3200)
                total=squares.reduce((a, b) => a + b, 0);
                let squareTotal = total
                document.getElementById("cartSpamTotal").innerHTML = squareTotal    
                console.log(squares)

                sessionStorage.setItem("squareRedAmaranthCar", 1)
            })


            return sessionStorage.getItem("squareRedAmaranthCar")
        }if (sessionStorage.getItem("squareRedAmaranthCar") == 2) {
            $("#productBuyBefore").fadeIn(0)
            $("#productBuyBefore").fadeOut(3000)
        }

    })
})
}) 
