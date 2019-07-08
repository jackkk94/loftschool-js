/* ДЗ 6 - Асинхронность и работа с сетью */
/*
 Задание 1:

 Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунду

 Пример:
   delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
 */
function delayPromise(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    })
}

/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов можно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
   loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */
function loadAndSortTowns() {
    return new Promise(resolve => {
        var req = new XMLHttpRequest();

        req.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', true);
        req.responseType = 'json'
        req.onload = function () {
            let arr=[]

            for (var i=0;i<req.response.length;i++) {
                arr.push(req.response[i].name)
            }
            arr=arr.sort()
            var arr1=[]

            for (var j=0;j<arr.length;j++) {
                arr1.push({ 'name': arr[j] })  
            }
            resolve(arr1)
        };
        req.send();
    })
}

export {
    delayPromise,
    loadAndSortTowns
};
