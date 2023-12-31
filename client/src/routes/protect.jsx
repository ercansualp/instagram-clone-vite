import {useContext} from "react";
import {Context} from "~/contexts/AuthContext.jsx";
import Container from "~/components/Container/index.jsx";
import {Navigate} from "react-router-dom";

const Protect = ({children, access, width}) => {
    const {user, currentUser} = useContext(Context);
    console.log("children verisi", children);
    return {children};
}

export default Protect