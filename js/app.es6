let senior_sallary;
let mid_senior_sallary;
let junior_sallary;
let salary;
let allEmpInfo = [];
function Info(employeeId, name, department, level, image,salary) {
    this.employeeId = employeeId;
    this.full_Name = name;
    this.department = department;
    this.level = level;
    this.image = image;
    this.salary=salary
    allEmpInfo.push(this);
}
let ghaziSamer = new Info("1000", " SamGhazier", "Administration", "Senior","assest/ghazi.png")
let lanaAli = new Info("1001", "Lana Ali", "Finance", "Senior","assest/lana.png")
let tamaraAyoub = new Info("1002", "Tamara Ayoub", "Marketing", "Senior","assest/tamara1.png")
let safiwalid = new Info("1003", "Safi Walid", "Administration", "Mid-Senior","assest/safi.png")
let omarzaid = new Info("1004", "Omar Zaid", "Development", "Senior","assest/omar.png")
let ranasaleh = new Info("1005", "Rana Saleh", "Development", "Junior","assest/ranaa.jfif")
let hadiahmad = new Info("1006", "Hadi Ahmad", "Finance", "Mid-Senior","assest/hadi.png")



Info.prototype.summary = function () {
    if (this.level === "Senior") {
        this.salary = seniorSallary();
    } else if (this.level === "Mid-Senior") {
        this.salary = midSeniorSallary();
    } else {
        this.salary = juniorSallary();
    }

    console.log(this)

    
    document.getElementById("Full Name").innerHTML=this.full_Name
    document.getElementById("Employee ID").innerHTML=this.employeeId  
    document.getElementById("Department").innerHTML=this.department
    document.getElementById("Level").innerHTML=this.level
    document.getElementById("Salary").innerHTML=this.salary
    document.getElementById("user-img").setAttribute('src',this.image);
}
ghaziSamer.summary();
lanaAli.summary();
tamaraAyoub.summary();
safiwalid.summary();
omarzaid.summary();
ranasaleh.summary();
hadiahmad.summary();


Info.prototype.render = function () {
// alert("Hhhhhhh")
   
    fullName.textContent = this.full_Name; 


    department.textContent = this.department;
    level.textContent = this.level;
    if (this.level === "Senior") {
        this.salary = seniorSallary();
    } else if (this.level === "Mid-Senior") {
        this.salary = midSeniorSallary();
    } else {
        this.salary = juniorSallary();
    }
    img.textContent=this.image;

}
let sectionEl = document.getElementById("cardSection");
let formEl = document.getElementById("formID");
let select = document.getElementById("dep_option");
let select1 = document.getElementById("lvl_option");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {

    event.preventDefault();
    let idd=Info.prototype.id();
    let fullName = event.target.fullName.value;
    let department = event.target.dep_option.value
    let level=event.target.lvl_option.value
    let img =event.target.image.value;
    let newInfo = new Info(idd,fullName,department,level,img);
    newInfo.summary();


    saveData(allEmpInfo)
}
Info.prototype.id = function () {
    return Math.floor(1000 + Math.random() * 9000);  
};
function saveData(data) {

    let stringfiyData = JSON.stringify(data);
    localStorage.setItem("emplo", stringfiyData);
}

// console.log("before saving to ls", allEmpInfo);


function getData() {
    let retrievedData = localStorage.getItem("emplo");
    // console.log(retrievedData);
}
function getData() {
    let retrievedData = localStorage.getItem("emplo");
    // console.log(retrievedData);
    // console.log(typeof retrievedData);
    let arrayData = JSON.parse(retrievedData);
    // console.log(arrayData);
}

getData();





function seniorSallary() {
    senior_sallary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    senior_sallary=Math.round(senior_sallary-senior_sallary*0.075);
    return senior_sallary;
}
function midSeniorSallary() {
    mid_senior_sallary = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
    mid_senior_sallaryy=Math.round(mid_senior_sallary-mid_senior_sallary*0.075);
    return mid_senior_sallary;
}
function juniorSallary() {
    junior_sallary = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    junior_sallary=Math.round(junior_sallary-junior_sallary*0.075);
    return junior_sallary;
}
//************************************************************************* */
// console.log(allEmpInfo);