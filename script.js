// const panels = document.querySelectorAll('.panel');
// panels.forEach((panel)=>{
//     panel.addEventListener('click',() =>{
//         removeActive()
//         panel.classList.add('active');
//     })
// })

// function removeActive(){
//     panels.forEach((panel) =>(
//         panel.addEventListener('click', () =>{
//             panel.classList.remove('active')
//         })
//     ))
// }

 const panels = document.querySelectorAll('.panel');
 // for add active class after click, its work perfectly
 panels.forEach(panel => {
   panel.addEventListener('click', () => {
     removeActiveClasses()
     panel.classList.add('active');
   });
 });


 function removeActiveClasses() {
   // but when i click again it should be remove the active class but its dose not work.
   panels.forEach(panel => {
     panel.classList.remove('active')
   });
 };


