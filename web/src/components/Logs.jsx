import { useEffect } from "react";
import { useState } from "react";
import styled from 'styled-components';
import Log from './Log';
import axios from "axios";

const Container = styled.div`
    display: flex;
    flex-direction: column ;
`

const Logs = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const getCases = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/cases"
        );
        setCases(res.data);
      } catch (err) {}
    };
    getCases();
  });


  return (
    <Container>
        {cases.map(item => (
            <Log item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Logs