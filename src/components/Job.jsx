import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, removeFavourite } from "../redux/actions";

const Job = ({ data }) => {
    const favourites = useSelector((state) => state.favourite.list);
    const dispatch = useDispatch();

    const isFav = favourites.some((favourite) => favourite._id === data._id);

    return (
        <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
            <Col xs={3}>
                {isFav ? (
                    <StarFill color="gold" size={16} className="mr-2 my-auto" onClick={() => dispatch(removeFavourite(data._id))} />
                ) : (
                    <Star color="gold" size={16} className="mr-2 my-auto" onClick={() => dispatch(addFavourite(data._id))} />
                )}
                <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            </Col>
            <Col xs={9}>
                <a href={data.url} target="_blank" rel="noreferrer">
                    {data.title}
                </a>
            </Col>
        </Row>
    );
};

export default Job;
