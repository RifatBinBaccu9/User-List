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
        cardDivCreate.innerHTML=` <div onclick="toDoList('${data.name}', '${data.email}', '${data.address.city}')" class="flex lg:flex-row gap-10 bg-base-200 p-10 rounded-xl shadow-md hover:shadow-green-400">
                <div class="indicator">
                    <span class="indicator-item badge badge-secondary"></span>
                    <div class="bg-base-300 grid h-20 w-20 place-items-center rounded-lg">User</div>
                </div>

              <div class="w-[100%]">
                <h1 class="text-2xl font-medium">${data.name}</h1>
                <div class="flex justify-between gap-5 mt-6">
                    <h1 class="text-xl font-bold">User Id:${data.id}</h1>
                    <button onclick="showDetails('${data.name}','${data.username}', '${data.email}', '${data.phone}', '${data.website}', '${data.address.street}', '${data.address.suite}', '${data.address.city}', '${data.address.zipcode}', '${data.address.geo.lat}', '${data.address.geo.lng}', '${data.company.name}', '${data.company.catchPhrase}', '${data.company.bs}'); modal_add.showModal()" class="btn bg-green-500 text-white text-lg">Details</button>
                </div>
              </div>
            </div>`;

            userCard.appendChild(cardDivCreate);

     });

}

const showDetails = (name,username,email,phone,webSite,street,suite,city,zipcode,lat,lng,companyName,catchPhrase,bs) =>{
  const modalData=document.getElementById('modal_add');
  const createDiv=document.createElement('div');
  createDiv.classList=`modal-box bg-white p-10 rounded-lg shadow-lg max-w-lg mx-auto`;
  createDiv.innerHTML=`<h3 class="text-2xl font-bold text-gray-800 text-center mb-6">User Information</h3>
  <p class="py-4 text-gray-600 text-center">Press ESC key or click the button below to close</p>
        <div class="text-gray-800 ">
            <p><span class="font-semibold">Name:</span>${name}</p>
            <p><span class="font-semibold">Username:</span> ${username}</p>
            <p><span class="font-semibold">Email:</span>${email}</p>
            <p><span class="font-semibold">Phone:</span>${phone}</p>
            <p><span class="font-semibold">Web Site:</span>${webSite}</p>
        </div>
        <div class="mt-4">
            <h4 class="text-lg font-semibold text-gray-700">Company info</h4>
            <p><span class="font-semibold">Street:</span> ${companyName}</p>
            <p><span class="font-semibold">Suite:</span> ${catchPhrase}</p>
            <p><span class="font-semibold">City:</span> ${bs}</p>
        </div>
        <div class="mt-4">
            <h4 class="text-lg font-semibold text-gray-700">Address</h4>
            <p><span class="font-semibold">Street:</span> ${street}</p>
            <p><span class="font-semibold">Suite:</span> ${suite}</p>
            <p><span class="font-semibold">City:</span> ${city}</p>
            <p><span class="font-semibold">Zipcode:</span> ${zipcode}</p>
        </div>
        
       <div class="flex justify-between">
        <div class="mt-4">
            <h4 class="text-lg font-semibold text-gray-700">Geo Location</h4>
            <p><span class="font-semibold">Lat:</span> ${lat}</p>
            <p><span class="font-semibold">Lng:</span> ${lng}</p>
        </div>
        <div class="modal-action">
            <form method="dialog">
                <button class="btn bg-blue-500 text-white hover:bg-blue-700">Close</button>
            </form>
        </div>
        </div>`;
        modalData.appendChild(createDiv);
}

userData()



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

const userContentListData = (search='1') =>{
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${search}`)
    .then((res) => res.json())
    .then((data) =>{
        userContents(data);
    })
}
const userContents = (listData) =>{
    const userContents=document.getElementById('userContents');
    userContents.innerHTML='';
    listData.forEach(listData =>{
        const listDivCreate=document.createElement('div');
        listDivCreate.innerHTML=`<h1 id="colorChanges" class="${listData.completed ? 'bg-green-500':'bg-red-500'} rounded-xl font-normal text-xl py-3 px-6 mb-6 flex justify-between items-center
        ">${listData.title} <i onclick="colorChange(this)" class="fa-solid fa-check text-4xl font-extrabold"></i></h1>`;
        userContents.appendChild(listDivCreate);
    })
}

const colorChange = (element) => {
    const parentElement = element.parentNode; 
    if (parentElement) {
        if (parentElement.classList.contains('bg-green-500')) {
            parentElement.classList.remove('bg-green-500');
            parentElement.classList.add('bg-red-500');
        } else {
            parentElement.classList.remove('bg-red-500');
            parentElement.classList.add('bg-green-500');
        }
    }
};

document.getElementById('search').addEventListener('keyup', function search (){
  const searchDatas=document.getElementById('search')
  const searchDatalist=searchDatas.value;
  userContentListData(searchDatalist);
  searchDatas.value='';
});

const addListItem = (completed) =>{
    const addListItems=document.getElementById('addListItems')
    const listItemText=addListItems.value;   

    const userContents=document.getElementById('userContents');
    
    const userItemDivCreate=document.createElement('div');
    userItemDivCreate.innerHTML=`<h1 class="bg-red-500 rounded-xl font-normal text-xl py-3 px-6 my-3 flex justify-between items-center
    "><span id="pushText">${listItemText}</span><i onclick="colorChange(this)" class="fa-solid fa-check text-4xl font-extrabold"></i></h1>`;

    userContents.appendChild(userItemDivCreate);
    addListItems.value='';
}
userContentListData();