import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: Date;
  updated_at: Date;
  featured: boolean;
  launches: any[];
  events: any[];
}

export const ArticleList = () => {
  const URL = "https://api.spaceflightnewsapi.net/v4/articles";
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setArticles(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container>
    <Row className="justify-content-center">
      {articles.map((a) => (
        <Col key={a.id} xs={12} md={6} lg={4}>
          <Card className="d-flex flex-column g-5 h-100">
            <Card.Img variant="top" src={a.image_url} alt={a.title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body className="d-flex flex-column flex-grow-1">
              <Card.Title className="mb-2">{a.title}</Card.Title>
              <Card.Text className="mb-3">{a.summary}</Card.Text>
              <div className="mt-auto">
                <p className="mb-1">
                  <strong>Published: </strong>
                  {new Date(a.published_at).toLocaleDateString()}
                </p>
                <Link to={`/article/${a.id}`} className="btn btn-primary">
                  Article Detail
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  );
};
