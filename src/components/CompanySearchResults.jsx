import { useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/actions";

const CompanySearchResults = () => {
    const { companyName } = useParams();
    const dispatch = useDispatch();
    const { results: jobs, loading, error } = useSelector((state) => state.search);

    useEffect(() => {
        if (companyName) {
            dispatch(fetchJobs(companyName));
        }
    }, [dispatch, companyName]);

    return (
        <Container>
            <Row>
                <Col>
                    {loading && <Spinner animation="border" />}
                    {error && (
                        <Alert variant="danger" className="mt-3">
                            {error}
                        </Alert>
                    )}
                    {!loading && !error && jobs.length === 0 && <p className="text-center mt-4">No jobs found</p>}

                    {jobs.map((jobData) => (
                        <Job key={jobData._id} data={jobData} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default CompanySearchResults;
