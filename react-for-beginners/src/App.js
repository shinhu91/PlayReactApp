import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import List from "./route/List";
import Detail from "./route/Detail";

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
        <BrowserRouter>
            <Switch>
                <Route path="/movie/:id">
                    <Detail />
                </Route>
                <Route path="/">
                    <List movies={movies} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
