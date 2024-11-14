const userData = () =>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((data) => {
        viewData(data)
    })
}

const viewData = (info) =>{
   const userCard =document.getElementById('userCard');
     info.forEach(deta => {
        const cardDivCreate=document.createElement('div');
        cardDivCreate.classList=`bg-base-200 p-10 rounded-xl shadow-md hover:shadow-green-400`;
        cardDivCreate.innerHTML=` <div class="flex lg:flex-row gap-10">
                <div class="indicator">
                    <span class="indicator-item badge badge-secondary"></span>
                    <div class="bg-base-300 grid h-20 w-20 place-items-center rounded-lg">User</div>
                </div>

              <div class="w-[100%]">
                <h1 class="text-2xl font-medium">${deta.name}</h1>
                <div class="flex justify-between gap-5 mt-6">
                    <h1 class="text-xl font-bold">User Id:${deta.id}</h1>
                    <button onclick="showDetails('${deta.id},${deta.name}'); modal_add.showModal()" class="btn bg-green-500 text-white text-lg">Details</button>
                </div>
              </div>
            </div>`;

            userCard.appendChild(cardDivCreate);

     });

}

const showDetails = (id, name) =>{

}
userData()
// const search = document.getElementById('search').addEventListener('keyup', function search (){
//   const searchDatas=document.getElementById('search').value;
//    userData(searchDatas)
// });