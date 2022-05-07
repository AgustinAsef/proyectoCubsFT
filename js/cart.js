$(document).ready(function(){  /* span el carrito de compras */
    $("#cart").append(`
    <div class="padding">
    <div >
      <p><h3 class="textColor"><strong>Carrito</strong></h3></p>
      <p><h6 class="textColor">En tu carrito hay:</h6></p>        
    </div>     
    <div>  
      <table class="table">
        <thead>     
          <tr>
            <th scope="col"><srtrong class="textColor">Cubs</srtrong></th>
            <th scope="col"><srtrong class="textColor">Nombre</srtrong></th>
            <th scope="col"><srtrong class="textColor">Precio</srtrong></th>
            <th scope="col"><srtrong class="textColor">Eliminar</srtrong></th>
          </tr>
        </thead>
        <tbody id="cartTable">
        </tbody>
      </table>      
    </div>    
    <div class="cartButtonDiv" id="cartBuySpanButton">
      <p class="textColor marginTop">El total de tu compra es: <span id="cartSpamTotal"></span></p>
      <button class="buttonColor" id="buyCartProducts">Comprar</button>
    </div>
  </div>
    `)
    $("#buyCartProducts").click(function(){  /* funcionalidades del boton de comprar*/
      if (sessionStorage.getItem("squareCarmineVermilioninCar") == 1 && sessionStorage.getItem("squareRedAmaranthCar") == 1 && sessionStorage.getItem("squareMajorelleSapphireCar") == 1 && sessionStorage.getItem("squarePrussiaMarineCar") == 1 && sessionStorage.getItem("squareSteelKleinCar") == 1 && sessionStorage.getItem("squarYellowAmberCar") == 1 && sessionStorage.getItem("squareTopazGoldenCar") == 1 && sessionStorage.getItem("squarWhiteBlackCar") == 1&&sessionStorage.getItem("squareGreyBoneCar") == 1&& sessionStorage.getItem("squareBlackWhiteCar")  == 1)
      {$("#noProductsInCart").fadeIn(0)
      $("#noProductsInCart").fadeOut(3000)
          } else {
            $("#squareCarmineVermilion").remove()
            $("#squareRedAmaranth").remove()
            $("#squareMajorelleSapphire").remove()
            $("#squarePrussiaMarine").remove()
            $("#squareSteelKlein").remove()
            $("#squarYellowAmber").remove()
            $("#squareTopazGolden").remove()
            $("#squarWhiteBlack").remove()
            $("#squareGreyBone").remove()
            $("#squareBlackWhite").remove()

            squares.splice(0)
            total=squares.reduce((a, b) => a + b, 0);
            let squareTotal = total
            document.getElementById("cartSpamTotal").innerHTML = squareTotal 
            
            $("#productSellSucces").fadeIn(0)
            $("#productSellSucces").fadeOut(3000)
      

          }            
    })
})

$("#cartShowButton").click(function(){  /* oculta y muestra el carrito */
    $("#cart").toggle(`0`)
})

