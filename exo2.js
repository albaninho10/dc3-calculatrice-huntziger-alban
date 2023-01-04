let calcul = [];
let ecran = document.getElementById('ecrans');

document.addEventListener('click', (e) => {
    const value = e.target.textContent;
    calculer(value)
})

const calculer = (value) => {
    switch (value){
        case "=" :
            for(let element of calcul){
                switch (element){
                    case "+" :
                        addition()
                        break
                    case '-':
                        soustraction()
                        break
                    case '÷':
                        division()
                        break
                    case 'x':
                        multiplication()
                        break
                    case 'xⁿ':
                        exposant()
                        break
                    default :
                }
            }
            break
        case "AC" :
            calcul = []
            ecran.innerHTML = "0"
            break
        default : 
            ecran.innerHTML = value
            calcul.push(value)
        }
}

const addition = () => {
    let addiotionCalcul = parseInt(calcul[0]) + parseInt(calcul[2])
    ecran.innerHTML = addiotionCalcul
    calcul = [addiotionCalcul]
}

const soustraction = () => {
    let soustractionCalcul = parseInt(calcul[0]) - parseInt(calcul[2])
    ecran.innerHTML = soustractionCalcul
    calcul = [soustractionCalcul]
}

const division = () => {
    let divisionCalcul = parseInt(calcul[0]) / parseInt(calcul[2])
    ecran.innerHTML = divisionCalcul
    calcul = [divisionCalcul]
}

const multiplication = () => {
    let multiplicationCalcul = parseInt(calcul[0]) * parseInt(calcul[2])
    ecran.innerHTML = multiplicationCalcul
    calcul = [multiplicationCalcul]
}

const exposant = () => {
    let exposantCalcul = Math.pow(parseInt(calcul[0]), parseInt(calcul[2]))
    ecran.innerHTML = exposantCalcul
    calcul = [exposantCalcul]
}