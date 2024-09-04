let box1 = document .getElementById('box1');
let box2 = document .getElementById('box2');
let box3 = document .getElementById('box3');
let box4 = document .getElementById('box4');
let box5 = document .getElementById ('box5');
let box6 = document .getElementById('score');
let submit = document.getElementById('submit');



let studentname = document .getElementById('studentname');
let studentage = document .getElementById('studentage');
let next =document.getElementById('next');
let next2=document.getElementById('next2');
let next3=document.getElementById('next3');

let previous=document.getElementById('previous');
let previous2=document.getElementById('previous2');
let finalsubmit=document.getElementById('finalsubmit');
let previous3=document.getElementById('previous3');

let answer1= document.getElementById('answer1');
let answer2= document.getElementById('answer2');
let answer3= document.getElementById('answer3');
let answer4= document.getElementById('answer4');



submit.addEventListener('click', function(){
    if(studentname.value === '' || studentage.value===''){
studentage.style.border='1px solid red';
studentname.style.border='1px solid red';
alert('please fill all fields properly');
    }else{
    studentage.style.border='2px solid green';
    studentname.style.border='2px soild green';
    alert('login sucessful');
box1.style.display = 'none';
box2.style.display = 'block';


    }
    
})

next.addEventListener('click', function(){
box2.style.display='none';
box3.style.display= 'block';

    
})



next2.addEventListener('click', function(){
    box3.style.display='none';
    box4.style.display= 'block';
    
        
    })


    next3.addEventListener('click', function(){
        box4.style.display='none';
        box5.style.display= 'block';
        
            
        })
    
        




    
    previous.addEventListener('click', function(){
        box2.style.display='block';
        box3.style.display= 'none';
        
            
        })
    

        previous2.addEventListener('click', function(){
            box3.style.display='block';
            box4.style.display= 'none';
            
                
            })
        
            
            previous3.addEventListener('click', function(){
                box4.style.display='block';
                box5.style.display= 'none';
                
                    
                })      
            
            
                finalsubmit.addEventListener('click', function(){
                    box5.style.display='none';
                    score.style.display= 'block';
                    
                        
                    })      
                
                
                 function q1a()  {
                    answer1.value = 'Murtala muhammed'
                 } 


                 function q1b()  {
                    answer1.value = 'olusegun obasanjo'
                 }           

                 function q1c()  {
                    answer1.value = 'Bola ahmed tinubu'
                 } 

                 function q1d()  {
                    answer1.value = 'peter obi'
                 }    

                 
                 function q2a()  {
                    answer2.value = 'java script'
                 } 


                 function q2b()  {
                    answer2.value = 'css'
                 }           

                 function q2c()  {
                    answer2.value = 'php'
                 } 

                 function q2d()  {
                    answer2.value = 'java'
                 }    



                 function q3a()  {
                    answer3.value = 'red and orange'
                 } 


                 function q3b()  {
                    answer3.value = 'yellow and purple'
                 }           

                 function q3c()  {
                    answer3.value = 'gold and purple'
                 } 

                 function q3d()  {
                    answer3.value = 'Yellow and Red'
                 }    

                 function q4a()  {
                    answer4.value = 'casscade style sheet'
                 } 


                 function q4b()  {
                    answer4.value = 'casacading style sheet'
                 }           

                 function q4c()  {
                    answer4.value = 'cascade styling sheet'
                 } 

                 function q4d()  {
                    answer4.value = 'cascading style sheet'
                 }    



                 
function submitfunc() {
let score = 0;
if(answer1.value === 'Bola ahmed tinubu') {
   score++;
}if (answer2.value === 'css') {
   score++;
}if (answer3.value === 'Yellow and Red'){
   score++;
}if (answer4.value === 'cascading style sheet'){
   score++;
}
setTimeout(() => {
   box6.innerHTML =(`Dear ${studentname.value},you scored ${score} out of 4`);
  
}, 3000);
}