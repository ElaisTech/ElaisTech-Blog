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