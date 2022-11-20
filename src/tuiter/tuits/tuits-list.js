import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitList = () => {
    const {tuits, loading} = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <>
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                <ul className="list-group">
                    {
                        tuits.map(post =>
                            <TuitItem
                                key={post._id} post={post}/> )
                    }
                </ul>
            }
        </>
    );
}

export default TuitList;