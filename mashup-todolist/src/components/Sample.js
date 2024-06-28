import React, { useContext } from "react";
import {TodoStateContext,TodoDispatchContext} from "../components/TodoContext";

function Sample() {

    const state = useContext(TodoStateContext);
    const dispatch = useContext(TodoDispatchContext);

    return <div>Sample</div>
}

