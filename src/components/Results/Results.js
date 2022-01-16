import React from "react";
import moment from "moment";

import { Row, Col } from 'react-bootstrap';

import "./Results.css";

const Results = props => {
    return (
        <Row className="justify-content-center m-0">
            {props.searched && 
                <p className="marginTop">{props.searching ? "Loading ..." :
                    props.error ? "Error occured, please try again :(" :
                    props.results.length === 0 ? "No search results :(" : props.results.length + " search results"}</p>}
            {props.results.length > 0 && props.results.map(result => (
                <Col className="animeCard col-lg-3 col-md-6 col-12 text-center mx-3 mt-5">
                    <img src={result.image_url} alt="Anime"/>
                    <h4>{result.title}</h4>
                    <div className="info">
                        <p>Number of episodes: {result.episodes}</p>
                        <p>Start date: {moment(result.start_date).year()}</p>
                        {result.end_date && <p>End date: {moment(result.end_date).year()}</p>}
                        <p>Rating: {result.score}</p>
                    </div>
                </Col>
            ))}
        </Row>
    );
}

export default Results;