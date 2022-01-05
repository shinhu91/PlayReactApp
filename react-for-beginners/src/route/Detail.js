import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Detail = () => {
    const { id } = useParams();
    const [detailInfo, setDetailInfo] = useState({});
    console.log(id);

    useEffect(() => {
        fetch(
            `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${id}`
        )
            .then((resp) => {
                return resp.json();
            })
            .then((json) => {
                console.log(json.movieInfoResult.movieInfo);
                setDetailInfo(json.movieInfoResult.movieInfo);
            });
    }, []);
    return (
        <div style={{ margin: "0 auto", width: "500px" }}>
            <strong
                style={{
                    fontWeight: "500",
                    fontSize: "36px",
                    textAlign: "left",
                    verticalAlign: "middle"
                }}
            >
                영화 상세
            </strong>
            <hr></hr>
            <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>이미지</div>
                <div style={{ flex: 3 }}>
                    <div>
                        <div>{detailInfo.movieNm}</div>
                        <div>{detailInfo.movieNmEn}</div>
                    </div>
                    <hr></hr>
                    <div>
                        <div>
                            <div>
                                <span>
                                    감독 :
                                    {detailInfo.directors &&
                                        detailInfo.directors.map(
                                            (v, i) =>
                                                " " +
                                                v.peopleNm +
                                                " (" +
                                                v.peopleNmEn +
                                                ")"
                                        )}
                                </span>
                                <span></span>
                            </div>
                            <div>
                                <span>
                                    장르 :{" "}
                                    {detailInfo.genres &&
                                        detailInfo.genres
                                            .map((v) => {
                                                return v.genreNm;
                                            })
                                            .join(", ")}
                                </span>
                                <span></span>
                            </div>
                            <div>
                                <span>
                                    개봉 :
                                    {detailInfo.openDt &&
                                        detailInfo.openDt.substring(0, 4) +
                                            "." +
                                            detailInfo.openDt.substring(4, 6) +
                                            "." +
                                            detailInfo.openDt.substring(6, 8)}
                                </span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
