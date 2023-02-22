window.onload = function (){
    // create a key value pair of colors
    const colors = {'orange':'rgb(232, 109, 22)',
                    'green':'rgb(15, 143, 15)',
                    'red':'rgb(249, 8, 8)'
                };
    // select a default background color
    var bg_color = colors ['orange'];
    // console.log(bg_color);
    // create a function that will draw a circle
    function create(event){
        // console.log('mouse click!');
        let el = document.createElement('p');
        let size = Math.floor(Math.random() * (200 - 10 + 1)) + 10;

        // add styles to el
        el.style.position = 'absolute';
        el.style.left = event.clientX + 'px';
        el.style.top = event.clientY + 'px';
        el.style.width = size + 'px';
        el.style.height = size + 'px';
        el.style.backgroundColor = bg_color;
        el.style.borderRadius = Math.floor(size / 2) + 'px';
        // add classname for the el
        el.className = 'round';

        // add el to the body after the last child
        document.body.appendChild(el);
    };
    // create an eventlistener for click to call the function create
    document.addEventListener("click",create);
    // create a function reset
    document.getElementById('reset').addEventListener('click', function(){
        window.location.reload();
    });
    // process the selected/clicked color and assigned it as background color
    var button = document.getElementsByClassName('btn');
    for (let i = 0; i < 3; i++) {
        button[i].onclick = function(e){
            e.stopPropagation();
            highlight(colors[this.innerText]);
        };
        
    }
    // create a function that will render the selected color as background and as highlight colors
    function highlight(color){
        bg_color = color;
        // set a highlight using shadow
        nodes = document.getElementsByClassName('round');
        for (let i = 0 ; i < nodes.length; i++){
            if(nodes[i].style.backgroundColor === bg_color){
            nodes[i].style.boxShadow = '10px 20px 30px black';
            }
        }
    }
    // create a function that will shrink the shapes and remove from the DOM
    shrink = function (){
        nodes = document.getElementsByClassName('round');
        for (let i = 0 ; i < nodes.length; i++){
            let height = nodes[i].style.height.replace('px', "");
            let width = nodes[i].style.width.replace('px', "");
            if (height <= 0) {
                nodes[i].remove();
            } else {
                nodes[i].style.height = Math.floor(height - 2/2) + "px";
                nodes[i].style.width = Math.floor(width - 2/2) + "px";
            }
        }
    }

    // calls the shrink function every after 75 milliseconds using setInterval
    setInterval(shrink, 75);
}