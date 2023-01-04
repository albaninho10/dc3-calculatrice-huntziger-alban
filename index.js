let calcul = [];
let ecran = document.getElementById('ecrans');

document.addEventListener('click', (e) => {
    const value = e.target.textContent;
    calculer(value)
})

const calculer = (value) => {
    switch (value){
        case "=" :
            let calculStr = calcul.toString().replaceAll(',','').replaceAll('x', '*').replaceAll('÷', '/')
            if(!calculStr.includes("/0")){
                let result = eval(calculStr)
                ecran.innerHTML = result
                calcul = []
            }else{
                ecran.innerHTML = 'Division par 0 impossible'
            }
            break
        case "AC" :
            calcul = []
            break
        default : 
            ecran.innerHTML = value
            calcul.push(value)
        }
}