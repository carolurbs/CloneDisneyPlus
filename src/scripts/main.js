document.addEventListener('DOMContentLoaded', function(){
    const buttons= document.querySelectorAll('[data-tab-button]');
    const tabsContainer=document.querySelectorAll('[data-tab-id]')
    const questions=document.querySelectorAll('[data-faq-question]'); //FAQ
    const heroSection= document.querySelector('.hero');
   const alturaHero= heroSection.clientHeight;
   window.addEventListener('scroll',function(){
   const posicaoAtual= this.window.scrollY;
   if(posicaoAtual<alturaHero)
    {
        ocultaElementosHeader();
    }
    else{
        exibeElementosHeader();
    }




   });
    for(let i=0; i<buttons.length;i++){
        buttons[i].addEventListener('click', function(botao){
            const absAlvo=botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${absAlvo}]`);
            escondeTodasAsAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');

        })
    }
/* For do faq */
    for(let i=0;i<questions.length; i++){
        questions[i].addEventListener('click',abreOuFechaResposta)

    }

})

function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai= elemento.target.parentNode;
    elementoPai.classList.toggle(classe);
}
function removeBotaoAtivo(){
    const buttons= document.querySelectorAll('[data-tab-button]');
    for(let i=0; i<buttons.length;i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }

}
function escondeTodasAsAbas() {
    const tabsContainer=document.querySelectorAll('[data-tab-id]')
    for(let i=0; i<tabsContainer.length;i++){
    tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

function ocultaElementosHeader(){
    const header=document.querySelector('header')
    header.classList.add('header--is-hidden');
}

function exibeElementosHeader(){
    const header=document.querySelector('header')
    header.classList.remove('header--is-hidden');
}