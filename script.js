const container = document.querySelector('#gridContainer');



let createGrid = () => {
    const grid = document.createElement('div');
    grid.setAttribute('id','gridItem');
    gridContainer.appendChild(grid);
}

for (let i=0; i<16; i++){
    createGrid();

}