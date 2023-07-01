 var siteName =document.getElementById("name");
 var siteLink =document.getElementById("siteLink");
var visitlink = document.getElementById("visit")
 var bookmarked =[]
 if(localStorage.getItem('bookmarked')!=null){
    bookmarked=JSON.parse(localStorage.getItem('bookmarked'))
    display(bookmarked)
}
function add(){
    var bookmark ={
        name :siteName.value,
        link :siteLink.value
    }
    bookmarked.push(bookmark);
    localStorage.setItem("bookmarked",JSON.stringify(bookmarked))
    display(bookmarked)
    clear()
}

function display(arr) {
    temp=``;
    for (let index = 0; index < arr.length; index++) {
        temp+=` <div class="col-6 ">
        <div class="item me-2 d-flex justify-content-between align-items-center p-2 rounded-2 ">
        <h2 class="font-monospace text-capitalize ">${arr[index].name}</h2>
        <div class="icons">
            <a onclick="navigate(${index})"><i class="fa-regular fa-eye p-2 fs-4"  id="visit" ></i></a>
        <a  onclick="deleteBookmark(${index})"><i class="fa-solid fa-trash-can p-2 fs-4" ></i></a>
        </div>
        </div>
        </div>`
        
    }
    document.getElementById('result').innerHTML=temp;
}
function deleteBookmark(i){
bookmarked.splice(i,1)
localStorage.setItem("bookmarked",JSON.stringify(bookmarked))
    display(bookmarked)
}
function clear(){
    siteName.value =""
    siteLink.value =""
}
function navigate(i){
    var site =bookmarked[i].link;
    window.open(site,"_blank")
}