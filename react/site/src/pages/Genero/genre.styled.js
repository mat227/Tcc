import styled from 'styled-components'

const ContainerGeneroP = styled.div`

@font-face {
    font-family: "Rowdies";
    src: url('../RedefinirSenha/assets/fonts/Rowdies-Bold.ttf');
}

@font-face {
    font-family: "Quicksand";
    src: url('../RedefinirSenha/assets/fonts/Quicksand-VariableFont_wght.ttf');
}
 
    margin: 0px;


    background-color: #135578;
    background-image: url('/assets/images/bacckground.svg');


.titulo {
    display: flex;
    flex-direction: row !important;
  
    justify-content: center;
    margin-top: -1em;
  }
  
  .titulo p {
    color:white;
    font-family: Rowdies;
    font-size: 4em;
    font-weight: 300;
    text-shadow: 2px 3px black;
  
      -webkit-text-stroke-width: 0.5px; 
      -webkit-text-stroke-color: #00B6FF; 
  }
  
  .quadrado {
    width: 80px;
    height: 2px;
    background: #6ECAEF ;
    margin-top: 6.5em;
  }

  .generos {
      display: flex;
      overflow-x: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      margin-bottom: 5em;
  }

  
.boxes {
    display: flex;
    flex-direction: row;
  }
  
  .box-genero {
    background-color: #12314e;
  
    width: 17vw;
    height: 75vh;
  
    padding: 0.8em;
  
    align-items: center;
    align-content: center;
  
    display: flex;
    flex-direction: column;
  }
  
  .botao {
    display: flex;
    flex-direction: column;
  
    justify-self: center;
  
    width: 96%;
    margin-top: 1em;
  }
  
  .botao button {
    font-size: 2em;
    font-family: "Rowdies";
    text-align: center;
    text-shadow: 1px 1px 5px black;
    text-align: center;
  
    color: white;
    background-color: #1fb5cd;
    border: none;
  
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  
    cursor: pointer;
  }
  

a, a:visited {
    color: white;
    text-decoration: none;
}



`

export { ContainerGeneroP }