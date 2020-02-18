console.log('starting script')
let state = {
    data: [],
    // "test" : "data",
    
};


fetch("https://api.exchangeratesapi.io/latest") 
    .then(response => response.json()) 
    .then(data => {
        console.log("Got the data!"); 


        state.data = data ;

        let checkboxItem = document.querySelector(".output")

        console.log(data);
        // TODO: Call a function to do something with this data. 
    });
        

// function render (data) {
//     let graph = document.querySelector ('barchart');
    
//     graph.innerHTML = "";
//     for(let text of data) {

//         let baseHeight = '400px';

//         let newBar = document.createElement('div');
//         newBar.classList.add('bar');
        




        // let item = document.createElement('output')
        // item.textContent = text ;
//         graph.appendChild(item);


//     }
// }










// document.getElementById("rates").addEventListener('click',rates);


// function rates(){
//     fetch("https://api.exchangeratesapi.io/latest")
//     .then(response => response.json())
//     .then(data => {
//         let output = 'rates';
//         data.forEach(function(rates){
//             output += `
//             <div>
//                 $(rates)
//             </div>
//             `;
            
//         });
//         document.getElementById('output').innerHTML = output;

//     })

//     }




// let state = {
//     "test" : "data",
    
// };

// function render() {
//     let output = document.querySelector('#output');
//     output.innerHTML = '';

//     for (let gif of state.data) {
//         let image = document.createElement('img');
//         image.setAttribute('src', gif.images.preview_gif.url);
//         output.appendChild(image);
//         fetch("./data/data.json")
//            .then(response => response.json()) 
//            .then(data => {
   
// // function 
// fetch("https://api.exchangeratesapi.io/latest") 
//     .then(response => response.json()) 
//     .then(data => {
//         console.log("Got the data!"); 
//         console.log(data);
//         // TODO: Call a function to do something with this data. 
//     });
        




