const container = document.querySelector('.container');
const box = document.querySelector('.gridbox');
for (i = 0; i < 272; i++) {
    const div = document.createElement('div');
    div.classList.add('gridbox')
    container.appendChild(div);
}
function fillBox(e) {
    if(!e.target.classList.contains('gridbox')) return;
    e.target.classList.add('hovered');
}
function unfillBox(e) {
    if(!e.target.classList.contains('gridbox')) return;
    e.target.classList.remove('hovered');
}
container.addEventListener("mouseover", fillBox)
container.addEventListener("mouseout", unfillBox)