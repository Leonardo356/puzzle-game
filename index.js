let cell1 = document.querySelector('.cell1')
let cell2 = document.querySelector('.cell2')
let cell3 = document.querySelector('.cell3')
let cell4 = document.querySelector('.cell4')
let cell5 = document.querySelector('.cell5')
let cell6 = document.querySelector('.cell6')
let cell7 = document.querySelector('.cell7')
let cell8 = document.querySelector('.cell8')
let cell9 = document.querySelector('.cell9')
let cell10 = document.querySelector('.cell10')
let cell11 = document.querySelector('.cell11')
let cell12 = document.querySelector('.cell12')
let cell13 = document.querySelector('.cell13')
let cell14 = document.querySelector('.cell14')
let cell15 = document.querySelector('.cell15')
let cellcheck = document.querySelector('.cellCheck')
let stats = document.querySelector('.game')

let board = document.querySelector('.container')
let reset = document.querySelector('.reset')


const res = () => {
    window.location.reload();
}

reset.addEventListener('click', res)


const array = [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
]

let value = [1, 2, 3, 4, 5, 6,7 ,8 ,9, 10, 11, 12, 13, 14, 15]

function shuffle() {
    const shuffledArray = value.sort((a, b) =>  Math.random() -0.5)
}

shuffle()


function appendValues() {
cell1.innerHTML = value[0] 
cell2.innerHTML = value[1] 
cell3.innerHTML = value[2] 
cell4.innerHTML = value[3] 
cell5.innerHTML = value[4] 
cell6.innerHTML = value[5] 
cell7.innerHTML = value[6] 
cell8.innerHTML = value[7] 
cell9.innerHTML = value[8] 
cell10.innerHTML = value[9]
cell11.innerHTML = value[10]
cell12.innerHTML = value[11]
cell13.innerHTML = value[12]
cell14.innerHTML = value[13]
cell15.innerHTML = value[14]
}
appendValues()

array[0] = cell1.innerHTML 
array[1] = cell2.innerHTML 
array[2] = cell3.innerHTML 
array[3] = cell4.innerHTML 
array[4] = cell5.innerHTML 
array[5] = cell6.innerHTML 
array[6] = cell7.innerHTML 
array[7] = cell8.innerHTML 
array[8] = cell9.innerHTML 
array[9] = cell10.innerHTML
array[10] = cell11.innerHTML
array[11] = cell12.innerHTML
array[12] = cell13.innerHTML
array[13] = cell14.innerHTML
array[14] = cell15.innerHTML

cell1.content = 0
cell2.content = 1
cell3.content = 2
cell4.content = 3
cell5.content = 4
cell6.content = 5
cell7.content = 6
cell8.content = 7
cell9.content = 8
cell10.content = 9
cell11.content = 10
cell12.content = 11
cell13.content = 12
cell14.content = 13
cell15.content = 14
cellcheck.content = 15 

function pos() {
cell1.style.gridColumn = '1/2'
cell1.style.gridRow = '1/2'

cell2.style.gridColumn = '2/3'
cell2.style.gridRow = '1/2'

cell3.style.gridColumn = '3/4'
cell3.style.gridRow = '1/2'

cell4.style.gridColumn = '4/5'
cell4.style.gridRow = '1/2'

cell5.style.gridColumn = '1/2'
cell5.style.gridRow = '2/3'

cell6.style.gridColumn = '2/3'
cell6.style.gridRow = '2/3'

cell7.style.gridColumn = '3/4'
cell7.style.gridRow = '2/3'

cell8.style.gridColumn = '4/5'
cell8.style.gridRow = '2/3'

cell9.style.gridColumn = '1/2'
cell9.style.gridRow = '3/4'

cell10.style.gridColumn = '2/3'
cell10.style.gridRow = '3/4'

cell11.style.gridColumn = '3/4'
cell11.style.gridRow = '3/4'

cell12.style.gridColumn = '4/5'
cell12.style.gridRow = '3/4'

cell13.style.gridColumn = '1/2'
cell13.style.gridRow = '4/5'

cell14.style.gridColumn = '2/3'
cell14.style.gridRow = '4/5'

cell15.style.gridColumn = '3/4'
cell15.style.gridRow = '4/5'

cellcheck.style.gridColumn = '4/5'
cellcheck.style.gridRow = '4/5'
}

const checkArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', 0]



function setValue (element) {
    element.value = 0
    pos()

const valueEx = () => {

    if(stats.innerHTML != 'YOU WON') {
    if(
        element.content - 4 == cellcheck.content ||
        element.content + 4 == cellcheck.content ||
        element.content - 1 ==  cellcheck.content ||
        element.content + 1 == cellcheck.content  
    ) {
        let x = element.style.gridColumn 
        let y = element.style.gridRow 
        element.style.gridColumn = cellcheck.style.gridColumn 
        element.style.gridRow = cellcheck.style.gridRow 
        cellcheck.style.gridColumn = x
        cellcheck.style.gridRow = y
        let value = array[element.content]
        array[element.content] = array[cellcheck.content]
        array[cellcheck.content] = value
        let cont =  element.content
        element.content = cellcheck.content
        cellcheck.content = cont
        element.value = 0
    }
    }
    let checkEquality = checkArray.every((val, index) => val == array[index])
      if(checkEquality) stats.innerHTML = 'YOU WON'
      console.log(array)
}

    element.addEventListener('click', valueEx)

}

setValue(cell1)
setValue(cell2)
setValue(cell3)
setValue(cell4)
setValue(cell5)
setValue(cell6)
setValue(cell7)
setValue(cell8)
setValue(cell9)
setValue(cell10)
setValue(cell11)
setValue(cell12)
setValue(cell13)
setValue(cell14)
setValue(cell15)




