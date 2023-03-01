const nav = document.querySelector('.navbar-collapse');
const navBlock = document.querySelector('.navbar');
const logo = document.querySelector('.navbar-brand');
const links = document.querySelectorAll('.nav-link');
const navIcon = document.querySelector('.navbar-toggler');
const ouerDishes = document.querySelector(".conTent");
const curentDishesHtml = document.querySelector(".conTent").innerHTML;
let images = [];
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => images = json);

function changImagesOfCarusel() {
    let caruselImages = document.querySelectorAll('.caruselImg');
    caruselImages.forEach((item) => {
        item.src = getRandomItemFromArr(images).url;
    })
}

const navBack = () => {
    if (document.documentElement.scrollTop > 10) {
        nav.classList.add('bg-light');
        navBlock.style.background = '#f8f9fa'
        logo.classList.add('blackCol');
        navIcon.style.background = 'black';
        btn.style.display = "block";
        links.forEach(it => {
            it.classList.add('blackCol');
        });
    }
    if (document.documentElement.scrollTop < 40) {
        nav.classList.remove('bg-light');
        navBlock.style.background = 'none'
        logo.classList.remove('blackCol');
        navIcon.style.background = 'none';
        btn.style.display = 'none';
        links.forEach(it => {
            it.classList.remove('blackCol');
        })
    }
}

setTimeout(() => {
    changImagesOfCarusel();
}, 2000);
window.addEventListener('scroll', navBack);

const btn = document.querySelector('#scrollBtn');
btn.onclick = scrollTop;

function scrollTop() {
    document.documentElement.scrollTop = 0;
}

const loadMoreDishesBtn = document.querySelector('.btnForL');
loadMoreDishesBtn.onclick = newDishes;

function getRandomItemFromArr(arr) {
    return arr[Math.floor((Math.random() * arr.length))];
}

function backUp() {
    ouerDishes.innerHTML = curentDishesHtml;
    loadMoreDishesBtn.onclick = newDishes;
}

function newDishes() {
    let turget = `
    <div class="row justify-content-center mb-5 mt-5 lContent">
    <div class="w-100 px-2" style="max-width: 320px;">
        <div class="col">
            <div class="card border-0">
                <img class="card-img-top" style="height:200px;" src="${getRandomItemFromArr(images).url}" alt="img" />
                <div class="card-body">
                    <div class="row mb-2">
                        <div class="col">
                            <h5 class="mb-0">Lorem ipsum dolor sit amet consectetur</h5>
                        </div>
                        <div class="col-auto">
                            <span class="fs-4 font-serif text-black">$15</span>
                        </div>
                    </div>
                    <p class="mb-0">
                        In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="w-100 px-2" style="max-width: 320px;">
        <div class="col">
            <div class="card border-0">
                <img class="card-img-top" style="height:200px;" src="${getRandomItemFromArr(images).url}" alt="img" />
                <div class="card-body">
                    <div class="row mb-2">
                        <div class="col">
                            <h5 class="mb-0">Lorem ipsum dolor sit amet consectetur</h5>
                        </div>
                        <div class="col-auto">
                            <span class="fs-4 font-serif text-black">$15</span>
                        </div>
                    </div>
                    <p class="mb-0">
                        In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="w-100 px-2" style="max-width: 320px;">
        <div class="col">
            <div class="card border-0">
                <img class="card-img-top" style="height:200px;" src="${getRandomItemFromArr(images).url}" alt="img" />
                <div class="card-body">
                    <div class="row mb-2">
                        <div class="col">
                            <h5 class="mb-0">Lorem ipsum dolor sit amet consectetur</h5>
                        </div>
                        <div class="col-auto">
                            <span class="fs-4 font-serif text-black">$15</span>
                        </div>
                    </div>
                    <p class="mb-0">
                        In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>`
    ouerDishes.insertAdjacentHTML('beforeend', turget);
    loadMoreDishesBtn.onclick = backUp;
}
const reservBtn = document.querySelector('#resBtn')
reservBtn.onclick = sendFormInfo;


function sendFormInfo(e) {
    e.preventDefault();
    let name = document.querySelector('#user_name').value;
    let phone = document.querySelector('#user_phone').value;
    let email = document.querySelector('#user_email').value;
    let guests = document.querySelector('#guests').value;
    let date = document.querySelector('#date').value;
    let time = document.querySelector('#time').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ name: name, phone: phone, email: email, guests: guests, date: date, time: time })
    })
}