/*--------------------------------------------------
    BMI Calculator
---------------------------------------------------*/
function calculateBMI(){
    var weight = document.bmiCalc.weight.value
    var height = document.bmiCalc.height.value
    
    if(weight > 0 && height > 0){
        var finalBmi = (weight/(height/100*height/100));
        document.bmiCalc.bmi.value = new Number(finalBmi).toFixed(2)
        
        if(finalBmi < 18.5){
            document.bmiCalc.meaning.value = "Недостаточный вес"
        }
        
        if(finalBmi > 18.5 && finalBmi < 25){
            document.bmiCalc.meaning.value = "Норма"
        }
        
        if(finalBmi > 25 && finalBmi < 30){
            document.bmiCalc.meaning.value = "Избыточный вес"
        }
        
        if(finalBmi > 30 && finalBmi < 35){
            document.bmiCalc.meaning.value = "Ожирение 1 степени"
        }
        
        if(finalBmi > 35){
            document.bmiCalc.meaning.value = "Ожирение 2 степени"
        }
        
    }else{
        alert ("Пожалуйста, заполните все поля")
    }
}