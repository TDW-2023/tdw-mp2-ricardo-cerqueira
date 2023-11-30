import styled from "styled-components";
import Top from "../components/Top"

export default function About() {

    const About= styled.div`
font-size: 32px;
font-weight: 400;
font-family: 'Major Mono Display';
color: white;
    `

    const AboutTitle = styled.header`
    font-family: 'Montserrat';
text-align: center;
padding-top: 80px;
font-weight: 600;
@media (min-width: 1024px) {
padding-top: 250px;
}
    `

    const AboutText = styled.p`
    font-weight: 400;
    font-family: 'Montserrat';
    font-size: 20px;
    width: 80%;
    text-align: justify;
    margin: auto;
    padding-top:60px;
    padding-bottom: 100px;

    `

    return(
<About>
<Top name={"project StarClaimer"} link={"/"}/>

<AboutTitle> About Project StarClaimer</AboutTitle>
<AboutText>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</AboutText>
</About>


    )

}