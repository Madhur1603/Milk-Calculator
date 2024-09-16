function refresh() {
    // Get all input elements by class name and reset their values
    const inputElements = document.querySelectorAll('.ctnt_box');
    inputElements.forEach(input => {
        input.value = '';
    });

    // Get the result section and hide it
    document.getElementById('method').value = '60/40';
    const resultSection = document.querySelector('.result');
    resultSection.style.display = 'none';
}

function moveCursor(event, nextElementId) {
    if (event.key === "Enter") {
        event.preventDefault();
        const nextElement = document.getElementById(nextElementId);
        if (nextElement) {
            nextElement.focus();
        }
    }
}


function calc(){
    let ans = Number.parseFloat(document.getElementById('ans').value);
    let fat2 = Number.parseFloat(document.getElementById('fat').value);
    let rate = Number.parseFloat(document.getElementById('rate').value).toFixed(2);
    let milk = Number.parseFloat(document.getElementById('milk').value).toFixed(2);
    let method = document.getElementById('method').value;

    document.getElementsByName('type').forEach(radio => {
        if(radio.checked){
            let type = radio.value;
            console.log(type);
            if(type === 'CLR'){
                milkcal_CLR();
            }
            else if(type === 'SNF'){
                milkcal_SNF();
            }
        }
    })

    const resultSection = document.querySelector('.result');
    resultSection.style.display = 'block';


    function milkcal_CLR(){
        if(method === '60/40' ){

            let clr = ans;
            let fat = fat2*2/10;
            let snf1 = clr/4+0.14+fat;
            let snf = Math.floor(snf1 * 100) / 100;
            document.getElementById('snf').innerHTML = snf;
    
            let snf_kg = Math.floor(milk*snf/100 * 100) / 100;
            document.getElementById('snf/kg').innerHTML = snf_kg;
    
            let snf_kg_rate = Math.floor(rate*40/8.5 * 100) / 100;
            document.getElementById('snf/kg_rate').innerHTML = snf_kg_rate;
        
            let powder_value = Math.floor(snf_kg*snf_kg_rate * 100) / 100;
            document.getElementById('pow_val').innerHTML = powder_value;
    
    
            let fat_kg = Math.floor(fat2*milk/100 * 100) / 100;
            let fat_kg_rate = Math.floor(rate*60/6.5 * 100) / 100;
            document.getElementById('fat/kg').innerHTML = fat_kg;
            document.getElementById('fat/kg_rate').innerHTML = fat_kg_rate;
            let fat_value = Math.floor(fat_kg*fat_kg_rate * 100) / 100;
            document.getElementById('fat_value').innerHTML = fat_value;
    
            let ttl = (powder_value + fat_value).toFixed(2);
            document.getElementById('ttl_value').innerHTML = ttl;
        }
        else if(method === '52/48'){
    
            let clr=ans;
            let fat = fat2*2/10;
            let snf1 = clr/4+0.14+fat;
            let snf = Math.floor(snf1 * 100) / 100;
            document.getElementById('snf').innerHTML = snf;
    
            let snf_kg = Math.floor(milk*snf/100 * 100) / 100;
            document.getElementById('snf/kg').innerHTML = snf_kg;
    
            let snf_kg_rate = Math.floor(rate*48/9 * 100) / 100;
            document.getElementById('snf/kg_rate').innerHTML = snf_kg_rate;
        
            let powder_value = Math.floor(snf_kg*snf_kg_rate * 100) / 100;
            document.getElementById('pow_val').innerHTML = powder_value;
    
    
            let fat_kg = Math.floor(fat2*milk/100 * 100) / 100;
            let fat_kg_rate = Math.floor(rate*52/6.5 * 100) / 100;
            document.getElementById('fat/kg').innerHTML = fat_kg;
            document.getElementById('fat/kg_rate').innerHTML = fat_kg_rate;

            let fat_value = Math.floor(fat_kg*fat_kg_rate * 100) / 100;
            document.getElementById('fat_value').innerHTML = fat_value;
    
            let ttl = (powder_value + fat_value).toFixed(2);
            document.getElementById('ttl_value').innerHTML = ttl;
        }
    }


    function milkcal_SNF(){
        if(method === '60/40' ){

            let snf = ans.toFixed(2);
            document.getElementById('snf').innerHTML = snf;
    
            let snf_kg = Math.floor(milk*snf/100 * 100) / 100;
            document.getElementById('snf/kg').innerHTML = snf_kg;
    
            let snf_kg_rate = Math.floor(rate*40/8.5 * 100) / 100;
            document.getElementById('snf/kg_rate').innerHTML = snf_kg_rate;
        
            let powder_value = Math.floor(snf_kg*snf_kg_rate * 100) / 100;
            document.getElementById('pow_val').innerHTML = powder_value;
    
    
            let fat_kg = Math.floor(fat2*milk/100 * 100) / 100;
            let fat_kg_rate = Math.floor(rate*60/6.5 * 100) / 100;
            document.getElementById('fat/kg').innerHTML = fat_kg;
            document.getElementById('fat/kg_rate').innerHTML = fat_kg_rate;
            let fat_value = Math.floor(fat_kg*fat_kg_rate * 100) / 100;
            document.getElementById('fat_value').innerHTML = fat_value;
    
            let ttl = (powder_value + fat_value).toFixed(2);
            document.getElementById('ttl_value').innerHTML = ttl;
        }
        else if(method === '52/48'){
    
            let snf = ans.toFixed(2);
            document.getElementById('snf').innerHTML = snf;
    
            let snf_kg = Math.floor(milk*snf/100 * 100) / 100;
            document.getElementById('snf/kg').innerHTML = snf_kg;
    
            let snf_kg_rate = Math.floor(rate*48/9 * 100) / 100;
            document.getElementById('snf/kg_rate').innerHTML = snf_kg_rate;
        
            let powder_value = Math.floor(snf_kg*snf_kg_rate * 100) / 100;
            document.getElementById('pow_val').innerHTML = powder_value;
    

            let fat_kg = Math.floor(fat2*milk/100 * 100) / 100;
            let fat_kg_rate = Math.floor(rate*52/6.5 * 100) / 100;
            document.getElementById('fat/kg').innerHTML = fat_kg;
            document.getElementById('fat/kg_rate').innerHTML = fat_kg_rate;

            let fat_value = Math.floor(fat_kg*fat_kg_rate * 100) / 100;
            document.getElementById('fat_value').innerHTML = fat_value;
    
            let ttl = (powder_value + fat_value).toFixed(2);
            document.getElementById('ttl_value').innerHTML = ttl;
        }
    }   
}
