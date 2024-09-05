import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row, Col, Card } from 'react-bootstrap';
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

export const ArticleDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<Article | null>(null);
    const URL = (`https://api.spaceflightnewsapi.net/v4/articles/${id}`)

    const fetchArticleDetail = async () => {
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setArticle(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        fetchArticleDetail();
    }, [id]);

    if (!article) {
        return <Spinner animation="border" variant="primary" /> ;
    }

    return (
        <Container className="mt-4">
        <Row>
            <Col md={4} className="d-flex flex-column align-items-start">
                <img src={article.image_url} className="img-fluid mb-3" alt={article.title} />
                <p><strong>Published at:</strong> {new Date(article.published_at).toLocaleDateString()}</p>
            </Col>
            <Col md={8}>
                <Card className="h-100">
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>
                            <strong>Source:</strong> {article.news_site}
                        </Card.Text>
                        <Card.Text>{article.summary}</Card.Text>
                        <a href={article.url} className="btn btn-primary" target="_blank" rel="noreferrer">
                            Go to Article-Page
                        </a>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    );
};
