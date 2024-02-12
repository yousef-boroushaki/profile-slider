const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const allUser = document.querySelector(".all-user")

let container = document.querySelector(".container")
let imageSrc = document.querySelector(".image")
let info = document.querySelector(".info")
let firstName = document.querySelector(".first-name")
let lastName = document.querySelector(".last-name")


function profile(image, bio, fname, lname){
    this.image = image,
    this.bio = bio,
    this.fname = fname,
    this.lname =lname
}

let profiles = [];
let cnt = 0;

profiles.push(new profile("image/download (1).jfif", "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam possimus ad velit fugiat perferendis officia consequatur voluptates nostrum? Deserunt ullam animi, dolorum obcaecati a libero veritatis!", "Kevin", "Okaner"))
profiles.push(new profile("image/images.png", "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam possimus ad velit fug Deserunt ullam animi, dolorum obcaecati a libero veritatis!", "Micheal", "Townly"))
profiles.push(new profile("image/images.jfif", "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam possimus ad velit fugiat perferendis officia consequatur voluptates nosati a libero veritatis!", "David", "Foggy"))
profiles.push(new profile("image/download.jfif", "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam possimus ad velit fugiat perferendis officia consequatur voluptates nostrum? Deserunt ullam anim!", "Mona", "Olsen"))


imageSrc.src = profiles[cnt].image
info.innerHTML = profiles[cnt].bio
firstName.innerHTML = profiles[cnt].fname
lastName.innerHTML = profiles[cnt].lname


next.addEventListener('click', ()=>{

    cnt++;

    imageSrc.src = profiles[cnt].image
    info.innerHTML = profiles[cnt].bio
    firstName.innerHTML = profiles[cnt].fname
    lastName.innerHTML = profiles[cnt].lname

    if(cnt ==  3)
    cnt = -1;

})


prev.addEventListener("click", ()=> {
    
    cnt--;
    
    imageSrc.src = profiles[cnt].image
    info.innerHTML = profiles[cnt].bio
    firstName.innerHTML = profiles[cnt].fname
    lastName.innerHTML = profiles[cnt].lname
    
    if(cnt == 0)
        cnt = 4
})


allUser.addEventListener('click', ()=>{

    container.innerHTML = "";

    for(i of profiles){

        container.innerHTML += `
        <div class="box">
            <div class="slide">
                <img src="${i.image}"" class="image">
                <p>${i.bio}   </p>
                <div class="details">
                    <span class="first-name">${i.fname}</span>
                    <span class="last-name">${i.lname}</span>
                </div>
            </div>
        </div>
        `
    }


    container.style.display = "flex"
    container.style.flexDirection = "column"
    container.style.height = "100%"


})



