let url = "https://catfact.ninja/fact" ;
let urli = "https://catfact.ninja/fact2" ; // this is wrong so it give error
async function getfacts(){
    try{
        let res = await fetch(url) ;
        console.log(res)
        let data = await res.json();
        console.log(data)
        res = await fetch(url) ;
        let data2 = await res.json();
        console.log(data2.fact)
        // to check if error is working properly
        res = await fetch(urli) ;
        let data3 = await res.json();
        console.log(data3.fact)
            
    }
    catch(e){
        console.log(e) ;
    }
    console.log("hello")
}
getfacts();