let sliders = document.querySelectorAll('input[type="range"]');

sliders.forEach(function(slider) {
  slider.addEventListener("input", generate);
})


function generate(){
  
  let size = sliders[0].value;
  let radius = sliders[1].value;
  let distance = sliders[2].value;
  let blur = sliders[3].value;
  
  var borderRadius = `${radius}%`
  var dimension = `${size}`;
  
  var color = document.getElementById('color').value;
  
  
  
  document.getElementById('shape').style.cssText = `border-radius: ${borderRadius};
  width: ${dimension}px;
  height: ${dimension}px;
  background-color: ${color};
  box-shadow: ${distance}px ${distance}px ${blur}px #00000078,
  ${-distance}px ${-distance}px ${blur}px #FFFFFF26;`
  
  
  document.getElementById('box').style.cssText = `background-color: ${color}`
  
  document.getElementById('body').style.cssText = `background-color: ${color}`
  
  var shadow = `${distance}px ${distance}px ${blur}px #00000078,<br>
  ${-distance}px ${-distance}px ${blur}px #FFFFFF26;`
  
  
  document.getElementById('border').innerHTML = 
  `border-radius: ${radius};<br>
   background: ${color};<br>
   box-shadow: ${shadow};`
  
  
  
  
}

function copyToClipboard(elementId){
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(elementId).innerText);
    
    document.body.appendChild(aux);
    
    aux.select();
    document.execCommand("copy");
    
    document.body.removeChild(aux);
    
    alert("Code Copied!")
    
    
  }

generate();