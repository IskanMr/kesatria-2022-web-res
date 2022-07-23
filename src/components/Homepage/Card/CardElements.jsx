import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'

export const AgendaContainer = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    
    @media screen and (min-width: 470px) and (max-width: 700px) {
         width: 100%;
         height: 100vh;
         
     }

     @media screen and (min-width: 320px) and (max-width: 470px) {
        width: 100%;
        height: 110vh;
    }

     @media screen and (min-width: 701px) and (max-width: 1000px) {
        width: 100%;
        height: 110vh;
     }
`


export const AgendaWrapper = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (min-width: 400px) and (max-width: 470px) {
        grid-template-columns: 1fr;
        grid-gap: 0px;
        margin-top: -400px;
        height: 200px;
    }

    @media screen and (min-width: 470px) and (max-width: 500px) {
        grid-template-columns: 1fr 1fr ;
        grid-gap: 0px;
        margin-top: -300px;
        height: 200px;
        margin-left: -80px;
    }

    @media screen and (min-width: 500px) and (max-width: 550px) {
        grid-template-columns: 1fr 1fr ;
        grid-gap: 0px;
        margin-top: -300px;
        height: 200px;
        margin-left: -50px;
    }

    @media screen and (min-width: 550px) and (max-width: 600px) {
        grid-template-columns: 1fr 1fr ;
        grid-gap: 0px;
        margin-top: -300px;
        height: 200px;
        margin-left: -40px;
    }

    @media screen and (min-width: 600px) and (max-width: 650px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
        margin-left: -20px;
        margin-top: -300px;
        height: 200px;
    }

    @media screen and (min-width: 650px) and (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
        margin-left: 0px;
        margin-top: -300px;
        height: 200px;
    }

    @media screen and (min-width: 320px) and (max-width: 400px) {
        grid-template-columns: 1fr;
        grid-gap: 0px;
        margin-top: -550px;
        height: 200px;
    }

    @media screen and (min-width: 801px) and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
        margin-top: 150px;
     }

     @media screen and (min-width: 701px) and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
        margin-top: 70px;
     }

     
`

export const AgendaCard1 = styled.div`
    
    background: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
    left: 50%;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    margin-left: 50px;
    max-height: 100%;
    padding: 30px;
    border: 1px solid;
    box-shadow: 5px 2px 0px 5px #224860;
    transition: all 0.2s ease-in-out;
    

    &:hover {
    transform: scale(1.08) ;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    }

    @media screen and (min-width: 280px) and (max-width: 470px) {
            left: 0px;
            width: 60%;
            height:82%;
            margin-bottom: -20px;
            
    }

    @media screen and (min-width: 400px) and (max-width: 470px) {
        left: 0px;
        top: -70px;
    }

    @media screen and (min-width: 470px) and (max-width: 550px) {
        left: 0px;
        top: -50px;
        width: 70%;
        height: 80%;
    }
    @media screen and (min-width: 550px) and (max-width: 700px) {
        left: 0px;
        top: -50px;
        width: 70%;
        height: 80%;
    }

    @media screen and (min-width: 700px) and (max-width: 1000px) {
        left: -20px;
        top: -100px;
        margin-top: 40px;
     }

     @media screen and (min-width: 601px) and (max-width: 800px) {
        top: -50px;
        
     }

     @media screen and (min-width: 1201px) and (max-width: 1280px) {
        left: 80px;
     }

     @media screen and (min-width: 1150px) and (max-width: 1200px) {
        left: 30px;
     }

     @media screen and (min-width: 1001px) and (max-width: 1149px) {
        left: -10px;
        display: flex;
        align-items: center;
     }

     @media screen and (min-width: 1280px) and (max-width: 1380px) {
        left: 110px;
     }
    
`
export const AgendaCard2 = styled.div`
    background: #224860;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    height: 200px;
    width: 200px;
    padding: 70px;
    line-height: 50px;

    
    @media screen and (min-width: 280px) and (max-width: 470px) {
            width: 60px;
            height: 90px;
            top: -20px;
            position: relative;
            line-height: 20px;
    }

    @media screen and (min-width: 470px) and (max-width: 700px) {
        width: 60px;
        height: 60px;
        top: -20px;
        position: relative;
        line-height: 20px;
}
    
`
export const AgendaCard3 = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    @media screen and (min-width: 280px) and (max-width: 470px) {
        top: -38px;
        position: relative;
    }

    @media screen and (min-width: 470px) and (max-width: 550px) {
        top: -30px;
    }

    @media screen and (min-width: 550px) and (max-width: 700px) {
        top: -30px;
    }

    
`

export const AgendaCard3Link = styled(LinkR)`
    border-radius: 50px;
    background: #F26628;
    white-space: nowrap;
    margin-top: 20px;
    padding: 10px 25px;
    color: #FAFAFA;
    font-size: 16px;
    line-height:20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: auto;

    &:hover {
    transform: scale(1.22) ;
    transition: all 0.2s ease-in-out;
    color: #010606;
    cursor: pointer;
    }

    @media screen and (min-width: 280px) and (max-width: 700px) {
        &:hover {
            transform: scale(1.08) ;
            transition: all 0.2s ease-in-out;
            color: #010606;
            cursor: pointer;
            }
}

    

`

export const AgendaIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 20px;
    margin-left: 10px;

    @media screen and (min-width: 280px) and (max-width: 700px) {
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
        margin-left: 10px;
    }
`

export const AgendaH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom:64px;

    @media screen and (max-width: 480px) {
    font-size: 2rem;
    }
`
export const AgendaH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`
export const AgendaP = styled.p`
    font-size: 1rem;
    text-align: center;
`