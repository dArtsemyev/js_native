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
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user}

//Проверка:
console.log(copyUser === user)
console.log(copyUser.friends === user.friends)

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]}

//Проверка:
console.log(deepCopyUser === user)
console.log(deepCopyUser.friends === user.friends)

//3. Поверхностная копия массива students
let copyStudents = [...students]

//Проверка:
console.log(copyStudents === students)
console.log(copyStudents[0] === students[0])

//4. Полная (глубокая) копия массива students
let deepCopyStudents = students.map(student => ({...student}))

//Проверка:
console.log(deepCopyStudents === students)
console.log(deepCopyStudents[0] === students[0])

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте deepCopyStudents по алфавиту (sort)
console.log(deepCopyStudents.sort((st1, st2) => st1.name > st2.name ? 1 : -1))
//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
console.log(deepCopyStudents.sort((st1, st2) => st2.scores - st1.scores))
//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = deepCopyStudents.filter(student => student.scores >= 100)
console.log(bestStudents)

//6a."Вырежьте" трёх лучших студентов из массива deepCopyStudents (splice)
let topStudents = deepCopyStudents.splice(0,3)
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-опреатор)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents]
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents =newDeepCopyStudents.filter(student => !student.isMarried)
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(student => student.name)
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - запятой (join)
// - пробелом (join)
let nameWithSpace = studentsNames.join(" ")
console.log(nameWithSpace)
let namesWithComma = studentsNames.join()
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = newDeepCopyStudents.map(student => ({...student, isStudent: true}))
console.log(trueStudents)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = newDeepCopyStudents.map(student => student.name === "Nick" ? {...student, isMarried: true} : {...student})
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = newDeepCopyStudents.find(student => student.name === "Ann")
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
let bestStudent = newDeepCopyStudents.reduce((stMax, st) => stMax > st ? st : stMax )
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = newDeepCopyStudents.reduce((acc, st) => acc += st.scores, 0)
console.log(scoresSum)

// 14.Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство friends,
// значением которого является массив имён всех остальных студентов из массива,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
function addFriends(students) {
    return students.map(student => {
        const studentsNames = students.map(student => student.name)
        const friendsNames = studentsNames.filter(studentName => studentName !== student.name)
        return {...student, friends: friendsNames}
    })
}
console.log(addFriends(students))