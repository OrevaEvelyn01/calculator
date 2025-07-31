const displays = document.querySelector("#show")
const nightLight = document.querySelector("#nightLight")
const theBody = document.querySelector("#cover")
const toggleLight = document.querySelector("toggleLight")
const sunLight = document.querySelector("#sunLight")
const numBtn = document.querySelectorAll(".numBtn")
const operBtn = document.querySelectorAll(".operBtn")
const equalBtn = document.querySelector("#equalsBtn")
const calcBody = document.querySelector("#calcBody")




const showDisplay = (input) => {
    displays.value += input

}
const clearDisplay = () => {
    displays.value = ""
}

const multiply = () => {
    displays.value += "x"
}
const divide = () => {
    displays.value += "\u00F7"
}
const squareRoot = () => {
    displays.value += "\u221a("
}

const calculate = () => {

    let expression = displays.value
    if (expression.includes("\u221a(") && !expression.includes(")")) {
        expression += ")";
    }
    expression = expression.replace(/x/g, "*").replace(/\u00F7/g, "/").replace(/\u221a/g, "Math.sqrt");



    try {
        displays.value = eval(expression)




    }
    catch (error) {
        displays.value = "Error"
        if (error) {
            setTimeout(() => {
                displays.value = ""

            }, 2000)
        }
    }

}






const deleteText = () => {
    let z = displays.value

    displays.value = z.slice(0, -1)
}

nightLight.addEventListener("click", () => {


    displays.classList.add("bg-zinc-700", "text-white")

    theBody.classList.add("bg-zinc-900")

    calcBody.classList.add("bg-zinc-800")


    for (let i = 0; i < numBtn.length; i++) {

        numBtn[i].classList.add("bg-zinc-600", "hover:bg-zinc-500" ,"text-white", "active:bg-zinc-600")
    }

    for (let i = 0; i < operBtn.length; i++) {

        operBtn[i].classList.add("bg-zinc-700", "hover:bg-zinc-600",  "active:bg-zinc-700")


    }


    equalBtn.classList.add("bg-zinc-500", "hover:bg-zinc-600" , "active:bg-zinc-500")
    
})




sunLight.addEventListener("click", () => {
    displays.classList.remove("bg-zinc-700", "text-white")

    theBody.classList.remove("bg-zinc-900")

    calcBody.classList.remove("bg-zinc-800")


    
    for (let i = 0; i < numBtn.length; i++) {

        numBtn[i].classList.remove("bg-zinc-600", "hover:bg-zinc-500" ,"text-white" , "active:bg-zinc-600")
    }

    for (let i = 0; i < operBtn.length; i++) {

        operBtn[i].classList.remove("bg-zinc-700", "hover:bg-zinc-600", "active:bg-zinc-700")


    }


    equalBtn.classList.remove("bg-zinc-500", "hover:bg-zinc-600" , "active:bg-zinc-500")
    
})


