import React from 'react';


const GaleriaPage = (props) => {
    return (
    <main className='holder'>
         <h2>Autos 0km</h2>

      <div className='autos'>
         
         <img src= "/public/Img/0km/7CUDN3AWGBBWFAXL6PTQVCKWWI.webp" alt="Auto1"/>
         <img src= "/public/Img/0km/CMGFH5HCWNGB7PPPQSTUYT7UMQ.jpg" alt="Auto2"/>
         <img src= "/public/Img/0km/Fiat-Argo-lanzamiento-Argentina.jpg" alt="Auto3"/>
         <img src= "/public/Img/0km/PELU62OTU5BT5IZMIIYRFMTKDQ.jpg" alt="Auto4"/>
         <img src= "/public/Img/0km/ZTQTCKF2DJGCNLJTF6FZS2URUU.jpg" alt="Auto5"/>
       
       </div>
         
         <h2>Usados:</h2>
        
        <div className='usados'>
        
        <img src="/public/Img/usados/143744-whatsapp-20image-202021-02-25-20at-2011-12-05.webp" alt="Usados1"/>
        <img src="/public/Img/usados/20201127185430_vw-gol-2014.jpg" alt="Usados2"/>
        <img src="/public/Img/usados/4JSCM4RG65FODK3SWS3C766A7E.jpg" alt="Usados3"/>
        <img src="/public/Img/usados/RT_PU_c02c0f2f94b845a683ca8722b9d26aba.jpg" alt="Usados4"/>
        <img src="/public/Img/usados/vw-gol-cca-usados.webp" alt="Usados5"/>
    
    </div>
    <h2>Motos:</h2>
    <div className='motos'>
        
        <img src="/public/Img/motos/honda-125-cb-twister-uno___Vzp1TLfvv_2000x1500__1.webp" alt="Motos1"/>
        <img src="/public/Img/motos/Honda_CBR500R_2022-1024x576.jpg" alt="Motos2"/>
        <img src="/public/Img/motos/maxresdefault.jpg" alt="Motos3"/>
        <img src="/public/Img/motos/motors-22.jpg" alt="Motos4"/>
        <img src="/public/Img/motos/rouser-ns-200-fi.webp" alt="Motos5"/>
    
    </div>

        </main>
        );
       
}

export default GaleriaPage;