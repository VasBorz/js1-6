// 1. Доработать функцию замены картинки в галерее таким образом,
// чтобы она проверяла наличие картинки по указанному в src адресу.

let imgs = [
    'space_1.jpg',
    'space_2.jpg',
    'space_3.jpg'
],
    divFirst = document.querySelector(".et_first_task");


for(let i = 0; i <= imgs.length-1; i++){
    let el = document.createElement('img');

    el.src = 'images/small/' + imgs[i];
    el.setAttribute('data','images/' +imgs[i]);
    el.className = 'et__image_small';

    el.onclick = function(e){
        let el = document.createElement('img'),
            div = document.createElement('div');

        div.className = 'et__image_wrap';
        el.className = 'et__image_big';
        el.src = e.target.attributes.data.value;
        div.onclick = function (e){
            div.remove();
        };
        el.onerror = function (e) {
            alert('Such Image does\'t existing');
            div.remove();
        };
        div.append(el);
        divFirst.append(div);

    }

    divFirst.append(el);
}


// 2. Реализовать модуль корзины. Создать блок товаров и блок корзины.
// У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины.
// Корзина должна уметь считать общую сумму заказа.

let divSecond = document.querySelector(".et_second_task__products");
let products = {
    product1 : ['9390390802_2_1_8.jpg', 'Rag & Bone Beck Coat', 249.33],
    product2 : ['9596322500_2_1_8_2.jpg', 'Oversize Drawstring Sweatshirt', 54.78],
    product3 : ['9714513505_2_1_8.jpg', 'Basic Short Sleeve T-shirt', 354.99]
};

for (let key in products){
    let el = document.createElement('div'),
        img = document.createElement('img'),
        h3 = document.createElement('h3'),
        span = document.createElement('span'),
        button = document.createElement('button');

    el.className = 'et_second_task__product';
    img.src = 'images/products/' + products[key][0];
    h3.innerHTML = products[key][1];
    span.innerHTML = products[key][2];
    button.innerHTML = 'Purchase';

    button.onclick = function(e){
        let price = e.target.parentNode.querySelector('span').cloneNode(true),
            img = e.target.parentNode.querySelector('img').cloneNode(true),
            title = e.target.parentNode.querySelector('h3').cloneNode(true),
            el = document.querySelector('.et_second_task__basket'),
            div = document.createElement('div');

        div.className = 'et_second_task__basket_product';
        div.append(img);
        div.append(title);
        div.append(price);
        div.onclick = function (e) {
           div.remove();
           total();
        };
        el.prepend(div);
        total();
    };

    el.append(img);
    el.append(h3);
    el.append(span);
    el.append(button);
    divSecond.append(el);
}

function total() {
    var el = document.querySelector('.et_second_task__basket_subtotal h2'),
        price = document.querySelectorAll('.et_second_task__basket .et_second_task__basket_product span'),
        total = 0;
    for (let i = 0; i <= price.length - 1; i++) {
        total += +price[i].innerHTML;
    }
     el.innerHTML = 'Subtotal: ' + total.toFixed(2);
}

// 3. *Добавить в галерею функцию перехода к следующему изображению.
// По сторонам от большой картинки должны быть стрелки «вперед» и «назад»,
// по нажатию на которые происходит замена изображения на следующее или предыдущее.