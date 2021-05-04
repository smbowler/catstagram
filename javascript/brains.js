var counter1 = 0;

var user = {
    name: 'Sam',
    name_last: 'Bowler',
    num_followers: ["Tim", "Tony", "Tom"],
    img_src:"https://i1.sndcdn.com/artworks-764zK4zLegDc6DVE-smz48Q-t500x500.jpg"
}

function likePhoto(){
        counter1++;
        console.log(counter1);
        document.getElementById("likeCount1").innerHTML = counter1;
}

setTimeout(function(){ document.getElementById("name").innerHTML = user.name;}, 3000);
setTimeout(function(){ document.getElementById("name_last").innerHTML = user.name_last;}, 3000);
setTimeout(function(){ document.getElementById("followers").innerHTML = "Followers: " + user.num_followers.length;}, 3000);
setTimeout(function(){ $("#profile_pic").attr("src", user.img_src);}, 3000);





