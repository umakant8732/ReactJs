// version one.


// function render(selectedElement, willRenderElement) {
//   const domElement = document.createElement(willRenderElement.type);
//   domElement.innerHTML = willRenderElement.children;
//   domElement.setAttribute("href", willRenderElement.props.href);
//   domElement.setAttribute("target", willRenderElement.props.target);

//   selectedElement.appendChild(domElement);
// }

// version 2
// function render (selectedElement, willRenderElement) {
//     const domElement = document.createElement(willRenderElement.type);
//     domElement.innerHTML = willRenderElement.children;

//     for (const prop in willRenderElement.props){
//         domElement.setAttribute(prop, willRenderElement.props[prop]);
//     }

//     selectedElement.appendChild(domElement);
   
// }

// const willRenderElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "click here to visit site",
// };
// const selectedElement = document.querySelector("#root");

// render(selectedElement, willRenderElement);


let defaultValue = document.querySelector('#root');
let addBtn = document.querySelector('#add');
let minusBtn = document.querySelector('#minus');
let counter = 0;

addBtn.addEventListener('click', function(){
  counter++;
  defaultValue.textContent = counter;

});

minusBtn.addEventListener('click', function(){
  counter--;
  defaultValue.textContent = counter;
})
