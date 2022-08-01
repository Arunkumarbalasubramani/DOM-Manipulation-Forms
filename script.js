// const outputDisplay = document.createElement('h1');
// outputDisplay.innerText='';


// let initialCount = 10;
// setInterval(() => {
//         if(initialCount>0){
//                 // outputDisplay.innerText= initialCount;
//                 console.log(initialCount);
//                 initialCount --; 
//         //         if (initialCount === 0){
//         //                 outputDisplay.innerText='Happy New Year'
//         //         }
//          }
// }, 1000);	

//Creating a container div for all the Inputs
const inputContainer = document.createElement('div');
inputContainer.setAttribute('class','input-container')

//Creating a container div for  the table
const tableDiv = document.createElement('div')
tableDiv.classList.add('table-container')
const tableElement = document.createElement('table');
tableElement.setAttribute('class','table table-bordered')
tableElement.setAttribute('id','data-table')
const tHeadElement = document.createElement('tHead');
const headingRow = document.createElement('tr');

//Creating the Header row
let headings =['First Name','Last Name','Address','Pincode','Gender','Choice of Food','City','State','Country'];

headings.forEach((element)=>{
        const thElement = document.createElement('th');
        thElement.setAttribute('scope','col')
        thElement.innerText =element;
        headingRow.append(thElement);
})

const formElement = document.createElement('form');
formElement.setAttribute ('class','row g-3');



// Creating a Custom Function to create different Inputs
const customInputCreatorFn= (divClass,inputType, label, forValue)=>{
        const inputDiv = document.createElement('div');
        inputDiv.setAttribute('class',divClass)
        const labelElement = document.createElement('label') ;
        labelElement.innerText= label;
        labelElement.setAttribute('class','form-label');
        labelElement.setAttribute('for',forValue);
        const inputElement = document.createElement('input');
        inputElement.setAttribute('id',forValue);    
        inputElement.setAttribute('class','form-control');     
        inputElement.setAttribute ('type',inputType); 
        inputElement.setAttribute('placeholder', `Enter Your ${label}`) 
        inputDiv.append(labelElement, inputElement);
        formElement.append(inputDiv)
       
}
// Using Custom function to create inputs
 customInputCreatorFn('col-md-6','text','First Name ','inputFirstName')
 customInputCreatorFn('col-md-6','text','Last Name  ','inputLastName')
 customInputCreatorFn('col-12','text','Address ','inputAddress')   
 customInputCreatorFn('col-md-2','number','Pin Code ','inputZip')  
 customInputCreatorFn('col-md-6','text','City ','inputCity')
 customInputCreatorFn('col-md-4','text','State ','inputState')
 customInputCreatorFn('col-md-4','text','Country ','inputCountry')

 // Creating a Custom Function to create Radio Inputs

 const radioDivElement = document.createElement('div');
 const helpText = document.createElement('h6');
 helpText.innerText ='Choose Your Gender'
 radioDivElement.setAttribute('class','radio-div');
 const checkboxDiv = document.createElement('div');
 checkboxDiv.setAttribute('class','checkbox-div');
radioDivElement.append(helpText);

  // Creating a radio and Check Box using the Custom Function 
 const createSpecialInput =(genderType, inputType )=>{
        const genderDiv = document.createElement('div');
        genderDiv.setAttribute('class','form-check') 
        const genderInput = document.createElement('input');
        genderInput.setAttribute('id',genderType);    
       ;     
        genderInput.setAttribute ('type',inputType); 
        genderInput.setAttribute ('value',genderType);   
        const genderLabel = document.createElement('label') ;
        genderLabel.innerText= genderType;
     
        genderLabel.setAttribute('for',genderType);

     
       if(inputType ==='radio'){
        genderInput.setAttribute('name','gender')
        genderInput.setAttribute('class','form-radio-input')
        genderLabel.setAttribute('class','form-radio-label');
        genderDiv.append(genderInput,genderLabel)
        radioDivElement.append(genderDiv)
        formElement .append(radioDivElement);
       }else if(inputType ==='checkbox'){
        genderInput.setAttribute('name','foodChoice')
        genderInput.setAttribute('class','form-check-input')
        genderLabel.setAttribute('class','form-check-label');
        genderDiv.append(genderInput,genderLabel)
        checkboxDiv.append(genderDiv)
        formElement .append(checkboxDiv);
       }
   
}
createSpecialInput('Male','radio',);
createSpecialInput('Female','radio');
createSpecialInput('Not_Specify','radio')
const paraElement2 = document.createElement('p');
paraElement2.innerText='Choose Any two Food Cuisine'
checkboxDiv.append(paraElement2);
createSpecialInput('South Indian Cuisine','checkbox')
createSpecialInput('Chettinad Cuisine','checkbox')
createSpecialInput('Kongu Nadu Cuisine ','checkbox')
createSpecialInput('Malabar Cuisine ','checkbox')
createSpecialInput('Hyderabadi Indian','checkbox')

       


 //Creating a Button for submit
        const buttonDiv = document.createElement('div')
        buttonDiv.setAttribute('class','col-12');
        const buttonElement = document.createElement('button');
        buttonElement.setAttribute('type','button');

        buttonElement.setAttribute('class','btn btn-secondary');
        buttonElement.innerText ='Add to Table';
        buttonDiv.append(buttonElement);
        formElement.append( buttonDiv)


// Appending Everything
inputContainer.append(formElement)

tHeadElement.append(headingRow);
tableElement.append(tHeadElement);
tableDiv.append(tableElement)
document.body.append(inputContainer,tableDiv)


// Adding the input Values to the Table.

buttonElement.addEventListener('click',(e)=>{
        e.preventDefault();
            
        const table = document.getElementById('data-table');
        const row = table.insertRow(-1);
        
        const fNameCell = row.insertCell(0);
        const lNameCell = row.insertCell(1);
        const addressCell = row.insertCell(2);
        const pincodeCell = row.insertCell(3);
        const genderCell = row.insertCell(4);
        const foodChoiceCell = row.insertCell(5);
        const cityCell = row.insertCell(6);
        const genderName = document.getElementsByName('gender');
        // console.log(genderName);
        Array.from (genderName).forEach(ele =>{
                        if(ele.checked){
                                genderCell.innerText =ele.value
                        }
        })
  
        
      const foodChoice = document.getElementsByClassName('form-check-input')
        let result =[];
                for (let i = 0; i < foodChoice.length; i++) {   
                       if(foodChoice[i].checked){
                        result.push(foodChoice[i].value);
                        foodChoiceCell.innerText=` ${result[0]}, ${result[1]}`
                       }
                        
                }
      
      
        const stateCell = row.insertCell(7);
        const countryCell = row.insertCell(8);
     

        fNameCell.innerText = document.getElementById('inputFirstName').value;
        lNameCell.innerText = document.getElementById('inputLastName').value;
        addressCell.innerText = document.getElementById('inputAddress').value;
        pincodeCell .innerText= document.getElementById('inputZip').value;
        cityCell .innerText= document.getElementById('inputCity').value;
        stateCell.innerText = document.getElementById('inputState').value;
        countryCell.innerText = document.getElementById('inputCountry').value;
        formElement.reset();
})


