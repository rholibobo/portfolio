const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    // Buton click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // Section Active class
    allSections.addEventListener('click', (e) =>{
       let id = e.target.dataset.id; 
       if(id){
        // remove selected from the other button
        sectBtns.forEach((btn)=>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active')

        // Hide other sections
        sections.forEach((section)=>{
            section.classList.remove('active')
        })

        const element = document.getElementById(id);
        element.classList.add('active');
       }
    })

    // Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}

PageTransitions();

