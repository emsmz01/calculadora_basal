const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    let flujo, mantenimiento;
    if (DATO > 0){
        ERROR.style.display = 'none';
        if(DATO>30){
            flujo= calcFlujo(DATO, 1500) +' o '+ calcFlujo(DATO, 2000) ;
            mantenimiento= calcFlujo(DATO, 1500)*1.5 +' o '+calcFlujo(DATO, 2000)*1.5; 
        }
        else{
            flujo = calcFlujo(DATO);
            mantenimiento = flujo*1.5;
        }
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})

function calcFlujo(peso,opcion){
    if(peso<=30){
        return Math.round(holliday(peso)/24);
    }
    else{
        return Math.round(supCor(peso)*opcion);
    }
}

function holliday(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*20;
        resto -= aux;
        return flujo + 1500;
        } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*50;
        resto -= aux;
        return flujo + 1000;
        }
    return flujo += resto*100;
}
function supCor(peso){
    sc = ( (peso * 4) + 7) / (peso*1 + 90);
    return sc/24;
}