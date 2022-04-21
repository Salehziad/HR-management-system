let senior_sallary;
let mid_senior_sallary;
let junior_sallary;
let salary;
function Info(employeeId, name, department, level, image) {
    this.employeeId = employeeId;
    this.full_Name = name;
    this.department = department;
    this.level = level;
    this.image = image;
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
    
    document.getElementById("Full Name").innerHTML=this.full_Name
    document.getElementById("Employee ID").innerHTML=this.employeeId  
    document.getElementById("Department").innerHTML=this.department
    document.getElementById("Level").innerHTML=this.level
    document.getElementById("Salary").innerHTML=this.salary
    document.getElementById("user-img").setAttribute('src',this.image);
}

function myFunction1() {
    ghaziSamer.summary();
    document.getElementById("person-container").style.backgroundColor="#A1E3D8"
}
function myFunction2() {
    lanaAli.summary();
    document.getElementById("person-container").style.backgroundColor="#FFA1A1"
}
function myFunction3() {
    tamaraAyoub.summary();
    document.getElementById("person-container").style.backgroundColor="#E4AEC5"
}
function myFunction4() {
    safiwalid.summary();
    document.getElementById("person-container").style.backgroundColor="#A1E3D8"
}
function myFunction5() {
    omarzaid.summary();
    document.getElementById("person-container").style.backgroundColor="#332FD0"
}
function myFunction6() {
    ranasaleh.summary();
    document.getElementById("person-container").style.backgroundColor="#FC4F4F"
}
function myFunction7() {
    hadiahmad.summary();
    document.getElementById("person-container").style.backgroundColor="#65C18C"
}













// console.log(ghaziSamer);
// console.log(lanaAli);
// console.log(tamaraAyoub);
// console.log(safiwalid);
// console.log(omarzaid);
// console.log(ranasaleh);
// console.log(hadiahmad);



function seniorSallary() {
    senior_sallary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    senior_sallary=Math.round(senior_sallary-senior_sallary*0.075);
    return senior_sallary;
}

function midSeniorSallary() {
    mid_senior_sallary = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
    return mid_senior_sallary;
}

function juniorSallary() {
    junior_sallary = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    return junior_sallary;
}