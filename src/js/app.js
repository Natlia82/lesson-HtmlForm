// TODO: write code here
const buttonClick = document.getElementsByClassName('buttonPopovers');
//const contener = document.querySelector('.contenerButton');
buttonClick[0].addEventListener('click', (e) => {
    if (document.querySelector('.form-hint')) {
        DeleteElemtnt();
        return;
    }
    AddElement(e);

});

//добавлнеи элемента
function AddElement(e) {
    let newElement = document.createElement('div');
    let newH2 = document.createElement('h4');
    newH2.classList.add('newH');
    newH2.textContent = 'ФСБ'; //.appendChild(document.createTextNode('ghghg'));
    newElement.classList.add('form-hint');
    newElement.textContent = e.target.getAttribute('data-text');
    const widthBut = e.target.clientWidth;
    newElement.style.width = `${widthBut}px`;
    newElement.insertAdjacentElement('afterbegin', newH2);
    e.target.insertAdjacentElement('afterbegin', newElement);
    // console.log(newElement);
}

//удаленеи элемента
function DeleteElemtnt() {
    const elem = document.querySelector('.form-hint');
    elem.remove();

}