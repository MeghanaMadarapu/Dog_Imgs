let btn = document.querySelector("button");

let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async()=>{
    let link = await getImgage();
    // console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
});

async function getImgage(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    }
    catch(err){
        console.error("Error: ", err);
        return "No Image Found";
    }
}