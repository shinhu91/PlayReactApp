import { useEffect, useState } from "react";
import "./App.css";

const addDate = (dt, day) => {
    const result = new Date(dt);
    return result;
};

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // 날짜 계산

        // fetch(
        //     `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${
        //         year + month + day
        //     }`
        // )
        fetch(
            "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20220103"
        )
            .then((resp) => {
                return resp.json();
            })
            .then((json) => {
                console.log(json);
                setMovies(json.boxOfficeResult.dailyBoxOfficeList);
            });
    }, []);
    return (
        <div>
            <h1>일별 박스오피스</h1>
            <table className="basic-table">
                <tbody>
                    <tr>
                        <td>순위</td>
                        <td>제목</td>
                        <td>개봉일</td>
                        <td>매출액</td>
                        <td>누적관객수</td>
                        <td>금일 상영 횟수</td>
                    </tr>
                    {movies.map((v, i) => {
                        const movieNm = v.movieNm; // 영화제목
                        const openDt = v.openDt; // 개봉일
                        const salesAmt = v.salesAmt; // 매출액
                        const audiCnt = v.audiCnt; // 누적관객수
                        const showCnt = v.showCnt; // 해당일자에 상영된 횟수

                        return (
                            <tr
                                key={`${v}_${i}`}
                                className={i % 2 === 0 ? "even" : ""}
                            >
                                <td>{i + 1}</td>
                                <td>{movieNm}</td>
                                <td>{openDt}</td>
                                <td>{salesAmt}</td>
                                <td>{audiCnt}</td>
                                <td>{showCnt}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default App;
