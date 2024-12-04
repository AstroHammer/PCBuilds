window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}


const jamesButton = document.querySelector('.james');
const nateButton = document.querySelector('.nate');
const jamesList = document.querySelector('.james-build');
const nateList = document.querySelector('.nate-build');

const jamesBGColor = document.querySelector('.james-bg');
const nateBGColor = document.querySelector('.nate-bg');
const jamesBGColorF = document.querySelector('.james-bg-F');
const nateBGColorF = document.querySelector('.nate-bg-F');

function addListeners() {
    jamesButton.addEventListener('click', showJamesList);
    nateButton.addEventListener('click', showNateList);
}
addListeners();

function showJamesList() {
    
    jamesBGColor.classList.add('fade-in-bg');
    jamesBGColorF.classList.add('fade-in-bg');
    nateBGColor.classList.remove('fade-in-bg');
    nateBGColorF.classList.remove('fade-in-bg');



    jamesButton.classList.add('selectedList');
    jamesList.classList.add('fade');
    nateButton.classList.remove('selectedList');
    jamesList.classList.remove('hide');
    nateList.classList.add('hide');
    nateList.classList.remove('fade');
}
function showNateList() {
    nateBGColor.classList.add('fade-in-bg');
    nateBGColorF.classList.add('fade-in-bg');
    jamesBGColor.classList.remove('fade-in-bg');
    jamesBGColorF.classList.remove('fade-in-bg');



    nateButton.classList.add('selectedList');
    nateList.classList.add('fade');
    jamesButton.classList.remove('selectedList');
    nateList.classList.remove('hide');
    jamesList.classList.add('hide');
    jamesList.classList.remove('fade');
}


