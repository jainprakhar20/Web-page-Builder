function createCard(tittle, cName, views, monthsold, duration, thumbnail) {

    // finish this finctiom
    let viewstr
    if(views>1000 && views<1000000){
        viewstr = views/1000 + "K";
    }else if(views > 1000000){
        viewstr = views/1000000 + "M";
    }else {
        viewstr = views;
    }

    let html = `<div class="card"> 
        <div class="image">
            <img src="${thumbnail}"
             alt="">
             <div class="capsule">${duration}</div>
        </div>
        <div class="a">
            <h1>${tittle}</h1>
            <p>${cName} . ${viewstr} views . ${monthsold} months ago</p>
        </div>
    </div>
`
document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML + html
}

createCard("Introduction to Backend | Sigma Web Dev Video #77 " , "CodeWithHarry  " ,
  560000  ,7  , "31.05 " ,"https://yt3.googleusercontent.com/ytc/AIf8zZTNiWLD2-Qw1eWFmRJkGBzfI-8oFNmYk5tBnpNurQ=s176-c-k-c0x00ffffff-no-rj-mo "
)

createCard("Introduction to Frontend | Sigma Web Dev Video #02 " , "CodeWithHarry  " ,
  560  ,5  , "11.05 " ,"https://yt3.googleusercontent.com/ytc/AIf8zZTNiWLD2-Qw1eWFmRJkGBzfI-8oFNmYk5tBnpNurQ=s176-c-k-c0x00ffffff-no-rj-mo "
)