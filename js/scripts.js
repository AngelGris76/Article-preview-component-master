const month = ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];
const main = document.getElementById('main');
const articleData =
{
    img: "../assets/images/drawers.jpg",
    title: "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
    text: "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.",
    authorAvatar: "../assets/images/avatar-michelle.jpg",
    author: "Michelle Appleton",
    date: "2020-05-28"
}

const article = document.createElement('article');

article.id= "article"
article.classList.add('article');

article.innerHTML = `<div class="article__header">
                        <img alt="imagen del articulo" class="article__img" src="${articleData.img}">
                    </div>
                    <div class="article__body">
                        <h2 class="article__title">${articleData.title}</h2>
                        <p class="article__text">${articleData.text}</p>
                    </div>  
                    <footer class="article__footer">
                        <div class="article__avatarcontainer">
                            <img alt="Author avatar" src="${articleData.authorAvatar}" class="article__authoravatar">
                        </div>
                        <div class="article__createdata">
                            <h2 class="article__authorname">${articleData.author}</h2>
                            <time class="article__time" date="${articleData.date}">
                                ${articleData.date.substring(8,10)} 
                                ${month[parseInt(articleData.date.substring(5, 7))]} 
                                ${articleData.date.substring(0,4)}
                            </time>
                        </div>
                    </footer>
                    <div class="article__socials article__socials--hide">
                        <span class="article__socialtext">share</span>
                        <ul class="article__sociallist">
                            <li class="article__socialitem">
                                <a href="https://www.facebook.com" target="_blank" class="article__sociallink">
                                    <img class="article__socialicon" src="assets/images/icon-facebook.svg" alt="facebook icon">
                                </a>
                            </li>
                            <li class="article__socialitem">
                                <a href="https://www.twitter.com" target="_blank" class="article__sociallink">
                                    <img class="article__socialicon" src="assets/images/icon-twitter.svg" alt="twitter icon">
                                </a>
                            </li>
                            <li class="article__socialitem">
                                <a href="https://www.pinterest.com" target="_blank" class="article__sociallink">
                                    <img class="article__socialicon" src="assets/images/icon-pinterest.svg" alt="pinteres icon">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="sharebutton" class="article__sharebutton">
                        <img class="article__shareicon" alt="share Icon" src="assets/images/icon-share.svg">
                    </div>`

main.appendChild(article);

const sharebutton = document.getElementById('sharebutton')

sharebutton.addEventListener('click', () =>
{
    sharebutton.classList.toggle('article__sharebutton--active');
    sharebutton.children[0].classList.toggle('article__shareicon--active');
    sharebutton.previousElementSibling.classList.toggle('article__socials--hide');
});