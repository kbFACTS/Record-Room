const fill = document.querySelector('.fill');
const reset = document.querySelector('reset');
const empties = document.querySelectorAll('.empty');
const container = document.querySelector('.container');
var audio = new Audio('Sounds/indoor_playground.wav');

// Reset Button
// reset.addEventListener()

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

function dragStart() {
	this.className += ' hold';
	setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd(e) {
	this.className = 'fill2';
}

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Listeners for Container
container.addEventListener('dragover', dragOverCont);
container.addEventListener('dragenter', dragEnterCont);
container.addEventListener('dragleave', dragLeaveCont);
container.addEventListener('drop', dragDropCont);

// Drag Functions

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
  audio.play();
}

// Functions for Container

function dragOverCont(e) {
  e.preventDefault();
}

function dragEnterCont(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeaveCont() {
  this.className = 'container';
}

function dragDropCont() {
  this.className = 'container';
  this.append(fill);
}
