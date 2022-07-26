import styled from "styled-components";

export const AboutContainer = styled.div`
display: flex;
position: relative;
align-items: center;
justify-content: center;
width: 150%;
height: 110vh;
`

export const Img5 = styled.img`
max-width: 100%;
height: 100vh;
z-index: -99;
`

export const AboutRow = styled.div`
display: flex;
position: relative;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
justify-content: center;
width: 150%;
height: 110vh;


grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1 col3'` : `'col3 col1 col2'`)};

@media screen and (max-width: 768px) {
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2' 'col3'` : `'col1 col1' 'col2 col2' 'col3 col3'`)};
}


@media screen and (min-width: 280px) and (max-width: 700px) {
    top: 0px;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2' 'col3' 'col1'` : `'col2 col2' 'col3 col3' 'col1 col1'`)};
}

@media screen and (min-width: 701px) and (max-width: 1000px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2' 'col3' 'col1'` : `'col2 col2' 'col3 col3' 'col1 col1'`)};
    top: 0px;
}


`

export const Column1 = styled.div`
grid-area: col1;
display: flex;
position: relative;
align-items: center;
justify-content: center;
width: 40%;
top: -20px;


@media screen and (min-width: 280px) and (max-width: 700px) {
    width: auto;
    top: 20px;
}

@media screen and (min-width: 601px) and (max-width: 1000px) {
    width: auto;
    left:50px;
    top: 10px;
    
}

@media screen and (min-width: 601px) and (max-width: 800px) {
    width: auto;
    left: 20px;
    top: 10px;
    
}

@media screen and (min-width: 1000px) and (max-width: 1200px) {
    width: auto;
    left: 20px;
    top: 10px;
}


`

export const Column2 = styled.div`
grid-area: col2;
position: relative;
width: 760px;
right: 0px;
top: -80px;

@media screen and (min-width: 280px) and (max-width: 700px) {
    width: auto;
    height: 250px;
    top: 0px;
   
}

@media screen and (min-width: 601px) and (max-width: 1000px) {
    width: auto;
    top: 40px;
    left: 40px; 
}

@media screen and (min-width: 1000px) and (max-width: 1400px) {
    width: auto;
    left: 20px;
    top: 10px;
}
`

export const Column3 = styled.div`
max-width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
position: relative;
grid-gap: 16px;
grid-area: col3;

left:80px;
top: 60px;

@media screen and (min-width: 280px) and (max-width: 700px) {
    width: auto;
    top: -200px
}

@media screen and (min-width: 280px) and (max-width: 340px) {
    width: auto;
    left: 100px;
}

@media screen and (min-width: 340px) and (max-width: 360px) {
    width: auto;
    left: 83px;
}

@media screen and (min-width: 360px) and (max-width: 380px) {
    width: auto;
    left: 83px;
}

@media screen and (min-width: 380px) and (max-width: 400px) {
    width: auto;
    left: 70px;
}

@media screen and (min-width: 400px) and (max-width: 440px) {
    width: auto;
    left: 90px;
}
@media screen and (min-width: 440px) and (max-width: 470px) {
    width: auto;
    left: 70px;
}
@media screen and (min-width: 470px) and (max-width: 500px) {
    width: auto;
    left: 30px;
}
@media screen and (min-width: 500px) and (max-width: 600px) {
    width: auto;
    left: 0px;
}
@media screen and (min-width: 600px) and (max-width: 700px) {
    width: auto;
    left: -100px;
}
@media screen and (min-width: 780px) and (max-width: 800px) {
    width: auto;
    top: 60px;
    left: 70px;
}

@media screen and (min-width: 700px) and (max-width: 780px) {
    width: auto;
    top: 60px;
    left: 50px;
}

@media screen and (min-width: 800px) and (max-width: 900px) {
    width: auto;
    top: 60px;
    left: 100px;
}

@media screen and (min-width: 900px) and (max-width: 1000px) {
    width: auto;
    top: 60px;
    left: 180px;
}

@media screen and (min-width: 1200px) and (max-width: 1400px) {
    left:  -150px;
    top: -30px
}

@media screen and (min-width: 1200px) and (max-width: 1280px) {
    left:  -150px;
    top: -30px
}

@media screen and (min-width: 1280px) and (max-width: 1400px) {
    left:  -50px;
    top: -30px
}

@media screen and (min-width: 1000px) and (max-width: 1100px) {
top: -50px;
left: 90px;
}

@media screen and (min-width: 1100px) and (max-width: 1200px) {
    left:  100px;
    top: -30px
}


`

export const TextWrapper = styled.div`
height: 100%;
width: 100%;
position:relative;

@media screen and (min-width: 280px) and (max-width: 700px) {
    width: 500px;
    top: 120px;
    left: 5px;
}

@media screen and (min-width: 280px) and (max-width: 340px) {
    width: 300px;
    top: 120px;
    left: 5px;
}

@media screen and (min-width: 600px) and (max-width: 700px) {
    width: auto;
    top: 180px;
}


@media screen and (min-width: 700px) and (max-width: 830px) {
    width: auto;
    left: 10px;
}

@media screen and (min-width: 830px) and (max-width: 900px) {
    width: auto;
    left: 10px;
}


@media screen and (min-width: 900px) and (max-width: 1000px) {
    width: auto;
    left: 50px;
}

@media screen and (min-width: 1151px) and (max-width: 1400px) {
    left: -250px;
    top: -30px;
}

@media screen and (min-width: 1280px) and (max-width: 1400px) {
    left: -150px;
    top: -30px;
}

@media screen and (min-width: 1001px) and (max-width: 1151px) {
    top: -30px;
    left: -250px;
}
@media screen and (min-width: 1151px) and (max-width: 1199px) {
    left:  -250px;
    top: -30px;
}

`

export const TopLine = styled.p`
color: #000;
font-size: 20px;
line-height: 20px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
text-align: left;

@media screen and (min-width: 280px) and (max-width: 700px) {
    font-size: 16px;
    position: relative;
    left: 10px;
}

@media screen and (min-width: 700px) and (max-width: 900px) {
    width: auto;
    left: 0px;
    text-align: center;
}

@media screen and (min-width: 900px) and (max-width: 1000px) {
    width: auto;
    left: 90px;
    text-align: center;
}

@media screen and (min-width: 1000px) and (max-width: 1200px) {
    left: 0px;
    
}
`
export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.5;
font-weight: 600;
color: #000;
text-align: left;

@media screen and (min-width: 280px) and (max-width: 700px) {
    font-size: 24px;
    position: relative;
    left: 10px;
}

@media screen and (min-width: 700px) and (max-width: 1000px) {
    width: auto;
    left: 0px;
    text-align: center;
}

@media screen and (min-width: 1001px) and (max-width: 1199px) {
    
    
}


`
export const Subtitle = styled.p`
    width: 500px;
    font-size: 20px;
    line-height: 32px;
    color: #000;
    text-align: left;

    @media screen and (min-width: 340px) and (max-width: 700px) {
        font-size: 16px;
        line-height: 1.3;
        width: 350px;
        position: relative;
        left: 10px;
    }

    @media screen and (min-width: 400px) and (max-width: 430px) {
        font-size: 16px;
        line-height: 1.3;
        width: 380px;
        position: relative;
        left: 10px;
    }

    @media screen and (min-width: 430px) and (max-width: 470px) {
        width: 410px;
    }

    @media screen and (min-width: 470px) and (max-width: 500px) {
        width: 450px;
    }
    @media screen and (min-width: 500px) and (max-width: 600px) {
        width: 500px;
    }
    @media screen and (min-width: 600px) and (max-width: 700px) {
        width: 600px;
    }

    @media screen and (min-width: 280px) and (max-width: 340px) {
        font-size: 14px;
        line-height: 1.3;
        width: 300px;
        position: relative;
        left: 10px;
    }

    @media screen and (min-width: 700px) and (max-width: 1000px) {
        width: 700px;
        left: 0px;
        text-align: left;
        font-size: 20px;
    }

@media screen and (min-width: 280px) and (max-width: 360px) {
    width: 320px;
}
`

export const ImgWrap = styled.div`
height: 300px;
width: 770px;
left: 10px;



`

export const ImgDep = styled.div`
max-width: 100%;
height: 100px;
width: 100%;
top: -60px;
left: -300px;
position: absolute;

@media screen and (min-width: 360px) and (max-width: 380px) {
    right: 70px;
}


`

export const ImgDep1 = styled.div`
    position: absolute;
    width: 90px;
    height: 90px;
    right: 780px;
    background: #FAFAFA;
    box-shadow: 5px 2px rgba(0, 0, 0, 0.4);
    border-radius: 35px;
    top: 40px;

    @media screen and (min-width: 280px) and (max-width: 700px) {
        top: 240px;
        width: 40px;
        height: 35px;
        right: 108px;
    }

    @media screen and (min-width: 701px) and (max-width: 800px) {
        left: 210px; 
    }

    
    @media screen and (min-width: 280px) and (max-width: 360px) {
        right: 90px;
    }

    @media screen and (min-width: 361px) and (max-width: 380px) {
        right: 110px;
    }
    

    @media screen and (min-width: 400px) and (max-width: 470px) {
        right: 130px;
    }

    @media screen and (min-width: 701px) and (max-width: 1000px) {
        left: 250px;
    }
    @media screen and (min-width: 1001px) and (max-width: 1100px) {
        width: 45px;
        left: 0px;
        top: 30px;
    }
    
    
`
export const ImgDep12 = styled.div`
 position: absolute;
    width: 90px;
    height: 90px;
    right: 650px;
    background: #FAFAFA;
    box-shadow: 5px 2px rgba(0, 0, 0, 0.4);
    border-radius: 35px;
    top: 40px;

@media screen and (min-width: 280px) and (max-width: 700px) {
        top: 240px;
        width: 40px;
        height: 35px;
        right: 40px;
}

@media screen and (min-width: 280px) and (max-width: 360px) {
    right: 20px;
}

@media screen and (min-width: 400px) and (max-width: 470px) {
    right: 60px;
}

@media screen and (min-width: 701px) and (max-width: 1000px) {
    left: 400px;
}
@media screen and (min-width: 1001px) and (max-width: 1100px) {
    width: 45px;
    left: 90px;
    top: 30px;
}


`
export const ImgDep3 = styled.div`
position: absolute;
width: 90px;
height: 90px;
right: 520px;
background: #FAFAFA;
box-shadow: 5px 2px rgba(0, 0, 0, 0.4);
border-radius: 35px;
top: 40px;

    
    @media screen and (min-width: 280px) and (max-width: 700px) {
        top: 240px;
        width: 40px;
        height: 35px;
        right: -30px;
    }

    @media screen and (min-width: 280px) and (max-width: 360px) {
        right: -40px;
    }

    @media screen and (min-width: 400px) and (max-width: 470px) {
        right: -10px;
    }

    @media screen and (min-width: 701px) and (max-width: 1000px) {
        left: 550px;
    }

    @media screen and (min-width: 1001px) and (max-width: 1100px) {
        width: 45px;
        left: 170px;
        top: 30px;
    }


`
export const ImgDep4 = styled.div`
position: absolute;
width: 90px;
height: 90px;
right: 390px;
background: #FAFAFA;
box-shadow: 5px 2px rgba(0, 0, 0, 0.4);
border-radius: 35px;
top: 40px;

    
    @media screen and (min-width: 280px) and (max-width: 700px) {
        top: 240px;
        width: 40px;
        height: 35px;
        right: -100px;
    }

    @media screen and (min-width: 280px) and (max-width: 360px) {
        right: -110px;
    }

    @media screen and (min-width: 400px) and (max-width: 470px) {
        right: -80px;
    }
    @media screen and (min-width: 701px) and (max-width: 1000px) {
        left: 700px;
    }
    @media screen and (min-width: 1001px) and (max-width: 1100px) {
        width: 45px;
        left: 250px;
        top: 30px;
    }
    
`
export const ImgDep5 = styled.div`
position: absolute;
width: 90px;
height: 90px;
right: 260px;
background: #FAFAFA;
box-shadow: 5px 2px rgba(0, 0, 0, 0.4);
border-radius: 35px;
top: 40px;

    
    @media screen and (min-width: 280px) and (max-width: 700px) {
        top: 240px;
        width: 35px;
        height: 35px;
        right: -160px;
    }

    @media screen and (min-width: 280px) and (max-width: 360px) {
        right: -170px;
    }

    @media screen and (min-width: 400px) and (max-width: 470px) {
        right: -140px;
    }

    @media screen and (min-width: 701px) and (max-width: 1000px) {
        left: 850px;
    }
    @media screen and (min-width: 1001px) and (max-width: 1100px) {
        width: 40px;
        left: 330px;
        top: 30px;
    }

    

`

export const Img = styled.img`
width: 400px;
position: relative;
right: 155px;
bottom: 40px;

@media screen and (min-width: 280px) and (max-width: 470px) {
    width: auto;
    left: -150px;
    top: 15px;
}

@media screen and (min-width: 280px) and (max-width: 340px) {
    width: auto;
    left: -180px;
    top: 15px;
}

@media screen and (min-width: 340px) and (max-width: 360px) {
    width: auto;
    left: -160px;
    top: 15px;
}

@media screen and (min-width: 360px) and (max-width: 400px) {
    width: auto;
    left: -150px;
    top: 15px;
}

@media screen and (min-width: 400px) and (max-width: 430px) {
    width: auto;
    left: -135px;
    top: 15px;
}

@media screen and (min-width: 430px) and (max-width: 470px) {
    width: auto;
    left: -105px;
    top: 15px;
}

@media screen and (min-width: 470px) and (max-width: 500px) {
    width: auto;
    left: -85px;
    top: 15px;
}

@media screen and (min-width: 500px) and (max-width: 600px) {
    width: auto;
    left: -50px;
    top: 15px;
}

@media screen and (min-width: 600px) and (max-width: 700px) {
    width: auto;
    left: -50px;
    top: 15px;
}




@media screen and (min-width: 800px) and (max-width: 900px) {
    width: 350px;
    left: 70px;
    top: 0px
}

@media screen and (min-width: 900px) and (max-width: 1000px) {
    width: 350px;
    left: 150px;
    top: 0px
}

@media screen and (min-width: 700px) and (max-width: 750px) {
    width: 350px;
    left: 20px;
    top: 0px
}

@media screen and (min-width: 750px) and (max-width: 800px) {
    width: 350px;
    left: 40px;
    top: 0px
}
@media screen and (min-width: 1200px) and (max-width: 1400px) {
    left: -520px;
    top: -130px
}

@media screen and (min-width: 1280px) and (max-width: 1300px) {
    left: -450px;
    top: -130px
}

@media screen and (min-width: 1300px) and (max-width: 1400px) {
    left: -450px;
    top: -130px
}

@media screen and (min-width: 1200px) and (max-width: 1280px) {
    left: -550px;
    top: -130px
}

@media screen and (min-width: 1000px) and (max-width: 1100px) {
    left: -330px;
    top: -120px;
    width: 350px;
}

@media screen and (min-width: 1100px) and (max-width: 1200px) {
    left:  -300px;
    top: -120px
}

`
export const Img11 = styled.img`
position: absolute;
top: 16px;
left: 12px;
}
`

export const Img12 = styled.img`
  position: absolute;
   top: 16px;
   left: 12px;
`
export const Img13 = styled.img`
position: absolute;
   top: 15px;
   left: 16px;
`

export const Img14 = styled.img`
position: absolute;
   top: 8px;
   left: 15px;
`

export const Img15 = styled.img`
position: absolute;
   top: 8px;
   left: 20px;
`
export const Img4 = styled.img`
width:100%;
height: 206px;
position: relative;

@media screen and (min-width: 280px) and (max-width: 700px) {
    display: none;
}

`
export const AwanContainer = styled.div`
 
`

export const Column4 = styled.div`


@media screen and (min-width: 280px) and (max-width: 700px) {
    display: none;
}

@media screen and (min-width: 801px) and (max-width: 1000px) {
    width: 400px;
    left: 600px;
    top: 580px;    
}

@media screen and (min-width: 701px) and (max-width: 800px) {
    width: 350px;
    left: 430px;
    top: 620px;    
}

@media screen and (min-width: 1001px) and (max-width: 1199px) {
    left: 900px;
    top: 500px;
}

`



