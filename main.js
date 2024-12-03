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
    jamesButton.classList.add('selectedList');
    jamesList.classList.add('fade');
    nateButton.classList.remove('selectedList');
    jamesList.classList.remove('hide');
    nateList.classList.add('hide');
    nateList.classList.remove('fade');
    jamesBGColor.classList.remove('hide');
    jamesBGColor.classList.add('change-bg');
    nateBGColor.classList.add('hide');
    nateBGColor.classList.remove('change-bg');
    jamesBGColorF.classList.remove('hide');
    jamesBGColorF.classList.add('change-bg');
    nateBGColorF.classList.add('hide');
    nateBGColorF.classList.remove('change-bg');
}
function showNateList() {
    nateButton.classList.add('selectedList');
    nateList.classList.add('fade');
    jamesButton.classList.remove('selectedList');
    jamesList.classList.add('hide');
    nateList.classList.remove('hide');
    jamesList.classList.remove('fade');
    nateBGColor.classList.remove('hide');
    nateBGColor.classList.add('change-bg');
    jamesBGColor.classList.add('hide');
    jamesBGColor.classList.remove('change-bg');
    nateBGColorF.classList.remove('hide');
    nateBGColorF.classList.add('change-bg');
    jamesBGColorF.classList.add('hide');
    jamesBGColorF.classList.remove('change-bg');
}


