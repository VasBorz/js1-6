// 1. Доработать функцию замены картинки в галерее таким образом,
// чтобы она проверяла наличие картинки по указанному в src адресу.

let imgs = [
    'space_1.jpg',
    'space_2.jpg',
    'space_3.jpg'
];


for(let i = 0; i <= imgs.length-1; i++){
    let el = document.createElement('img');

    el.src = 'images/small/' + imgs[i];
    el.setAttribute('data','images/' +imgs[i]);
    el.className = 'et__image_small';

    el.onclick = function(e){
        e.preventDefault();
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
        document.body.append(div);

    }

    document.body.append(el);
}


// 2. Реализовать модуль корзины. Создать блок товаров и блок корзины.
// У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины.
// Корзина должна уметь считать общую сумму заказа.




// 3. *Добавить в галерею функцию перехода к следующему изображению.
// По сторонам от большой картинки должны быть стрелки «вперед» и «назад», по нажатию на которые происходит замена изображения на следующее или предыдущее.