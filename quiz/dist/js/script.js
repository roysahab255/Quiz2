//console.log("hello world");

 const quizDB = [
 
 {
 question: "Q1: PQRS is a rectangle. T is a point on PQ such that RTQ is an isosceles triangle and PT = 5QT. If the area of triangle RTQ is 12βπ sq.cm, then the area of the rectangle PQRS (in sq. cm) is:",  
a: "144β3",
b: "164β3",
c: "142β3" ,
d: "142",
 ans: "ans1"
 },
 
 {
 question: "Q2: If each side of an equilateral triangle is 12 cm, then its altitude is equal to:",
 a: "3βπ cm", 
 b: "3βπ cm ",
 c: "6βπ cm" ,
 d: "6βπ cm",
 ans: "ans3"
 },
 
 {
 question: "Q3: In a οABC, angle BAC = 900. If BC = 25cm, then what is length of the median AD?",
 a: "10 cm" ,
 b: "24 cm" ,
 c: "14.5 cm", 
 d: "12.5 cm",
 ans: "ans4"
 },
 
 {
 question: "Q4: 4. A chord of the larger among two concentric circles is of length 10 cm and it is tangent to the smaller circle. What is the area (in cm2) of the annular portion between the two circles?",
 a: "5Ο" ,
 b: "46", 
 c: "25Ο" ,
 d: "10Ο",
 ans: "ans3"
 },
 
 {
 question: "Q5: I is the incentre of οABC. If οBIC = 1080, then οA = ?",
  a: "540" ,
  b: "810" ,
  c: "720" ,
 d: "360",
 ans: "ans4"
}
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
	//console.log(quizDB[0].question);
	const questionlist = quizDB[questionCount];
	
	question.innerText = questionlist.question;
	
	option1.innerText = questionlist.a;
	option2.innerText = questionlist.b;
	option3.innerText = questionlist.c;
	option4.innerText = questionlist.d;
	
	}

loadQuestion();

const getCheckAnswer = ()=> {
	let answer;
	
	
	answers.forEach((curAnsElem) => {
		//return
		if(curAnsElem.checked){
			answer = curAnsElem.id;
			//console.log(answer);
		}
		
		});
		
		return answer;
	};
	
	const deselectAll = () => {
		answers.forEach((curAnsElem) => curAnsElem.checked = false );
		
	}

submit.addEventListener('click', () => {
	const checkedAnswer = getCheckAnswer();
	console.log(checkedAnswer);
	
	if(checkedAnswer === quizDB[questionCount].ans){
	score++;
	};
	
	questionCount++;
	
	deselectAll();
	
	if(questionCount < quizDB.length){
		loadQuestion();
	}else{
		showScore.innerHTML = `
		<h3> you scored ${score}/${quizDB.length}</h3>
		<button class="btn" onclick="location.reload()">Play Again</button>
		`;
		
		showScore.classList.remove('scoreArea');
	}
	});


 