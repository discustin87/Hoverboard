const container = document.getElementById('container')
// const colors = ['#e74c3c','#8e44ad','#349db','#e67e22','#2ecc71',]
const colors = ['#FFFF00', '#FFFF33', '#F2EA02', '#E6FB04',	'#FF0000', '#FD1C03','#FF3300', '#FF6600', '#00FF00', '#00FF33', '#00FF66', '#33FF00', '#C724B1', '#44D62C']
const SQUARS = 500

for (let i = 0; i < SQUARS; i++) {
    const square = document.createElement('div');
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))
    
    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    
    setTimeout((e) => {
        element.style.boxShadow = '0 0 2px #000'
    }, 2000);
}


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}