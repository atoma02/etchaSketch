/*create grid container and grid*/
const container = document.querySelector('#gridContainer');

/*define grid size*/
let createGrid= (gridSize) =>{
    for (let i=0; i<(`${gridSize*gridSize}`); i++){
        const grid = document.createElement('div');
        grid.setAttribute('id','gridItem');
        container.appendChild(grid);
        
        /*event listener when  mouse is pressed*/
/*      grid.addEventListener('mousedown', () => {mouseDown = 'true'});
        grid.addEventListener('mouseup', () => {mouseDown = 'false'})
*/
        container.setAttribute('style', 
        `grid-template-columns: repeat(${gridSize}, 1fr);grid-template-rows: repeat(${gridSize}, 1fr)`)

    }
}

/*creates random color*/
let randomColor = () =>{
    return Math.floor(Math.random()*1677215).toString(16).padStart(6,'f');
}

let multiColor= 'false';

/**Rainbow button */
const rainbowBtn = document.querySelector('#rainbow');
rainbowBtn.addEventListener('mouseover', ()=>{
    rainbowBtn.style.backgroundColor = 'paleturquoise'
})
rainbowBtn.addEventListener('mouseout', ()=> {
    rainbowBtn.style.backgroundColor='palegoldenrod'
})
rainbowBtn.addEventListener('click', ()=>{
     multiColor='true';
})

/**Black and white button */
const blackWhiteBtn = document.querySelector('#blackWhite');
blackWhiteBtn.addEventListener('mouseover', ()=>{
    blackWhiteBtn.style.backgroundColor = 'paleturquoise'
})
blackWhiteBtn.addEventListener('mouseout', ()=> {
    blackWhiteBtn.style.backgroundColor='palegoldenrod'
})
blackWhiteBtn.addEventListener('click', ()=>{
     multiColor='false';
})

/*clears grid*/
let ClearGrid= () => {
    document.querySelectorAll('#gridItem')
        .forEach((e) => {
            e.style.backgroundColor = 'white';
        })
}

/**Reset button */
const resetBtn =document.querySelector('#clearGrid');
resetBtn.addEventListener('mouseover', ()=>{
    resetBtn.style.backgroundColor = 'paleturquoise'
})
resetBtn.addEventListener('mouseout', ()=> {
    resetBtn.style.backgroundColor='palegoldenrod'
})
resetBtn.addEventListener('click', ()=>{
    ClearGrid();
})

/**Grid size button */
const gridPixel = document.querySelector('#gridPixel');
gridPixel.addEventListener('click', () => {
    reset();
    gridSize = prompt('Input grid size');
    while (gridSize<16 || gridSize>64){
        gridSize = prompt('Please input a number between 16 and 64.');
    }
    createGrid(gridSize);
    hover();   
}) 

gridPixel.addEventListener('mouseover', ()=>{
    gridPixel.style.backgroundColor = 'paleturquoise'
})
gridPixel.addEventListener('mouseout', ()=> {
    gridPixel.style.backgroundColor='palegoldenrod'
})


/*turn grid square black when mouse is over*/
let hover = () => {
    document.querySelectorAll('#gridItem')
        .forEach((e) =>{
        e.addEventListener('mouseover', () => {
            if (multiColor == 'false'){
                e.style.backgroundColor = 'black';
            } else if ( multiColor == 'true') {
                color = '#' + randomColor();
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








