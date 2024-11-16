const userData = () =>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((data) => {
        viewData(data)
    })
}

const viewData = (info) =>{
   const userCard =document.getElementById('userCard');
     info.forEach(data => {
        const cardDivCreate=document.createElement('div');
        cardDivCreate.classList=`font-bold`;
        cardDivCreate.innerHTML=` <div onclick="toDoList('${data.name}', '${data.email}', '${data.address.city}'); userContentListData('${data.id}')" class="flex lg:flex-row gap-10 bg-base-200 p-10 rounded-xl shadow-md hover:shadow-green-400">
                <div class="indicator">
                    <div class="bg-base-300 grid h-20 w-20 place-items-center rounded-lg">User</div>
                </div>

              <div class="w-[100%]">
                <h1 class="text-2xl font-medium">${data.name}</h1>
                <div class=" mt-6">
                    <h1 class="text-xl font-bold">User Id:${data.id}</h1>
                    
                </div>
              </div>
            </div>`;

            userCard.appendChild(cardDivCreate);

     });

}

const toDoList = (name, email, city) =>{
  const user =document.getElementById('user');
  user.classList.add('hidden');

  const removeHidden=document.getElementById('removeHidden');
  removeHidden.classList.remove('hidden');

  const listCard =document.getElementById('listCard');
  const listCardDiv =document.createElement('div');
  listCardDiv.classList=` text-center`;
  listCardDiv.innerHTML=`<div class="pt-[100px]">
          <i class="fa-regular fa-user  text-[130px] text-[#406973] border-8 border-dashed border-[#406973] p-5"></i>
        </div>
        <div class="pt-6 pb-[80px]">
         <h1 class="text-xl font-extralight">${name}</h1>
         <h1 class="text-xl font-extralight ">${email},${city}</h1>
        </div>`;
    listCard.appendChild(listCardDiv);
};

const Logout = () =>{
    const Hiddens=document.getElementById('removeHidden');
    Hiddens.classList.add('hidden');

  const users =document.getElementById('user');
  users.classList.remove('hidden');
  const listCard =document.getElementById('listCard');
  listCard.innerHTML='';
}

const userContentListData = (userId) =>{
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then((res) => res.json())
    .then((data) =>{
        console.log(data)
        userContents(data);
    })
}
const userContents = (listData) =>{
    const userContents=document.getElementById('userContents');
    listData.forEach(listData =>{
        const listDivCreate=document.createElement('div');
        listDivCreate.innerHTML=`<li id="colorChanges" class="${listData.completed ?'bg-green-500 line-through':'bg-red-500'} list-none rounded-xl font-normal text-xl py-3 px-6 mb-6 flex justify-between items-center
        "> ${listData.title}  <p onclick="colorChange(this)"><i onclick="textColorChange(this)" class="fa-solid fa-check text-4xl font-extrabold ${listData.completed ?'text-black':'text-white'} "></i></p></li> `;
        userContents.appendChild(listDivCreate);
    })
}

const colorChange = (element) => {
    const parentElement = element.parentNode;
    if (parentElement) {
        if (parentElement.classList.contains('bg-green-500')) {
            parentElement.classList.remove('bg-green-500');
            parentElement.classList.add('bg-red-500');

            parentElement.classList.remove('line-through');
        } else {
            parentElement.classList.remove('bg-red-500');
            parentElement.classList.add('bg-green-500');
            
            parentElement.classList.add('line-through'); 
        }
    }
};

const textColorChange = (element) => { 
    console.log(element);
    
        if (element.classList.contains('text-black')) {
            element.classList.remove('text-black');
            element.classList.add('text-white');
        } else {
            element.classList.remove('text-white');
            element.classList.add('text-black')
        }
    }

const addListItem = (completed) =>{
    const addListItems=document.getElementById('addListItems')
    const listItemText=addListItems.value;   

    const userContents=document.getElementById('userContents');
    
    const userItemDivCreate=document.createElement('div');
    userItemDivCreate.innerHTML=`<h1 class="bg-red-500 rounded-xl font-normal text-xl py-3 px-6 my-3 flex justify-between items-center
    "><span id="pushText">${listItemText}</span class="no-underline"><p onclick="colorChange(this)"><i class="fa-solid fa-check text-4xl font-extrabold text-black"></i></p></h1>`;

    userContents.insertBefore(userItemDivCreate, userContents.firstChild);
    addListItems.value='';
}



userData()
userContentListData();