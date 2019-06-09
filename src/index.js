/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (var i=0;i<array.length;i++) {
        fn(array[i], i, array);
    }

}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var arr=[];

    for (var i=0;i<array.length;i++) {
        arr.push(fn(array[i], i, array))
    }

    return arr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial='undefined') {
    var value;
    var i=0;

    if (initial=='undefined') {   
        value=array[0];
        i+=1;
    } else {
        value=initial;
    }
    for (i;i<array.length;i++) {
        value = fn(value, array[i], i, array)
    }

    return value;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
     upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    var arr=[];

    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            arr.push(i.toUpperCase())
        }
    }

    return arr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to=array.length) {
    var newarr=[];

    if (from<0) {
        from = array.length+from;
    }
    if (to<0) {
        to = array.length+to;
    }
    for (var i=from;i<to;i++) {
        newarr.push(array[i]);
    }

    return newarr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice
};
