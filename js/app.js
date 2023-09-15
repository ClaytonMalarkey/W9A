let name = "Clateman";
let age = "38";
let isSubscribed = true;
let points = 1000;

if(isSubscribed == true){
    if(age >= 18){
        console.log("user " + name + " is " + age + " years of age and is subscribed is " + isSubscribed)
    }
    else{
        console.log("user is subscribed but not over 18")
    }
}else {
    if(age >= 18){
        console.log("user is of age but not subscribed")
    }
    else{
        console.log("user is not of age and is not subsccribed")
    }
}
if (isSubscribed == true && age >= 18 && points >= 100){
    console.log("congrats " + name);
}