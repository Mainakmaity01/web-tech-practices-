let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter the Name Of Student ');
    namasteBtn.textContent = 'Roll No. 22 : ' + name;
}