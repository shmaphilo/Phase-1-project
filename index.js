const api_url='https://api.quotable.io/random';
 async function getQuote(url){
   const response=await fetch(url);
   let data=await response.json();
   console.log(data);

   const Quote= document.getElementById("Quote");
   const Author= document.getElementById("Author");
   Quote.innerHTML=data.content
   Author.innerHTML=data.author
   
 }
 getQuote(api_url)
 
 function Tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ Quote.innerHTML + "----by " + Author.innerHTML,"Tweet Window","width=650,height=350");
}

