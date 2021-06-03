var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
function likePhoto(numPhoto){
    if(numPhoto === 1){
        counter1++
        document.getElementById("likeCount1").innerHTML = counter1;
    } else if(numPhoto === 2){
        counter2++
        document.getElementById("likeCount2").innerHTML = counter2;
    } else if(numPhoto === 3){
        counter3++
        document.getElementById("likeCount3").innerHTML = counter3;
    } else if(numPhoto === 4){
        counter4++
        document.getElementById("likeCount4").innerHTML = counter4;
    } else {
        counter5++
        document.getElementById("likeCount5").innerHTML = counter5;
    }
} 
var user={
'name':"Ceddrick",
'name_last':"Chambers",
'followers':["ceddylove", "buffy", "Bee", "coco", "maji"],
'profile_pic':"https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F1242d542-d15f-11e8-b8d4-d6fb90acb7b1.jpg?crop=4740%2C2666%2C0%2C66&resize=1180",
'bio':"Hi my name is Ceddrick Chambers and this is my Catsagram,and it's about cats!!!!"
}
 setTimeout(function(){ document.getElementById("name").innerHTML = user.name;}, 3000);
 setTimeout(function(){ document.getElementById("name_last").innerHTML = user.name_last;}, 3000);
 setTimeout(function(){ document.getElementById("followers").innerHTML = "Followers: " + user.followers.length;}, 3000);
 setTimeout(function(){ $("#profile_pic").attr("src", user.profile_pic);}, 3000);
 setTimeout(function(){ document.getElementById("bio").innerHTML = user.bio;}, 3000);
 