const testimonials = [
    {
        name: "Belvia N.",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        text: "Man, this thing is getting better and better as I learn more about it. If you aren't sure, always go for apple. The service was excellent. Thank you so much for your help.",
    },
    {
        name: "BelPaddy H.",
        photoUrl: "https://images.unsplash.com/photo-1516695554846-842fc913388e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHVzZXJ8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        text: "Apple impressed me on multiple levels. I just can't get enough of apple. I want to get a T-Shirt with apple on it so I can show it off to everyone. Apple is the next killer app. Apple is the most valuable business resource we have EVER purchased.",
    },
    {
        name: "Sisile F.",
        photoUrl: "https://images.unsplash.com/photo-1535931737580-a99567967ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60",
        text: "I would be lost without apple. It really saves me time and effort. apple is exactly what our business has been lacking.",
    },
];
const imgE1 = document.querySelector("img")
const textE1 = document.querySelector(".text")
const usernameE1 = document.querySelector(".username")

let = idx = 0;
updateTestimonial()

function updateTestimonial(){
    const {name, photoUrl, text} =
    testimonials[idx]    
    imgE1.src = photoUrl;
    textE1.innerText = text;
    usernameE1.innerText = name;
    idx++
    if(idx === testimonials.length){
        idx =0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 8000)
}