import { Container, Row, Col, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFavourite } from "../redux/actions";

const Favourites = () => {
    const favourites = useSelector((state) => state.favourite.list);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    return (
        <Container>
            <Row>
                <Col xs={10} className="mx-auto my-3">
                    <h1>Favourites</h1>
                    <Button onClick={() => navigate("/")}>Home</Button>
                </Col>
                <Col xs={10} className="mx-auto my-3">
                    <ListGroup>
                        {favourites.map((fav) => (
                            <ListGroupItem key={fav.id}>
                                <StarFill className="mr-2" onClick={() => dispatch(removeFavourite(fav.id))} />
                                <Link to={`/${encodeURIComponent(fav.company_name)}`}>{fav.company_name}</Link>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Favourites;
