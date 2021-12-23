const scrollWin = () => {
    const facebook = document.querySelector ('.facebook > svg > path');
    const instgram = document.querySelector ('.instgram > svg > path');
    const github = document.querySelector ('.github > svg > path');
    const divider = document.querySelector ('.sidepanel__divider');
    const text = document.querySelector ('.sidepanel__text');

    facebook.style.fill = '#000';
    instgram.style.fill = '#000';
    github.style.fill = '#000';
    divider.style.background = '#000';
    text.style.color = '#000';

    console.log(facebook);
    console.log(divider);
    console.log(text);
};

scrollWin();

/* <script>

arrowTop.onclick = function() {
  window.scrollTo(pageXOffset, 0);
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};

window.addEventListener('scroll', function() {
  arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});
</script> */

/* const scroll = () => {
    const siberpanel = document.querySelector('.siberpanel');

    goodsWrapper.innerHTML = '';

    goods.forEach((goodsItem) => {    
        goodsWrapper.insertAdjacentHTML('beforeend', `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">
                    ${goodsItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                    <div class="card-img-wrapper">
                        <span class="card-img-top"
                            style="background-image: url('${goodsItem.img}')">
                        </span>
                    </div>
                    <div class="card-body justify-content-between">
                        <div class="card-price">${goodsItem.price}</div>
                        <h5 class="card-title">${goodsItem.title}</h5>
                        <button class="btn btn-primary">В корзину</button>
                    </div>
                </div>
            </div>
        `);
    });
}; */