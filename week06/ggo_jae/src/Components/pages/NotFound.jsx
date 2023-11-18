import { Link } from "react-router-dom";
const NotFound = () => {
    return (<div>
        <h1>해당 페이지를 찾지 못했습니다.</h1>
        <div>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>
        <div><Link to="/Movie">메인 페이지로 이동</Link></div>
    </div>
    );
}

export default NotFound;