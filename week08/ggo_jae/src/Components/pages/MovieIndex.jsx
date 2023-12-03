import { Link, useParams } from "react-router-dom";
import movies from "../movieDummy";

const MovieIndex = () => {
    const { title } = useParams();//useParms는 URL에서 값을 가져오는 훅
    const movie = movies.results.find((m) => m.title.toString() === title);
    /* movie라는 변수에 값을 할당하는데
    find : 주어진 콜백함수의 조건을 만족하는 첫번째 요소를 찾음
    (m) => m.title.toString() === title : 콜백함수
    m은 배열의 각 요소(영화 개체들)
    m.title.toString()은 m.title을 문자열로 변환시킴
    이게 title 변수와 같은지 판별하고 맞는 객체를 movie 변수에 할당함 */
    if (!movie) {
        return (<div>
            <h1>해당 페이지를 찾지 못했습니다.</h1>
            <div>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>
            <div><Link to="/Movie">메인 페이지로 이동</Link></div>
        </div>
        );

    }
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}
                style={{ height: "500px" }}></img>
            <div>{movie.title}</div>
        </div>
    )
}

export default MovieIndex;