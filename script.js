/*create grid container and grid*/
const container = document.querySelector('#gridContainer');

/*define grid size*/
let createGrid= (gridSize) =>{
    for (let i=0; i<(`${gridSize*gridSize}`); i++){
        const grid = document.createElement('div');
        grid.setAttribute('id','gridItem');
        container.appendChild(grid);
        
        /*event listener when  mouse is pressed*/
        grid.addEventListener('mousedown', () => {mouseDown = 'true'});
        grid.addEventListener('mouseup', () => {mouseDown = 'false'})

        container.setAttribute('style', 
        `grid-template-columns: repeat(${gridSize}, 1fr);grid-template-rows: repeat(${gridSize}, 1fr)`)
    }
}

/*creates random color*/
let randomColor = () =>{
    return Math.floor(Math.random()*1677215).toString(16).padEnd(6,2);
}

console.log(randomColor())
let rainbow= 'false';
let Rainbow=() => {rainbow= 'true';};
let BlackWhite = () => {rainbow= 'false'};

/*clears formatting */
let ClearFormating= () => {
    document.querySelectorAll('#gridItem')
        .forEach((e) => {
            e.style.backgroundColor = 'white';
        })
}

/*turn grid square black when mouse is over*/
let hover = () => {
    document.querySelectorAll('#gridItem')
        .forEach((e) =>{
        e.addEventListener('mouseover', () => {
            if (rainbow == 'false'){
                e.style.backgroundColor = 'black';
            } else if ( rainbow == 'true') {
                color = '#' + randomColor();
                console.log(color);
                e.style.backgroundColor = `${color}`; 
            
            }
        }); 
    });       
}
/*function to clear Grid*/
let reset = () => {
    document.querySelectorAll('#gridItem')
    .forEach((e) => e.parentNode.removeChild(e));
    
}

/*default grid size*/
createGrid(16);
hover()

/*select grid size*/
const gridBtn = document.querySelector('#gridPixel');
gridBtn.addEventListener('click', () => {
    reset();
    gridSize = prompt('Input grid size');
    createGrid(gridSize);
    hover();
    
}) 







