  import {Container, Row, Col} from 'react-bootstrap';
  
  
  
  const ArticleDetail = () => {
    return (
      <>
        <Container>
        <Row>
          <Col md={6}>
            <h2>Titolo</h2>
            <p>Descrizione</p>
          </Col>
          <Col md={6}>
            <img src='' alt='' />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p>Published at: </p>
            <p>Updated at: </p>
          </Col>
        </Row>
      </Container>
      </>
    );
  };
  
  export default ArticleDetail;