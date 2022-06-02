window.addEventListener("DOMContentLoaded", () =>{
    console.log(`javascript is active`);

    document.querySelector('#js-number-entered').addEventListener('change', () =>{  
        document.querySelector("#js-display-error").classList.replace("show","hide");
        document.querySelector('tbody').innerHTML =``; // clear result display area
        const num = document.querySelector('#js-number-entered').value; // retrieve input
        // if input valid then fibonacci, else display error
        isEntryValid(num) ? generateFibonacci(num) : document.querySelector("#js-display-error").classList.replace("hide","show");
    })
});

// control that input is valid
const isEntryValid = (input) => {
    if(isNaN(parseInt(input))) return false; // check if a number 
    if(input && input.includes(',')) return false; // without ,
    if(input && input.includes('.')) return false; // without .
    if(input && parseInt(input) >= 0) return true; // positive number
};

// generate fibonacci series
const generateFibonacci = (n) => {
    window.fibArray = [0, 1];

    n = parseInt(n);
    if(n==0){
        window.fibArray.pop();
        postOutput();
    }
    
    if(n>=1){    
        for(let i = 1 ; i < n    ; i++){
            let newNum = window.fibArray[i-1]+window.fibArray[i];
            (window.fibArray).push(newNum);
        }
        postOutput();
    }
};

// post series to html
const postOutput = () => {
    let arr = window.fibArray;
    let rapport = 0;

    for(let i = 0 ; i < arr.length ; i++){

        // at index 0, all is 0
        if(i==0){arr[i-1]=0; rapport = 0}
        else {rapport = arr[i-1]/arr[i]};

        // odd rows darker
        if(i%2){
            document.querySelector('tbody').innerHTML += 
            `<tr class="darker-line">  
                <td> Rang ${i} </td>
                <td> ${arr[i]} </td>
                <td> ${arr[i-1]}/${arr[i]} </td>
                <td> ${rapport} </td>
            </tr>`;
        } else {
            document.querySelector('tbody').innerHTML += 
                `<tr>  
                    <td> Rang ${i} </td>
                    <td> ${arr[i]} </td>
                    <td> ${arr[i-1]}/${arr[i]} </td>
                    <td> ${rapport} </td>
                </tr>`;
        };
    };
    
};