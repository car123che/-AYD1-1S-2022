const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({
        name: 'Análisis y Diseño 1',
        website: 'Práctica 1 - Grupo 3'
    })
})

router.get('/palindromo/:palabra',(req,res)=>{
    var palabra = req.params.palabra
    var pal = ""


    for(var i = palabra.length-1; i >= 0; i--){
        pal = pal + palabra[i]
    }


    if(palabra == pal){
        res.json({
            palindromo: true,
            "mensaje":"la palabra si es palíndromo"
        })
    }else{
        res.json({
            palindromo: false,
            "mensaje":"la palabra no es palíndromo"
        })
    }

})
router.get('/primo/:NUMERO', (req, res) => {
    var numero =req.params.NUMERO;
    if(numero == 2 || numero==3) {
        return res.json({
            "mensaje": `El número ${numero} es un número primo`
        })
    }
    if(numero <= 1 || numero % 2 == 0 || numero %3 == 0){
        return res.json({
            "mensaje": `El número ${numero} no es un número primo`
        })
    }
    for(var i = 5 ; i * i <= numero; i+=6){
        if(numero % i ==0 || numero % (i+2)==0){
            return res.json({
                "mensaje": `El número ${numero} no es un número primo`
            })
        }
    }
    return res.json({
        "mensaje": `El número ${numero} es un número primo`
    })
})


function fib(n) {
    if (n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
}


router.get('/potencia/:numero', (req = Request, res) => {

    const { numero } = req.params;

    const cubo = Math.pow(numero, 3);

    return res.json({
        "mensaje": `El resultado es: ${cubo}`
    })

})




// Fibonacci
router.get('/fibo/:numero', (req = Request, res) => {

    const { numero } = req.params

    const nfibo = fib(numero);
    return res.json({
        "mensaje": `El resultado es: ${nfibo}`
    })

})



// raiz cubica
router.get('/raiz/:numero', (req = Request, res) => {

    const { numero } = req.params;

    const cubica = Math.pow(numero, 1 / 3);

    return res.json({
        "mensaje": `El resultado es: ${cubica}`
    })

})


router.get('/potencia/:numero', (req = Request, res) => {

    const { numero } = req.params;

    const cubo = Math.pow(numero, 3);

    return res.json({
        potencia_cubo: cubo
    })

})


router.get('/multiplicacion/:num1/:num2', (req = Request, res) => {

    const respuesta  = req.params.num1 * req.params.num2;

    return res.json({
        mensaje: `La respuesta es ${ respuesta }`,
    })

})


router.get('/division/:dividendo/:divisor', (req = Request, res) => {

    var respuesta = req.params.dividendo / req.params.divisor;

    if(req.params.divisor == 0) {

        return res.json({
            "mensaje": `No se pueden realizar divisiones por 0`
        })
    }

    return res.json({
        "mensaje": `El resultado es: ${respuesta}`
    })

})


module.exports = {
    router,
}
