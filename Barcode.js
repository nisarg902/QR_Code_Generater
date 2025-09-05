  const  qrinput    =  document.getElementById('qrinput')
      const  qrbutton   =  document.getElementById('qrbutton')
      const  qrcontainer    =  document.getElementById('qrcontainer')

     qrbutton.addEventListener( "click",()=>{

 let inputValue= qrinput.value 
 if( inputValue === ""){
     alert("enter something")
 }else{
      qrinput.value="";
     qrcontainer.innerHTML = ""; 
    qrcontainer.innerText=""
    new QRCode(qrcontainer,{
        text:inputValue,
        width:250,
        height:250,
        colorDark:'#000000',
        colorLight:'#fff'

    })
 }


  } )

                    
