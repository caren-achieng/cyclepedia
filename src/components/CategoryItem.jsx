import styled from "styled-components"

const Container = styled.div`
      flex: 1;
      margin: 20px;
      height: 70vh;
      position: relative;
      background-color: black;
      border-radius: 25px;
`

const Image = styled.img`
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.4;
`

const Info = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
`

const Title = styled.h1`
      color: white;
      margin-bottom: 20px;
      font-size: 30px;
`

const Button = styled.button`
      border: none;
      font-size: 20px;
      padding: 20px;
      background-color: white;
      color: gray;
      cursor: pointer;
      font-weight: 600;
      border-radius: 25px;
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    );
}

export default CategoryItem;