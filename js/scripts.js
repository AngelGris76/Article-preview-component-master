const button = document.getElementById('share__button');

button.addEventListener('click', (e) =>
{
    let target;
    
    if (e.target.classList.contains('article__link')) target = e.target;
    else
        if (e.target.classList.contains('share__icon')) target = e.target.parentElement;

    target.classList.toggle('article__link--active');
    target.children[0].classList.toggle('share__icon--active');
    target.parentElement.nextElementSibling.classList.toggle('tooltip--show');
})