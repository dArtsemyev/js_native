// Event (событие)
// Генерирует объект, со сведениями о произошедшем событии
// Вызов функции с этим объектом в качестве параметра

//Объект события: (e / ev / event)
//Функция: handler (обработчик), listener (слушатель), subscriber (подписчик)

const sml = document.getElementById("small")
const mdm = document.getElementById("medium")
const big = document.getElementById("big")

function onClickHandler(e) { // e -> объект
    // console.log(e);
    // console.log(e.altKey); // доступ к одному из свойств объекта
    // console.log(e.target);
    e.stopPropagation() // Прерываем всплытие
    console.log(e.target, e.currentTarget);
    // console.log(this) // this тоже самое, что и e.currentTarget

}

// sml.addEventListener("click", onClickHandler)
sml.onclick = onClickHandler
mdm.onclick = onClickHandler
big.onclick = onClickHandler


// console.log(e.path) - Путь (вложенность)

// target
// console.log(e.target.id); // Если переместить в тело функции onClickHandler, должен вывести в консоли small
// e - ссылка на объект
// e.target - ссылка на элемент, который сгенерировал событие (который поймал клик)

// currentTarget
// e.currentTarget - ссылка на элемент, который вызвал обработчик в процессе всплытия в моменте
// {window {document {html {body {#big {#medium {#small}}}}}}} Вложенность элементов на html страничке
// Событие, которое происходит в дочернем элементе, автоматически происходит и в родительском элементе
// и так вверх по цепочке. Такая концепция - путь от дочернего элемента к родительскому, называется "Всплытие".

// bubbles: true
