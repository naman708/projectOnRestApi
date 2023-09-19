const form=document.getElementById('addForm');
const InputPrice=document.getElementById('price');
const InputDish=document.getElementById('dish');
const InputTable=document.getElementById('table');
const T1=document.getElementById('Table1');
const T2=document.getElementById('Table2');
const T3=document.getElementById('Table3');

form.addEventListener('submit',onsubmit)


function onsubmit(e){
    const user = {
        Price: InputPrice.value,
        Dish: InputDish.value,
       Table: InputTable.value,
        
    };

    axios.post("https://crudcrud.com/api/eac84ca0b5264194be8f0afd7f9d664c/rapp",user)
        .then((res) => display(res.data))
        .catch((err) => console.log(err));
        
}

function display(user){
const li =document.createElement('li');
//create delete btn
const delBtn=document.createElement('button');
delBtn.className='btn btn-danger btn-sm float-right delete';
delBtn.appendChild(document.createTextNode('Delete'));
let id=user._id;
delBtn.onclick = () => {
    axios.delete("https://crudcrud.com/api/eac84ca0b5264194be8f0afd7f9d664c/rapp/"+ id)
        .then(() => {
            console.log(res);
        })
        .catch((error) => console.log(error));

        if(user.Table==='Table 1'){
            T1.removeChild(li);
            }
            else if(user.Table==='Table 2'){
                T2.removeChild(li);
            }
            else{
                T3.removeChild(li);
            }
   
};

li.className='list-group-item';
li.appendChild(document.createTextNode(`${user.Price}-${user.Dish}-${user.Table}`));
li.appendChild(delBtn);

if(user.Table==='Table 1'){
T1.appendChild(li);
}
else if(user.Table==='Table 2'){
    T2.appendChild(li);
}
else{
    T3.appendChild(li);
}
}
window.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/eac84ca0b5264194be8f0afd7f9d664c/rapp")
        .then((res) => {
            for (var i = 0; i < res.data.length; i++) {
                display(res.data[i]);
            }
        })
        .catch((err) => console.log(err));
})