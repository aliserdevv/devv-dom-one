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




const modalBtn = document.querySelector('.modal-win-two'),
    heroWin = document.querySelector('.hero-win-two'),
    closeModal = document.querySelector('.close-modal-two');

modalBtn.addEventListener('click' , () => {
    heroWin.style.display = 'block'
    heroWin.style.display = 'flex'
})

closeModal.addEventListener('click' , () => {
    heroWin.style.display = 'none'
})




const btnOne = document.querySelector('.modal-btn-one'),
    btnTwo = document.querySelector('.modal-btn-two'),
    btnThree = document.querySelector('.modal-btn-three'),
img = document.querySelector('.modal-img');

btnOne.addEventListener('click' , () => {
    img.classList.add('modal-img')
    img.classList.remove('modal-img-two')
    img.classList.remove('modal-img-three')
    btnOne.style.background = '#04CE25'
    btnTwo.style.background = '#D9D9D9'
     btnThree.style.background = '#D9D9D9'
})

btnTwo.addEventListener('click' , () => {
    img.classList.add('modal-img-two')
    img.classList.remove('modal-img')
    img.classList.remove('modal-img-three')
    btnOne.style.background = '#D9D9D9'
    btnTwo.style.background = '#04CE25'
    btnThree.style.background = '#D9D9D9'
})

btnThree.addEventListener('click' , () => {
    img.classList.add('modal-img-three')
    img.classList.remove('modal-img')
    img.classList.remove('modal-img-two')
    btnOne.style.background = '#D9D9D9'
    btnThree.style.background = '#04CE25'
    btnTwo.style.background = '#D9D9D9'
})


const modalBtn = document.querySelector('.modal-win-one'),
    heroWin = document.querySelector('.hero-win-one'),
    closeModal = document.querySelector('.close-modal-one');

modalBtn.addEventListener('click' , () => {
    heroWin.style.display = 'block'
    heroWin.style.display = 'flex'
})

closeModal.addEventListener('click' , () => {
    heroWin.style.display = 'none'
})




const btnOne = document.querySelector('.modal-btn-one'),
    btnTwo = document.querySelector('.modal-btn-two'),
    btnThree = document.querySelector('.modal-btn-three'),
    img = document.querySelector('.modal-img');

btnOne.addEventListener('click' , () => {
    img.classList.add('modal-img')
    img.classList.remove('modal-img-two')
    img.classList.remove('modal-img-three')
    btnOne.style.background = '#04CE25'
    btnTwo.style.background = '#D9D9D9'
    btnThree.style.background = '#D9D9D9'
})

btnTwo.addEventListener('click' , () => {
    img.classList.add('modal-img-two')
    img.classList.remove('modal-img')
    img.classList.remove('modal-img-three')
    btnOne.style.background = '#D9D9D9'
    btnTwo.style.background = '#04CE25'
    btnThree.style.background = '#D9D9D9'
})

btnThree.addEventListener('click' , () => {
    img.classList.add('modal-img-three')
    img.classList.remove('modal-img')
    img.classList.remove('modal-img-two')
    btnOne.style.background = '#D9D9D9'
    btnThree.style.background = '#04CE25'
    btnTwo.style.background = '#D9D9D9'
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








