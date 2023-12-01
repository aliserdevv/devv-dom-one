const btn = document.querySelector('.btn'),
 input = document.querySelector('.input'),
 name = document.querySelector('.name');

btn.addEventListener('click' , () => {
    name.textContent += input.value
    input.value = ''
})

const okeyOK = document.querySelector('.okey'),
    put = document.querySelector('.input-one'),
    age = document.querySelector('.age');

okeyOK.addEventListener('click' , () => {
    age.innerHTML += put.value
    put.value = ''
})

// console.log(modalBtn.className)
// console.log(modalBtn.classList)
// modalBtn.classList.add()
// modalBtn.classList.remove()
// modalBtn.classList.replace()
// modalBtn.classList.toggle()



const oneBtn = document.querySelector('.btn-menu'),
    openBtn = document.querySelector('.open-btn'),
    closeBtn = document.querySelector('.close-btn'),
    menu = document.querySelector('.menu');

oneBtn.addEventListener('click', () => {
   if (menu.style.display === "none"){
       menu.style.display = 'block'
       menu.style.display ='flex'
       openBtn.style.display= 'none'
       closeBtn.style.display = 'block'
   }else {
       menu.style.display = 'none'
       closeBtn.style.display = 'none'
       openBtn.style.display = 'block'
   }
})




const modalBtnWe = document.querySelector('.modal-win-two'),
    heroWinWe = document.querySelector('.hero-win-two'),
    closeModalWe = document.querySelector('.close-modal-two');

modalBtnWe.addEventListener('click' , () => {
    heroWinWe.style.display = 'block'
    heroWinWe.style.display = 'flex'
})

closeModalWe.addEventListener('click' , () => {
    heroWinWe.style.display = 'none'
})




const btnOneR = document.querySelector('.modal-btn-one'),
    btnTwoR = document.querySelector('.modal-btn-two'),
    btnThreeR = document.querySelector('.modal-btn-three'),
imgR = document.querySelector('.modal-img');

btnOneR.addEventListener('click' , () => {
    imgR.classList.add('modal-img')
    imgR.classList.remove('modal-img-two')
    imgR.classList.remove('modal-img-three')
    btnOneR.style.background = '#04CE25'
    btnTwoR.style.background = '#D9D9D9'
     btnThreeR.style.background = '#D9D9D9'
})

btnTwoR.addEventListener('click' , () => {
    imgR.classList.add('modal-img-two')
    imgR.classList.remove('modal-img')
    imgR.classList.remove('modal-img-three')
    btnOneR.style.background = '#D9D9D9'
    btnTwoR.style.background = '#04CE25'
    btnThreeR.style.background = '#D9D9D9'
})

btnThreeR.addEventListener('click' , () => {
    imgR.classList.add('modal-img-three')
    imgR.classList.remove('modal-img')
    imgR.classList.remove('modal-img-two')
    btnOneR.style.background = '#D9D9D9'
    btnThreeR.style.background = '#04CE25'
    btnTwoR.style.background = '#D9D9D9'
})


const modalBtnZe = document.querySelector('.modal-win-one'),
    heroWinZe = document.querySelector('.hero-win-one'),
    closeModalZe = document.querySelector('.close-modal-one');

modalBtnZe.addEventListener('click' , () => {
    heroWinZe.style.display = 'block'
    heroWinZe.style.display = 'flex'
})

closeModalZe.addEventListener('click' , () => {
    heroWinZe.style.display = 'none'
})




const btnOneAs = document.querySelector('.modal-btn-one'),
    btnTwoAs = document.querySelector('.modal-btn-two'),
    btnThreeAs = document.querySelector('.modal-btn-three'),
    imgAs = document.querySelector('.modal-img');

btnOneAs.addEventListener('click' , () => {
    imgAs.classList.add('modal-img')
    imgAs.classList.remove('modal-img-two')
    imgAs.classList.remove('modal-img-three')
    btnOneAs.style.background = '#04CE25'
    btnTwoAs.style.background = '#D9D9D9'
    btnThreeAs.style.background = '#D9D9D9'
})

btnTwoAs.addEventListener('click' , () => {
    imgAs.classList.add('modal-img-two')
    imgAs.classList.remove('modal-img')
    imgAs.classList.remove('modal-img-three')
    btnOneAs.style.background = '#D9D9D9'
    btnTwoAs.style.background = '#04CE25'
    btnThreeAs.style.background = '#D9D9D9'
})

btnThreeAs.addEventListener('click' , () => {
    imgAs.classList.add('modal-img-three')
    imgAs.classList.remove('modal-img')
    imgAs.classList.remove('modal-img-two')
    btnOneAs.style.background = '#D9D9D9'
    btnThreeAs.style.background = '#04CE25'
    btnTwoAs.style.background = '#D9D9D9'
})



const modalBtnO = document.querySelector('.modal-win-three'),
    heroWinO = document.querySelector('.hero-win-three'),
    closeModalO = document.querySelector('.close-modal-home');


modalBtnO.addEventListener('click' , () => {
    heroWinO.style.display = 'block'
    heroWinO.style.display = 'flex'
})

closeModalO.addEventListener('click' , () => {
    heroWinO.style.display = 'none'
})

const modalInput = document.querySelector('.modal-input'),
    modalOk = document.querySelector('.modal-ok'),
    modalName = document.querySelector('.modal-name');

modalOk.addEventListener('click' , () => {
modalName.textContent += modalInput.value
    modalInput.value = ''
})

const surInput = document.querySelector('.input-one'),
    surOk = document.querySelector('.surname-ok'),
    surName = document.querySelector('.modal-surname') ;

surOk.addEventListener('click' , () => {
    surName.textContent += surInput.value
    surInput.value = ''
})

const ageInput = document.querySelector('.input-two'),
    ageOk = document.querySelector('.age-ok'),
    ageName = document.querySelector('.modal-age');

ageOk.addEventListener('click' , () => {
    ageName.textContent += ageInput.value
    ageInput.value = ''
})

const regionInput = document.querySelector('.input-three'),
    regionOk = document.querySelector('.region-ok'),
    regionName = document.querySelector('.modal-region')

regionOk.addEventListener('click' , () => {
    regionName.textContent += regionInput.value
    regionInput.value = ''
})


const professionInput = document.querySelector('.input-four'),
    professionOk = document.querySelector('.profession-ok'),
    professionName = document.querySelector('.modal-profession')

professionOk.addEventListener('click' , () => {
    professionName.textContent += professionInput.value
    professionInput.value = ''
})


const hobbyInput = document.querySelector('.input-five'),
    hobbyOk = document.querySelector('.hobby-ok'),
    hobbyName = document.querySelector('.modal-hobby')

hobbyOk.addEventListener('click' , () => {
    hobbyName.textContent += hobbyInput.value
    hobbyInput.value = ''
})


const friendsInput = document.querySelector('.input-six'),
    friendsOk = document.querySelector('.friends-ok'),
    friendsName = document.querySelector('.modal-friends')

friendsOk.addEventListener('click' , () => {
    friendsName.textContent += friendsInput.value
    friendsInput.value = ''
})








