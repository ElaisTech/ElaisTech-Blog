//Videorecensioni Table of contents - indice
const h2s = document.querySelectorAll('.videotitle');
const tocwrapper = document.createElement('div');

h2s.forEach(h2 => {
    const capturedh2 = document.createElement('a');
    const title = h2.innerText;
    const id = docunt.querySelector("id");
    capturedh2.innerText = title;
    capturedh2.href = id;

    tocwrapper.appendChild(capturedh2);
})
document.querySelector('.videorectoc').appendChild(tocwrapper);


//mostrare o nascondere sottomenu recensioni --> vedere video o leggere articoli?
const btn = document.querySelector('#recensioni');
const rec = document.querySelector('.recensioni1').style;

const showhide = () => {
    if (rec.display == "none") {
        rec.display = "flex"
    } else {
        rec.display = "none"
    }
}



//mostrare o nascondere sottomenu tutorial --> vedere video o leggere articoli?

const btn2 = document.querySelector('#tutorial');
const tut = document.querySelector('.tutorial1').style;

const showhide2 = () => {
    if (tut.display == "none") {
        tut.display = "flex"
    } else {
        tut.display = "none"
    }
};

btn2.addEventListener('click', showhide2);
btn.addEventListener('click', showhide);