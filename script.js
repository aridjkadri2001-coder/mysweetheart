let currentLang = "ar";

const translations = {

ar: {
academyName: "أكاديمية أساس التعليمية",
teacherName: "أريج قادري",
description: "دروس دعم ودروس خصوصية حضورية وأونلاين",

registrationTitle: "التسجيل في الأكاديمية",

name: "الاسم",
lastname: "اللقب",
phone: "رقم الهاتف",
email: "البريد الإلكتروني",

notes: "ملاحظات إضافية",

levelPlaceholder: "اختر الطور الدراسي",
yearPlaceholder: "اختر السنة الدراسية",

primary: "ابتدائي",
middle: "متوسط",
secondary: "ثانوي",

attendance: "حضوري",
online: "أونلاين",

arabic: "العربية",
english: "الإنجليزية",
french: "الفرنسية",
math: "الرياضيات",
computer: "الإعلام الآلي",

submit: "إرسال الطلب",

primaryYears: [
"السنة الأولى ابتدائي",
"السنة الثانية ابتدائي",
"السنة الثالثة ابتدائي",
"السنة الرابعة ابتدائي",
"السنة الخامسة ابتدائي"
],

middleYears: [
"السنة الأولى متوسط",
"السنة الثانية متوسط",
"السنة الثالثة متوسط",
"السنة الرابعة متوسط"
],

secondaryYears: [
"السنة الأولى ثانوي",
"السنة الثانية ثانوي",
"السنة الثالثة ثانوي"
]
},

fr: {
academyName: "Académie Asas Éducative",
teacherName: "Aridj Kadri",
description: "Cours de soutien en présentiel et en ligne",

registrationTitle: "Inscription à l'académie",

name: "Prénom",
lastname: "Nom",
phone: "Téléphone",
email: "Adresse e-mail",

notes: "Remarques",

levelPlaceholder: "Choisissez le niveau",
yearPlaceholder: "Choisissez l'année",

primary: "Primaire",
middle: "Collège",
secondary: "Lycée",

attendance: "Présentiel",
online: "En ligne",

arabic: "Arabe",
english: "Anglais",
french: "Français",
math: "Mathématiques",
computer: "Informatique",

submit: "Envoyer",

primaryYears: [
"1ère année primaire",
"2ème année primaire",
"3ème année primaire",
"4ème année primaire",
"5ème année primaire"
],

middleYears: [
"1ère année collège",
"2ème année collège",
"3ème année collège",
"4ème année collège"
],

secondaryYears: [
"1ère année lycée",
"2ème année lycée",
"3ème année lycée"
]
},

en: {
academyName: "Asas Educational Academy",
teacherName: "Aridj Kadri",
description: "Online and in-person tutoring",

registrationTitle: "Academy Registration",

name: "First Name",
lastname: "Last Name",
phone: "Phone Number",
email: "Email Address",

notes: "Additional Notes",

levelPlaceholder: "Choose Level",
yearPlaceholder: "Choose Year",

primary: "Primary",
middle: "Middle School",
secondary: "Secondary",

attendance: "In Person",
online: "Online",

arabic: "Arabic",
english: "English",
french: "French",
math: "Mathematics",
computer: "Computer Science",

submit: "Submit",

primaryYears: [
"Grade 1",
"Grade 2",
"Grade 3",
"Grade 4",
"Grade 5"
],

middleYears: [
"Year 1",
"Year 2",
"Year 3",
"Year 4"
],

secondaryYears: [
"Year 1 Secondary",
"Year 2 Secondary",
"Year 3 Secondary"
]
}
};

function setLang(lang){

currentLang = lang;

document.documentElement.lang = lang;
document.documentElement.dir =
lang === "ar" ? "rtl" : "ltr";

const t = translations[lang];

document.getElementById("academyName").textContent =
t.academyName;

document.getElementById("teacherName").textContent =
t.teacherName;

document.getElementById("academyDescription").textContent =
t.description;

document.getElementById("registrationTitle").textContent =
t.registrationTitle;

document.getElementById("name").placeholder =
t.name;

document.getElementById("lastname").placeholder =
t.lastname;

document.getElementById("phone").placeholder =
t.phone;

document.getElementById("email").placeholder =
t.email;

document.getElementById("notes").placeholder =
t.notes;

document.getElementById("submitBtn").textContent =
t.submit;

updateSelectTexts();
updateYears();
}

function updateSelectTexts(){

const t = translations[currentLang];

const level = document.getElementById("level");

level.innerHTML = `
<option value="">${t.levelPlaceholder}</option>
<option value="primary">${t.primary}</option>
<option value="middle">${t.middle}</option>
<option value="secondary">${t.secondary}</option>
`;

const studyType =
document.querySelector('select[name="نوع الدراسة"]');

if(studyType){

studyType.innerHTML = `
<option>${t.attendance}</option>
<option>${t.online}</option>
`;
}

const subject =
document.querySelector('select[name="المادة"]');

if(subject){

subject.innerHTML = `
<option>${t.arabic}</option>
<option>${t.english}</option>
<option>${t.french}</option>
<option>${t.math}</option>
<option>${t.computer}</option>
`;
}
}

function updateYears(){

const level =
document.getElementById("level").value;

const year =
document.getElementById("year");

const t =
translations[currentLang];

year.innerHTML =
`<option>${t.yearPlaceholder}</option>`;

let years = [];

if(level === "primary"){
years = t.primaryYears;
}

if(level === "middle"){
years = t.middleYears;
}

if(level === "secondary"){
years = t.secondaryYears;
}

years.forEach(item => {

const option =
document.createElement("option");

option.textContent = item;

year.appendChild(option);

});
}

window.onload = function(){
setLang("ar");
};