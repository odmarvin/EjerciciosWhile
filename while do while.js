/* MENÚ DE OPCIONES: DE CALCULADORA, DEBE MOSTRAR AL USUARIO LAS
OPCIONES POSIBLES Y ATRÁVES DEL CÓDIGO QUE ESCOJA EL USUARIO, DEBE PERMITIRLE REALIZAR ESA OPRACION. */
let opcionSeleccionada = prompt(`
        Escoja una opción para continuar
            1. CÁLCULO DE PROMEDIO DE NOTAS (4 NOTAS)
            2. CÁLCULO DE ÁREA DE UN RECTANGULO
            3. SUMA DE DOS NÚMEROS
            4. RETORNO DE NOMBRE DEL DÍA SEGÚN NÚMERO DE DÍA
            0. Salir
                              `)
do {
  switch(opcionSeleccionada){
  case '1':
    /* CÁLCULO DE PROMEDIO DE NOTAS (4 NOTAS) */
    let suma = 0
    let contador = 1
    let resultado = 0
    while (contador <= 4) {
      const nota = Number(prompt("Ingresa la nota " + (contador)))
      suma = nota + suma
      contador++
    }
    resultado = suma / 4
    console.log("El promedio es: " + resultado)
  break
  case '2':
    /* *CÁLCULO DE ÁREA DE UN RECTANGULO */
    let area = 0
    const largo = Number(prompt("Ingrese el largo del rectangulo"))
    const ancho = Number(prompt("Ingrese el ancho del rectangulo"))
    area = largo * ancho
    console.log("El area del es: " + area)
  break
  case '3':
    /* *SUMA DE DOS NÚMEROS */
    let resultadoSuma = 0
    const numeroUno = Number(prompt("Ingrese el primer numero a sumar"))
    const numeroDos = Number(prompt("Ingrese el segundo numero a sumar"))
    resultadoSuma = numeroUno + numeroDos
    console.log("La suma es: " + resultadoSuma)
  break
  case '4':
    /* *RETORNO DE NOMBRE DEL DÍA SEGÚN NÚMERO DE DÍA */
    const numeroDia = Number(prompt("Ingresa un número de día (1 a 7)"))
    let dia = ""
    switch (numeroDia) {
      case 1:
        dia = "Lunes"
        break
      case 2:
        dia = "Martes"
        break
      case 3:
        dia = "Miércoles"
        break
      case 4:
        dia = "Jueves"
        break
      case 5:
        dia = "Viernes"
        break
      case 6:
        dia = "Sábado"
        break
      case 7:
        dia = "Domingo"
        break
    }
    console.log("El día es: " + dia)
  break
  default:
                alert('Opción incorrecta')
  break
  }
    
    opcionSeleccionada = prompt(`
        Escoja una opción para continuar
            1. CÁLCULO DE PROMEDIO DE NOTAS (4 NOTAS)
            2. CÁLCULO DE ÁREA DE UN RECTANGULO
            3. SUMA DE DOS NÚMEROS
            4. RETORNO DE NOMBRE DEL DÍA SEGÚN NÚMERO DE DÍA
            0. Salir
    `)
} while(opcionSeleccionada != '0')

