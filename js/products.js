    
    /* setea los productos para desarrollar el codigo */
    localStorage.setItem("squareCarmineVermilioninCar", 1)
    localStorage.setItem("squareRedAmaranthCar", 1)
    localStorage.setItem("squareMajorelleSapphireCar", 1)
    localStorage.setItem("squarePrussiaMarineCar", 1)
    localStorage.setItem("squareSteelKleinCar", 1)
    localStorage.setItem("squarYellowAmberCar", 1)
    localStorage.setItem("squareTopazGoldenCar", 1)
    localStorage.setItem("squarWhiteBlackCar", 1)
    localStorage.setItem("squareGreyBoneCar", 1)
    localStorage.setItem("squareBlackWhiteCar", 1)


class square{
    constructor (nombre, precio){
    this.nombre = nombre
    this.precio = precio
    }
}

const squares = []

fetch("./js/cubsFT.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach(producto => {
                console.log(producto)
        });
    });


$(document).ready(function(){

    fetch("./js/cubsFT.json") //trae los prodductos del json
    .then((response) => response.json())
    .then((cubs) => {
        let squareRedAmaranth = cubs [1];
        let squareCarmineVermilion = cubs [0]

    total=squares.reduce((a, b) => a + b, 0);
    let squareTotal = total
    document.getElementById("cartSpamTotal").innerHTML = squareTotal
        

   $("#redSquareContainer").append( // spamea los productos en su lugar
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
   $("#squareCarmineVermilionImg").click(function(){ // funcionalidad del boton de agregar al carrito y spam en el carrito
    $("#squareCarmineVermilionFeatures").toggle(`0`)
    $("#buySquareCarmineVermilionButton").click(function(){
        if (localStorage.getItem("squareCarmineVermilioninCar") == 1) {
            $("#productAddSucces").fadeIn(0)
            $("#productAddSucces").fadeOut(3000)
            $("#cartTable").append(`
            <tr class="tablaTitulo" id="squareCarmineVermilion">
                <td><div class="squareCarmineVermilionCartImg"></div></td>
                <td class:"textColor">${squareCarmineVermilion.nombre}</td>
                <td class:"textColor">${squareCarmineVermilion.precio}</td>
                <td><button class="buttonColor" id="removeSquareCarmineVermilion">X</button></td>
            </tr>`)
            localStorage.setItem("squareCarmineVermilioninCar", 2)
            console.log(localStorage.getItem("squareCarmineVermilioninCar"))
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

                localStorage.setItem("squareCarmineVermilioninCar", 1)
            })
            
            return localStorage.getItem("squareCarmineVermilioninCar")
        }if (localStorage.getItem("squareCarmineVermilioninCar") == 2) {
            $("#productBuyBefore").fadeIn(0)
            $("#productBuyBefore").fadeOut(3000)
        }
     })
}) 
   $("#squareRedAmaranthImg").click(function(){ // funcionalidad del boton de agregar al carrito y spam en el carrito 
    $("#squareRedAmaranthFeatures").toggle(`0`)
    $("#buySquareRedAmaranthButton").click(function(){
        if (localStorage.getItem("squareRedAmaranthCar") == 1) {
            $("#productAddSucces").fadeIn(0)
            $("#productAddSucces").fadeOut(3000)
            $("#cartTable").append(`
            <tr class="tablaTitulo" id="squareRedAmaranth">
                <td><div class="squareRedAmaranthCartImg"></div></td>
                <td class:"textColor">${squareRedAmaranth.nombre}</td>
                <td class:"textColor">${squareRedAmaranth.precio}</td>
                <td><button class="buttonColor" id="removeSquareRedAmaranth">X</button></td>
            </tr>`)
            localStorage.setItem("squareRedAmaranthCar", 2)
            console.log(localStorage.getItem("squareRedAmaranthCar"))
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

                localStorage.setItem("squareRedAmaranthCar", 1)
            })


            return localStorage.getItem("squareRedAmaranthCar")
        }if (localStorage.getItem("squareRedAmaranthCar") == 2) {
            $("#productBuyBefore").fadeIn(0)
            $("#productBuyBefore").fadeOut(3000)
        }

    })
})
})
    .catch(()=>{
        `<div class="squareContainerProduct">
            <p> ERROR </p>
        </div>`
    })
}); 

$(document).ready(function(){

    fetch("./js/cubsFT.json") //trae los prodductos del json
    .then((response) => response.json())
    .then((cubs) => {
        let squareMajorelleSapphire = cubs [2];
        let squarePrussiaMarine = cubs [3]
        let squareSteelKlein = cubs [4]

    $("#blueSquareContainer").append( // spamea los productos en su lugar 
    `<div class="squareContainerProduct">
        <div class="squareMajorelleSapphireImg" id="squareMajorelleSapphireImg"></div>
        <div class="squareFeatures" id="squareMajorelleSapphireFeatures">
            <p class="textColor">Nombre:</p>
            <p class="textColor"><strong>${squareMajorelleSapphire.nombre}.</strong></p>
            <p class="textColor">Precio: ${squareMajorelleSapphire.precio}.</p>
            <button class="buttonColor" id="buySquareMajorelleSapphireButton">Agregar al carrito</button>
        </div>
    </div>
    <div class="squareContainerProduct">
        <div class="squarePrussiaMarineImg" id="squarePrussiaMarineImg"></div>
        <div class="squareFeatures" id="squarePrussiaMarineFeatures">
            <p class="textColor">Nombre:</p>
            <p class="textColor"><strong>${squarePrussiaMarine.nombre}.</strong></p>
            <p class="textColor">Precio:${squarePrussiaMarine.precio}.</p>
            <button class="buttonColor" id="buySquarePrussiaMarineButton">Agregar al carrito</button>
        </div>
    </div>
    <div class="squareContainerProduct">
        <div class="squareSteelKleinImg" id="squareSteelKleinImg"></div>
        <div class="squareFeatures" id="squareSteelKleinImgFeatures">
            <p class="textColor">Nombre:</p>
            <p class="textColor"><strong>${squareSteelKlein.nombre}</strong></p>
            <p class="textColor">Precio:${squareSteelKlein.precio}.</p>
            <button class="buttonColor" id="buySquareSteelKleinImgButton">Agregar al carrito</button>
        </div>
    </div>`
    )
    $("#squareMajorelleSapphireImg").click(function(){ // funcionalidad del boton de agregar al carrito y spam en el carrito
        $("#squareMajorelleSapphireFeatures").toggle(`0`)
        $("#buySquareMajorelleSapphireButton").click(function(){
            if (localStorage.getItem("squareMajorelleSapphireCar") == 1) {
                $("#productAddSucces").fadeIn(0)
                $("#productAddSucces").fadeOut(3000)
                $("#cartTable").append(`
                <tr class="tablaTitulo" id="squareMajorelleSapphire">
                    <td><div class="squareMajorelleSapphireCartImg"></div></td>
                    <td class:"textColor">${squareMajorelleSapphire.nombre}</td>
                    <td class:"textColor">${squareMajorelleSapphire.precio}</td>
                    <td><button class="buttonColor" id="removeSquareMajorelleSapphire">X</button></td>
                </tr>`)
                localStorage.setItem("squareMajorelleSapphireCar", 2)
                console.log(localStorage.getItem("squareMajorelleSapphireCar"))
                squares.push(squareMajorelleSapphire.precio)


                total=squares.reduce((a, b) => a + b, 0);
                let squareTotal = total
                document.getElementById("cartSpamTotal").innerHTML = squareTotal

                $("#removeSquareMajorelleSapphire").click(function(){
                    $("#squareMajorelleSapphire").remove()
    
                    squares.push(-1200)
                    total=squares.reduce((a, b) => a + b, 0);
                    let squareTotal = total
                    document.getElementById("cartSpamTotal").innerHTML = squareTotal    
                    console.log(squares)
    
                    localStorage.setItem("squareMajorelleSapphireCar", 1)
                })
    
    
                return localStorage.getItem("squareMajorelleSapphireCar")
            }if (localStorage.getItem("squareMajorelleSapphireCar") == 2) {
                $("#productBuyBefore").fadeIn(0)
                $("#productBuyBefore").fadeOut(3000)
            }
        })
    })
    $("#squarePrussiaMarineImg").click(function(){ /* funcionalidad del boton de agregar al carrito y spam en el carrito */
        $("#squarePrussiaMarineFeatures").toggle(`0`)
        $("#buySquarePrussiaMarineButton").click(function(){
            if (localStorage.getItem("squarePrussiaMarineCar") == 1) {
                $("#productAddSucces").fadeIn(0)
                $("#productAddSucces").fadeOut(3000)
                $("#cartTable").append(`
                <tr class="tablaTitulo" id="squarePrussiaMarine">
                    <td><div class="squarePrussiaMarineCartImg"></div></td>
                    <td class:"textColor">${squarePrussiaMarine.nombre}</td>
                    <td class:"textColor">${squarePrussiaMarine.precio}</td>
                    <td><button class="buttonColor" id="removeSquarePrussiaMarine">X</button></td>
                </tr>`)
                localStorage.setItem("squarePrussiaMarineCar", 2)
                console.log(localStorage.getItem("squarePrussiaMarineCar"))
                squares.push(squarePrussiaMarine.precio)


                total=squares.reduce((a, b) => a + b, 0);
                let squareTotal = total
                document.getElementById("cartSpamTotal").innerHTML = squareTotal

                $("#removeSquarePrussiaMarine").click(function(){
                    $("#squarePrussiaMarine").remove()
    
                    squares.push(-1500)
                    total=squares.reduce((a, b) => a + b, 0);
                    let squareTotal = total
                    document.getElementById("cartSpamTotal").innerHTML = squareTotal    
                    console.log(squares)
    
                    localStorage.setItem("squarePrussiaMarineCar", 1)
                })

    
                return localStorage.getItem("squarePrussiaMarineCar")
            }if (localStorage.getItem("squarePrussiaMarineCar") == 2) {
                $("#productBuyBefore").fadeIn(0)
                $("#productBuyBefore").fadeOut(3000)
            }
        })
    })
    $("#squareSteelKleinImg").click(function(){ /* funcionalidad del boton de agregar al carrito y spam en el carrito */
        $("#squareSteelKleinImgFeatures").toggle(`0`)
        $("#buySquareSteelKleinImgButton").click(function(){
            if (localStorage.getItem("squareSteelKleinCar") == 1) {
                $("#productAddSucces").fadeIn(0)
                $("#productAddSucces").fadeOut(3000)
                $("#cartTable").append(`
                <tr class="tablaTitulo" id="squareSteelKlein">
                    <td><div class="squareSteelKleinCartImg"></div></td>
                    <td class:"textColor">${squareSteelKlein.nombre}</td>
                    <td class:"textColor">${squareSteelKlein.precio}</td>
                    <td><button class="buttonColor" id="removeSquareSteelKlein">X</button></td>
                </tr>`)
                localStorage.setItem("squareSteelKleinCar", 2)
                console.log(localStorage.getItem("squareSteelKleinCar"))
                squares.push(squareSteelKlein.precio)


                total=squares.reduce((a, b) => a + b, 0);
                let squareTotal = total
                document.getElementById("cartSpamTotal").innerHTML = squareTotal

                $("#removeSquareSteelKlein").click(function(){
                    $("#squareSteelKlein").remove()
    
                    squares.push(-1500)
                    total=squares.reduce((a, b) => a + b, 0);
                    let squareTotal = total
                    document.getElementById("cartSpamTotal").innerHTML = squareTotal    
                    console.log(squares)
    
                    localStorage.setItem("squareSteelKleinCar", 1)
                })

    
                return localStorage.getItem("squareSteelKleinCar")
            }if (localStorage.getItem("squareSteelKleinCar") == 2) {
                $("#productBuyBefore").fadeIn(0)
                $("#productBuyBefore").fadeOut(3000)
            }
        })
    })
})

})

$(document).ready(function(){

    fetch("./js/cubsFT.json") //trae los prodductos del json
    .then((response) => response.json())
    .then((cubs) => {
        let squarYellowAmber = cubs [5];
        let squareTopazGolden = cubs [6]

    $("#yellowSquareContainer").append( /* spamea los productos en su lugar */
    `<div class="squareContainerProduct">
        <div class="squarYellowAmberImg" id="squarYellowAmberImg"></div>
        <div class="squareFeatures" id="squarYellowAmberFeatures">
            <p class="textColor">Nombre:</p>
            <p class="textColor"><strong>${squarYellowAmber.nombre}.</strong></p>
            <p class="textColor">Precio: ${squarYellowAmber.precio}.</p>
            <button class="buttonColor" id="buySquarYellowAmberButton">Agregar al carrito</button>
        </div>
    </div>
    <div class="squareContainerProduct">
        <div class="squareTopazGoldenImg" id="squareTopazGoldenImg"></div>
        <div class="squareFeatures" id="squareTopazGoldenFeatures">
            <p class="textColor">Nombre:</p>
            <p class="textColor"><strong>${squareTopazGolden.nombre}.</strong></p>
            <p class="textColor">Precio: ${squareTopazGolden.precio}.</p>
            <button class="buttonColor" id="buySquareTopazGoldenButton">Agregar al carrito</button>
        </div>
    </div>`
)
$("#squarYellowAmberImg").click(function(){ /* funcionalidad del boton de agregar al carrito y spam en el carrito */
    $("#squarYellowAmberFeatures").toggle(`0`)
    $("#buySquarYellowAmberButton").click(function(){
        if (localStorage.getItem("squarYellowAmberCar") == 1) {
            $("#productAddSucces").fadeIn(0)
            $("#productAddSucces").fadeOut(3000)
            $("#cartTable").append(`
            <tr class="tablaTitulo" id="squarYellowAmber">
                <td><div class="squarYellowAmberCartImg"></div></td>
                <td class:"textColor">${squarYellowAmber.nombre}</td>
                <td class:"textColor"> ${squarYellowAmber.precio}</td>
                <td><button class="buttonColor" id="removeSquarYellowAmber">X</button></td>
            </tr>`)
            localStorage.setItem("squarYellowAmberCar", 2)
            console.log(localStorage.getItem("squarYellowAmberCar"))
            squares.push(squarYellowAmber.precio)


            total=squares.reduce((a, b) => a + b, 0);
            let squareTotal = total
            document.getElementById("cartSpamTotal").innerHTML = squareTotal

            $("#removeSquarYellowAmber").click(function(){
                $("#squarYellowAmber").remove()


                squares.push(-3600)
                total=squares.reduce((a, b) => a + b, 0);
                let squareTotal = total
                document.getElementById("cartSpamTotal").innerHTML = squareTotal    
                console.log(squares)

                localStorage.setItem("squarYellowAmberCar", 1)
            })


            return localStorage.getItem("squarYellowAmberCar")
        }if (localStorage.getItem("squarYellowAmberCar") == 2) {
            $("#productBuyBefore").fadeIn(0)
            $("#productBuyBefore").fadeOut(3000)
        }
})
})
$("#squareTopazGoldenImg").click(function(){ /* funcionalidad del boton de agregar al carrito y spam en el carrito */
    $("#squareTopazGoldenFeatures").toggle(`0`)
    $("#buySquareTopazGoldenButton").click(function(){
        if (localStorage.getItem("squareTopazGoldenCar") == 1) {
            $("#productAddSucces").fadeIn(0)
            $("#productAddSucces").fadeOut(3000)
            $("#cartTable").append(`
            <tr class="tablaTitulo" id="squareTopazGolden">
                <td><div class="squareTopazGoldenCartImg"></div></td>
                <td class:"textColor">${squareTopazGolden.nombre}</td>
                <td class:"textColor">${squareTopazGolden.precio}</td>
                <td><button class="buttonColor" id="removeSquareTopazGolden">X</button></td>
            </tr>`)
            localStorage.setItem("squareTopazGoldenCar", 2)
            squares.push(squareTopazGolden.precio)


            total=squares.reduce((a, b) => a + b, 0);
            let squareTotal = total
            document.getElementById("cartSpamTotal").innerHTML = squareTotal

            $("#removeSquareTopazGolden").click(function(){
                $("#squareTopazGolden").remove()

                squares.push(-5500)
                total=squares.reduce((a, b) => a + b, 0);
                let squareTotal = total
                document.getElementById("cartSpamTotal").innerHTML = squareTotal    
                console.log(squares)

                localStorage.setItem("squareTopazGoldenCar", 1)
            })


            return localStorage.getItem("squareTopazGoldenCar")
        }if (localStorage.getItem("squareTopazGoldenCar") == 2) {
            $("#productBuyBefore").fadeIn(0)
            $("#productBuyBefore").fadeOut(3000)
        }
    })
})
})
})

$(document).ready(function(){
    fetch("./js/cubsFT.json") //trae los prodductos del json
    .then((response) => response.json())
    .then((cubs) => {
        let squarWhiteBlack = cubs [7];
        let squareBoneGrey = cubs [8]
        let squareBlackWhite = cubs [9]

    $("#whiteSquareContainer").append( /* spamea los productos en su lugar */
    `<div class="squareContainerProduct">
        <div class="squarWhiteBlackImg" id="squarWhiteBlackImg"></div>
        <div class="squareFeatures" id="squarWhiteBlackFeatures">
            <p class="textColor">Nombre:</p>
            <p class="textColor"><strong>${squarWhiteBlack.nombre}.</strong></p>
            <p class="textColor">Precio: ${squarWhiteBlack.precio}.</p>
            <button class="buttonColor" id="buySquarWhiteBlackButton">Agregar al carrito</button>
        </div>
    </div>
    <div class="squareContainerProduct">
        <div class="squareGreyBoneImg" id="squareGreyBoneImg"></div>
        <div class="squareFeatures" id="squareGreyBoneFeatures">
            <p class="textColor">Nombre:</p>
            <p class="textColor"><strong>${squareBoneGrey.nombre}.</strong></p>
            <p class="textColor">Precio: ${squareBoneGrey.precio}.</p>
            <button class="buttonColor" id="buySquareGreyBoneButton">Agregar al carrito</button>
        </div>
    </div>
    <div class="squareContainerProduct">
        <div class="squareBlackWhiteImg" id="squareBlackWhiteImg"></div>
        <div class="squareFeatures" id="squareBlackWhiteFeatures">
            <p class="textColor">Nombre:</p>
            <p class="textColor"><strong> ${squareBlackWhite.nombre}.</strong></p>
            <p class="textColor">Precio: ${squareBlackWhite.precio}.</p>
            <button class="buttonColor" id="buySquareBlackWhiteButton">Agregar al carrito</button>
        </div>
    </div>`
)
$("#squarWhiteBlackImg").click(function(){ /* funcionalidad del boton de agregar al carrito y spam en el carrito */
    $("#squarWhiteBlackFeatures").toggle(`0`)
    $("#buySquarWhiteBlackButton").click(function(){
        if (localStorage.getItem("squarWhiteBlackCar") == 1) {
            $("#productAddSucces").fadeIn(0)
            $("#productAddSucces").fadeOut(3000)
            $("#cartTable").append(`
            <tr class="tablaTitulo" id="squarWhiteBlack">
                <td><div class="squarWhiteBlackCartImg"></div></td>
                <td class:"textColor">${squarWhiteBlack.nombre}</td>
                <td class:"textColor">${squarWhiteBlack.precio}</td>
                <td><button class="buttonColor" id="removeSquarWhiteBlack">X</button></td>
            </tr>`)
            localStorage.setItem("squarWhiteBlackCar", 2)
            console.log(localStorage.getItem("squarWhiteBlackCar"))
            squares.push(squarWhiteBlack.precio)



            total=squares.reduce((a, b) => a + b, 0);
            let squareTotal = total
            document.getElementById("cartSpamTotal").innerHTML = squareTotal

            $("#removeSquarWhiteBlack").click(function(){
                $("#squarWhiteBlack").remove()

                squares.push(-2200)
                total=squares.reduce((a, b) => a + b, 0);
                let squareTotal = total
                document.getElementById("cartSpamTotal").innerHTML = squareTotal    
                console.log(squares)

                localStorage.setItem("squarWhiteBlackCar", 1)
            })

            return localStorage.getItem("squarWhiteBlackCar")
        }if (localStorage.getItem("squarWhiteBlackCar") == 2) {
            $("#productBuyBefore").fadeIn(0)
            $("#productBuyBefore").fadeOut(3000)
        }
    })
})
$("#squareGreyBoneImg").click(function(){ /* funcionalidad del boton de agregar al carrito y spam en el carrito */
    $("#squareGreyBoneFeatures").toggle(`0`)
    $("#buySquareGreyBoneButton").click(function(){
        if (localStorage.getItem("squareGreyBoneCar") == 1) {
            $("#productAddSucces").fadeIn(0)
            $("#productAddSucces").fadeOut(3000)
            $("#cartTable").append(`
            <tr class="tablaTitulo" id="squareGreyBone">
                <td><div class="squareGreyBoneCartImg"></div></td>
                <td class:"textColor">${squareContainer.nombre}</td>
                <td class:"textColor">${squareContainer.precio}</td>
                <td><button class="buttonColor" id="removeSquareGreyBonek">X</button></td>
            </tr>`)
            localStorage.setItem("squareGreyBoneCar", 2)
            console.log(localStorage.getItem("squareGreyBoneCar"))
            squares.push(squareContainer.precio)


            total=squares.reduce((a, b) => a + b, 0);
            let squareTotal = total
            document.getElementById("cartSpamTotal").innerHTML = squareTotal

            $("#removeSquareGreyBonek").click(function(){
                $("#squareGreyBone").remove()

                squares.push(-2000)
                total=squares.reduce((a, b) => a + b, 0);
                let squareTotal = total
                document.getElementById("cartSpamTotal").innerHTML = squareTotal    
                console.log(squares)

                localStorage.setItem("squareGreyBoneCar", 1)
            })

            return localStorage.getItem("squareGreyBoneCar")
        }if (localStorage.getItem("squareGreyBoneCar") == 2) {
            $("#productBuyBefore").fadeIn(0)
            $("#productBuyBefore").fadeOut(3000)
        }
    })
})
$("#squareBlackWhiteImg").click(function(){ /* funcionalidad del boton de agregar al carrito y spam en el carrito */
    $("#squareBlackWhiteFeatures").toggle(`0`)
    $("#buySquareBlackWhiteButton").click(function(){
        if (localStorage.getItem("squareBlackWhiteCar") == 1) {
            $("#productAddSucces").fadeIn(0)
            $("#productAddSucces").fadeOut(3000)
            $("#cartTable").append(`
            <tr class="tablaTitulo" id="squareBlackWhite">
                <td><div class="squareBlackWhiteCartImg"></div></td>
                <td class:"textColor">${squareBlackWhite.nombre}</td>
                <td class:"textColor"> ${squareBlackWhite.precio}</td>
                <td><button class="buttonColor" id="removeSquareBlackWhite">X</button></td>
            </tr>`)
            localStorage.setItem("squareBlackWhiteCar", 2)
            console.log(localStorage.getItem("squareBlackWhiteCar"))
            squares.push(squareBlackWhite.precio)


            total=squares.reduce((a, b) => a + b, 0);
            let squareTotal = total
            document.getElementById("cartSpamTotal").innerHTML = squareTotal

            $("#removeSquareBlackWhite").click(function(){
                $("#squareBlackWhite").remove()
                squares.push(-2200)

                total=squares.reduce((a, b) => a + b, 0);
                let squareTotal = total
                document.getElementById("cartSpamTotal").innerHTML = squareTotal    
                console.log(squares)

                localStorage.setItem("squareBlackWhiteCar", 1)
            })


            return localStorage.getItem("squareBlackWhiteCar")
        }if (localStorage.getItem("squareBlackWhiteCar") == 2) {
            $("#productBuyBefore").fadeIn(0)
            $("#productBuyBefore").fadeOut(3000)
        }
    })
    
})
})
})


$(document).ready(function(){ /* spam de las alertas */
    $("#spanproductsAlerts").append(`
    <div class="alert alert-success hidden" role="alert" id="productAddSucces">
    Se agrego a tu carrito de manera exitosa.
    </div>
    <div class="alert alert-warning hidden" role="alert" id="productBuyBefore">
    ¡Solo lo puedes comprar UNA vez! recuerda que son de existencia unica.
    </div>
    <div class="alert alert-warning hidden" role="alert" id="noProductsInCart">
    ¡No hay ningun producto en tu carrito!
    </div>
    <div class="alert alert-success hidden" role="alert" id="productSellSucces">
    <strogn>Gracias por comprar en ScuaresFT</strong>
    </div>
    `)
})
