import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const List = ({ movies }) => {
    return (
        <div className="wrapper">
            <h1 style={{ textAlign: "center" }}>일별 박스오피스</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>순위</td>
                        <td>제목</td>
                        <td>개봉일</td>
                        <td>매출액</td>
                        <td>누적관객수</td>
                        <td>금일 상영 횟수</td>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((v, i) => {
                        const movieCd = v.movieCd; // 영화 대표코드
                        const movieNm = v.movieNm; // 영화제목
                        const openDt = v.openDt; // 개봉일
                        const salesAmt = v.salesAmt; // 매출액
                        const audiCnt = v.audiCnt; // 누적관객수
                        const showCnt = v.showCnt; // 해당일자에 상영된 횟수

                        return (
                            <tr key={movieCd}>
                                <th>{i + 1}</th>
                                <td>
                                    <Link to={`/movie/${movieCd}`}>
                                        {movieNm}
                                    </Link>
                                </td>
                                <td>{openDt}</td>
                                <td>{salesAmt}</td>
                                <td>{audiCnt}</td>
                                <td>{showCnt}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default List;
