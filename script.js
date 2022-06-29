let quizdata=[
{
    question:'Which country gifetd the statue of liberty to USA in 1886',
    a:'UK',
    b:'Brazil',
    c:'Portugal',
    d:'France',
    correct:'d'
},
{
    question:'Which is the biggest ocean in the world',
    a:'Indian Ocean',
    b:'Atlantic Ocean',
    c:'Pacific Ocean',
    d:'Antartic Ocean',
    correct:'c'
},
{
    question:'Which country is also known as the an of rising sun',
    a:'India',
    b:'Belarus',
    c:'Japan',
    d:'Sourth Korea',
    correct:'c'
},
{
    question:'Total number of oceans in the world are?',
    a:'5',
    b:'6',
    c:'7',
    d:'4',
    correct:'c'
},
{
    question:'Which continent has the highest number of countries',
    a:'North America',
    b:'Africa',
    c:'Asia',
    d:'Europe',
    correct:'b'
},
];

let startbtn=document.getElementById("startbtn");
let card=document.getElementById("thecard");
let quest=document.getElementById("heading");
let option_a = document.getElementById("a_text");
let option_b = document.getElementById("b_text");
let option_c = document.getElementById("c_text");
let option_d = document.getElementById("d_text");
let submit=document.getElementById("submit");
let result=document.getElementById("result");
let a1=document.getElementById("a");
let b1=document.getElementById("b");
let c1=document.getElementById("c");
let d1=document.getElementById("d");



let selectedanswer=null;
let currentquestionnumber=0;
let score=0;




function loadquestion(){
  
    let currentquestion=quizdata[currentquestionnumber];

    quest.innerHTML=currentquestion.question;

    option_a.innerHTML=currentquestion.a;
    option_b.innerHTML=currentquestion.b;
    option_c.innerHTML=currentquestion.c;
    option_d.innerHTML=currentquestion.d;
    
    
    
}

submit.addEventListener('click',()=>{
    if(a1.checked){
        selectedanswer="a";
    }
    else if(b1.checked){
        selectedanswer="b";
    }
    else if(c1.checked){
        selectedanswer="c";
    }
    else if(d1.checked){
        selectedanswer="d";
    }
    let currentquestion1=quizdata[currentquestionnumber];

  if(currentquestion1.correct==selectedanswer){
      score++;
      console.log("hey");
  }
  else{
     score=score;
     console.log("hey its wrong");
  }
  

  currentquestionnumber++;
    if(currentquestionnumber<quizdata.length){
        deselectanswers()
       loadquestion()
    }
   else{
         result.innerHTML=`You have completed your quiz. Your score is ${score}`;
         result.style.display="block";
         card.style.display="none";
      
    }
});

function deselectanswers(){
    a1.checked=false
    b1.checked=false
    c1.checked=false
    d1.checked=false
}



startbtn.addEventListener('click',()=>{

        card.style.display="block";
        loadquestion();
        start.style.display="none";

})