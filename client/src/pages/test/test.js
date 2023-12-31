import { useState } from 'react';
import { Container } from '../Questions/Questions.styled';
import Nav from '../../components/Nav/Nav';

function Test() {
  const [fetchedData, setFetchedData] = useState(null);

  const fetchData = () => {
    fetch('http://localhost:8080/question/11', {
      method: 'GET',
      headers: {
        Origin: 'http://localhost:3000',
      },
        credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('받아온데이터:', data);
        setFetchedData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Container>
      <Nav />
      <button onClick={fetchData}>Test button</button>
        {fetchedData &&
            <div>
                <p>받아온데이터:{fetchedData.data.question.title}</p>
                <p>받아온데이터:{fetchedData.data.question.content}</p>
            </div>
        }
    </Container>
  );
}

export default Test;
