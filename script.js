/*
1) Напишите функцию, которая возвращает последнюю цифру заданного числа, вместо цифры на выходе отобразить слово. 
    К примеру: 128 -> «восемь»
2) Напишите функцию, которая меняет цифры или слова в обратном порядке. Пример: 1024 -> 4201 или Английский -> йиксйилгнА.
3) Создать функцию - расширение, которая будет на входе принимать два объекта (objA и objB) и объединять их в один (objC)
4) Напишите функцию, которая найдет самого молодого человека в определенном массиве людей и выведет результат в виде ФИO. 
   У каждого человека должны быть firstName, lastName и age

5) Напишите функцию, которая группирует массив людей по первой букве имени и возвращает группы как объект JavaScript. 
   Желательно без использования циклов.

6) Создать функцию конструктор для товара, в котором должны быть свойства, методы и скрытые параметры 
   (маржа и она может быть разной в зависимости от типа товара).

7) Создать функцию для инициализации плеера, в которой в качестве аргумента будет приходить опции плеера, 
   другой аргумент передает тип устройства (desktop, laptop, tablet, mobile),
   где в зависимости от типа будут передаваться размеры плеера.*/

//1
function endNumb() {
    console.log('--------------------------------------1');
    var n = 1286784499038665;
    var arr = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    var t = String(n).split('');
    var num = t[t.length - 1];
    for (var i = 0; i < arr.length; i++){
        if (num == i){
            console.log(arr[i]);
        }
    }
}

//2
function reverse() {
    console.log('--------------------------------------2');
    var p = 543867956;
    console.log(p);
    var t = String(p).split('');
    t.reverse();
    var s = t.join('')
    console.log(s);
}

//3
function join(objA, objB) {
    console.log('--------------------------------------3');
     return console.log(Object.assign(objA, objB));
}

//4
function peoples() {
    console.log('--------------------------------------4');
    function compareAge(personA, personB) {
        return personA.age - personB.age;
    }
    var arrPeoples = [
        {firstName: "Alex", lastName: "A", age: 23},
        {firstName: "Georg", lastName: "G", age: 40},
        {firstName: "Adam", lastName: "A", age: 30},
        {firstName: "Violet", lastName: "V", age: 25},
        {firstName: "Keit", lastName: "K", age: 18},
    ];
    arrPeoples.sort(compareAge);
    console.log(arrPeoples[0].firstName + " " + arrPeoples[0].lastName);
}

//5
function  grupsPeoples() {
    console.log('--------------------------------------5');
    var arrP = ['Alex', 'Georg', 'Adam', 'Violet', 'Keit'];
    console.log(arrP);
    arrP.sort();
    console.log(arrP);
}

//6
function constrProd(name, colour, weight, size, price) {
    console.log('--------------------------------------6');
    this.name = name;
    this.colour = colour;
    this.weight = weight;
    this.size = size;
    this.price = price;//цена товара

    var selling_price = price;//присваеваем цену товара переменной "цена продажи". инкапсулируем
    var margin_on_the_goods = selling_price / 100 * 30;// наценка на товар (10% от цены)
    var cost_price = selling_price - margin_on_the_goods;//себестоимость товара


    this.getName = function () {
        return this.name;
    }
    this.setName = function (n) {
        this.name = n;
    }
    this.getColour = function () {
        return this.colour;
    }
    this.setColour = function (c) {
        this.colour = c;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.setWeight = function (w) {
        this.weight = w;
    }
    this.getSiz = function () {
        return this.size;
    }
    this.setSiz = function (s) {
        this.size = s;
    }
    this.getPrice = function () {
        return this.price;
    }
    this.setPrice = function (p) {
        this.price = p;
    }

    this.Margin = function() {
        var margin = (selling_price - cost_price)/cost_price*100;
        return margin;
    }
    this.MarkUp = function() {
        var mark_up = (selling_price - cost_price)/selling_price*100;
        return mark_up;
    }
    //Наценка = (Цена продажи - Себестоимость) / Себестоимость * 100
    //Маржа = (Цена продажи - Себестоимость) / Цена продажи * 100
}

//7

function player(opt, type) {
    console.log('--------------------------------------7');
    var o = new Object(opt);
    console.log(o);

    var t = new Object(type.desktop);
    console.log(t);
}
