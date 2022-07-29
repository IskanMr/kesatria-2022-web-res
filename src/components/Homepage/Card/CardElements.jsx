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
         height: 90vh;
     }

     @media screen and (min-width: 320px) and (max-width: 470px) {
        width: 100%;
        height: 110vh;
    }

     @media screen and (min-width: 700px) and (max-width: 1000px) {
        width: 100%;
        height: 120vh;
     }

     @media screen and (min-width: 2000px) and (max-width: 5000px) {
        width: 100%;
        height: 50vh;
     }
`


export const AgendaWrapper = styled.div`
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    display: grid;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 400px) and (max-width: 470px) {
        grid-template-columns: 1fr;
        grid-gap: 0px;
        margin-top: -400px;
        height: 200px;
    }

    @media screen and (min-width: 470px) and (max-width: 500px) {
        grid-template-columns: 1fr 1fr ;
        grid-gap: 0px;
        align-self: center
        height: 400px;
        display: grid;
        justify-content: center;
    }

    @media screen and (min-width: 500px) and (max-width: 550px) {
        grid-template-columns: 1fr 1fr ;
        grid-gap: 0px;
        margin-top: -300px;
        height: 200px;
    }

    @media screen and (min-width: 550px) and (max-width: 600px) {
        grid-template-columns: 1fr 1fr ;
        grid-gap: 0px;
        margin-top: -300px;
        height: 200px;
        
    }

    @media screen and (min-width: 600px) and (max-width: 650px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
        margin-top: -300px;
        height: 200px;
    }

    @media screen and (min-width: 650px) and (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
        margin-top: -300px;
        height: 200px;
    }

    @media screen and (min-width: 320px) and (max-width: 400px) {
        grid-template-columns: 1fr;
        grid-gap: 0px;
        margin-top: -550px;
        height: 200px;
    }

    @media screen and (min-width: 800px) and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
        margin-top: 30px;
     }

     @media screen and (min-width: 700px) and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;
        margin-top: 30px;
     }

     
`

export const AgendaCard1 = styled.div`
    
    background: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    border-radius: 20px;
    margin-left: 20px;
    margin-right: 30px;
    max-height: 100%;
    padding: 30px;
    border: 1px solid;
    box-shadow: 5px 2px 0px 5px #224860;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    

    &:hover {
    transform: scale(1.08) ;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    }

    @media screen and (min-width: 280px) and (max-width: 470px) {
            left: 0px;
            width: 60%;
            height:85%;
            margin-bottom: -20px;
            margin-left: 50px;
            margin-right: 0px;
    }

    @media screen and (min-width: 400px) and (max-width: 470px) {
        left: 0px;
        top: -70px;
        margin-left: 50px;
        margin-right: 0px;
    }

    @media screen and (min-width: 470px) and (max-width: 550px) {
        left: 0px;
        width: 70%;
        height: 80%;
        top: 0px;
        margin-left: 50px;
        margin-right: 0px;
    }
    @media screen and (min-width: 550px) and (max-width: 700px) {
        left: 0px;
        top: 0px;
        width: 70%;
        height: 80%;
        margin-left: 50px;
        margin-right: 0px;
    }

    @media screen and (min-width: 700px) and (max-width: 1000px) {
        left: 0px;
        top: 0px;
        margin-top: 40px;
        margin-left: 50px;
        margin-right: 0px;
     }

     @media screen and (min-width: 600px) and (max-width: 800px) {
        margin-left: 50px;
        margin-right: 0px;
        
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
            top: 10px;
            position: relative;
            line-height: 20px;
    }

    @media screen and (min-width: 470px) and (max-width: 700px) {
        width: 60px;
        height: 60px;
        top: 10px;
        position: relative;
        line-height: 20px;
}
    
`
export const AgendaCard3 = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    @media screen and (min-width: 280px) and (max-width: 470px) {
        top: 0px;
        position: relative;
    }

    @media screen and (min-width: 470px) and (max-width: 550px) {
        top: 0px;
    }

    @media screen and (min-width: 550px) and (max-width: 700px) {
        top: 0px;
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