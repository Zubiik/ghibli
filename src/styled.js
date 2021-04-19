import styled from '@emotion/styled'

export const FilmsBoxContainer = styled.div`
display:flex;
flex-wrap:wrap;

`;

export const FilmBox = styled.div`
min-height:100px;
min-width:300px;
position:relative;
margin:5px;
`;

export const TextBox = styled.div`
position:absolute;
z-index: 1;
color:white;
position: absolute;
top: 80%;
left: 50%;
transform: translate(-50%, -50%);
text-align:center;
font-size:20px;
`;

export const ImageCustom = styled.img`
width:280px;
 background-position: center;
  background-size: cover;
  :hover {
    transform: scale(1.05);
  }
  transition: all 0.5s;
`;

export const SearchFilm = styled.div`
display:flex;
justify-content:center;
`;