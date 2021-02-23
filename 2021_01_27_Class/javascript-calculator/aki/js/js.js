
const questions = ["თქვენი ჩაფიქრებული პერსონაჟი კაცია?", "თქვენი პერსონაჟი ნამდვილად არსებობს?", "თქვენი პერსონაჟი თავისუფლად ლაპარაკობს ინგლისურად?", "თქვენი პერსონაჟი მსახიობია?","თქვენი პერსონაჟი მელოტია?", "თქვენი პერსონაჟი ადამიანია?","თქვენი პერსონაჟი ცნობილი იუთუბერია?","თქვენი პერსონაჟი ცნობილია?","თქვენი პერსონაჟი მუსიკოსია?","თქვენი პერსონაჟი გოგოა?","თქვენი პერსონაჟი რეპერია?","თქვენი პერსონაჟი 30 წელზე მეტისაა?","თქვენი პერსონაჟი მკვდარია?","თქვენი პერსონაჟი ნამდვილად არსებობს?"];

var random = Math.floor(Math.random() * questions.length);
var randomQuest = questions[random];
var question = document.getElementById("question");
var number = document.getElementById("questNumber");
var yes = document.getElementById("yes");

// question.innerHTML = randomQuest;

 
 function dachera(){
 	if( yes == yes){
 		question.innerHTML = randomQuest;
 	} else {
 		question.innerHTML = randomQuest;
 	}
 }


 