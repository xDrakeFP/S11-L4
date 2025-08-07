import { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import { fetchJobs } from "../redux/actions";

const MainSearch = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { results: jobs, loading, error } = useSelector((state) => state.search);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(fetchJobs(query));
    };

    return (
        <Container>
            <Row>
                <Col xs={10} className="mx-auto my-3 justify-content-between align-items-center">
                    <h1>Remote Jobs Search</h1>
                    <Button onClick={() => navigate("/favourites")}>Favourites</Button>
                </Col>
                <Col xs={10} className="mx-auto">
                    <Form onSubmit={handleSubmit}>
                        <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" disabled={loading} />
                        <Button type="submit" disabled={loading} className="ms-2">
                            {loading ? <Spinner animation="border" size="sm" /> : "Search"}
                        </Button>
                    </Form>
                    {error && (
                        <Alert variant="danger" className="mt-3">
                            {error}
                        </Alert>
                    )}
                </Col>
                <Col xs={10} className="mx-auto mb-5">
                    {!loading && jobs.length === 0 && <p className="text-center mt-4">Nessun risultato</p>}
                    {jobs.map((jobData) => (
                        <Job key={jobData._id} data={jobData} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default MainSearch;
