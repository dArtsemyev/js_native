// Array methods

const students = [
	{
		name: "Bob",
		age: 22,
		isMarried: true,
		scores: 85,
	},
	{
		name: "Alex",
		age: 21,
		isMarried: true,
		scores: 89,
	},
	{
		name: "Nick",
		age: 20,
		isMarried: false,
		scores: 120,
	},
	{
		name: "John",
		age: 19,
		isMarried: false,
		scores: 100,
	},
]

// map
// Возвращает новый массив с тем же количеством элементов (модифицированных), что и в оригинальном
const mapFn = student => ({...student}) // создаем полную копию массива
const newArray = students.map(mapFn)
console.log(newArray);
console.log(students);

// Реализация своего метода map
function myMap(array, func) { // Функция (метод) map, массив, функция модификатор
	let newArray = []
	for (let i = 0; i < array.length; i++) {
		newArray[i] = func(array[i])
	}
	return newArray
}

console.log(myMap(students, mapFn));

// filter
// Возвращает новый массив с элементами удовлетворяющими услофиям фильтрации
const filterFn = student => student.isMarried
const filteredArray = students.filter(filterFn)
console.log(filteredArray);
console.log(students);

// Реализация своего метода filter
function myFilter(array, func) { // Функция (метод) filter, массив, функция модификатор
	let newArray = []
	for (let i = 0; i < array.length; i++) {
		if(func(array[i]) === true) {
		newArray.push(array[i])
		}
	}
	return newArray
}

console.log(myFilter(students, filterFn));

// find
// Возвращает первый (один) попавшийся элемент удовлетфоряющий условию поиска
const findFn = student => student.age === 21
const findItem = students.find(findFn)
console.log(findItem);
console.log(students);

// Реализация своего метода find
function myFind(array, func) { // Функция (метод) filter, массив, функция модификатор
	for (let i = 0; i < array.length; i++) {
		if(func(array[i]) === true) {
			return array[i]
		}
	}
}

console.log(myFind(students, findFn));

// some
// Возвращает true (либо false), если есть такой элемент в массиве (если нет)
console.log(student => student.name === "Bob")

// findIndex
// Возвращает индекс массива, если есть такой элемент в массиве
console.log(student => student.name === "Bob")
