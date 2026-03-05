let percent = 0;
const text = document.getElementById("percent");
const loader = document.querySelector(".loader-wrapper");

const interval = setInterval(()=>{

  percent++;

  text.textContent = percent;

  if(percent >= 100){

    clearInterval(interval);

    loader.style.opacity="0";
    loader.style.transition="0.6s";

    setTimeout(()=>{
      loader.style.display="none";
    },600);

  }

},11);