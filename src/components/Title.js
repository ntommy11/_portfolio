import styled from "styled-components"

const Container = styled.div`
  font-size: x-large;
  font-weight:  800;
  color: #FAEB78;
  border-bottom: 2px solid;
  border-color: #FAEB78;
  padding-bottom: 10px;
  padding-top: 20px;
`

function Title({title, tag}){
  return(
    <Container>
      {title} {tag&&<span className="tag">{tag}</span>}
    </Container>
  )
}
export default Title;