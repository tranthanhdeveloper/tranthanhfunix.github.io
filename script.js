"use strict"

const handleEmailSubmit = function(event) {
    emailSubmitInp.classList.remove("clr-red");
    let email = emailSubmitInp.value;
    if(regex.test(email)){
        blockPersonalInfo.classList.remove('hidden');
        submitEmailFormBlk.classList.add('hidden');
    } else{
        emailSubmitInp.classList.add("clr-red");
        alert("Hay nhập đúng địa chỉ email!")
    }
}

const handleViewMoreBtn = function(event) {
    console.log(event.target);
    let targetBlockId = event.target.getAttribute('data-target-block');
    let action = event.target.getAttribute('data-desire-action');
    if(action === 'view-more'){
        document.getElementById(targetBlockId).classList.remove('hidden');
        event.target.textContent="View Less";
        event.target.setAttribute('data-desire-action', 'view-less');
    }else
    if(action === 'view-less'){
        document.getElementById(targetBlockId).classList.add('hidden');
        event.target.textContent="View More";
        event.target.setAttribute('data-desire-action', 'view-more');
    }
    
}

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailSubmitBtn = document.querySelector(".email-submit-btn")
const emailSubmitInp = document.getElementById("exampleFormControlInput1");
const blockPersonalInfo = document.querySelector(".personal-info");
const submitEmailFormBlk = document.querySelector(".submit-email-form");
const viewmoreBtn = document.querySelectorAll(".viewmore-btn");

for (let index = 0; index < viewmoreBtn.length; index++) {
    viewmoreBtn[index].addEventListener('click', handleViewMoreBtn)
}

emailSubmitBtn.addEventListener('click', handleEmailSubmit)