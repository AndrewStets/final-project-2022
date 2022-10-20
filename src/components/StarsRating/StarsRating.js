import {useState} from "react";
import {useLocation} from "react-router-dom";

import {Star} from "./Star";

const StarRating = ({movie}) => {

    // const location = useLocation();
    // const {state:movie} = location;

    // console.log(movie);

    const [rating, setRating] =useState(parseInt(movie.vote_average));
    const [selection, setSelection] =useState(null);

    const hoverOver = event => {
        let val = 0;
        if (event && event.target && event.target.getAttribute('data-star-id'))
            val = event.target.getAttribute('data-star-id');
        setSelection(val);
    };
    return (
        <div
            onMouseOut={() => hoverOver(null)}
            onClick={e => setRating(e.target.getAttribute('data-star-id') || rating)}
            onMouseOver={hoverOver}
        >
            {Array.from({ length: 10 }, (v, i) => (
                <Star
                    starId={i + 1}
                    key={`star_${i + 1}`}
                    marked={selection ? selection >= i + 1 : rating >= i + 1}
                />
            ))}
        </div>
    );
};

export {
    StarRating
};