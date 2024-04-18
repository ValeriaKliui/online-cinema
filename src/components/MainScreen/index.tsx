import { useAppDispatch } from "@/store/interfaces/hooks";
import { useGetPremieresQuery } from "@/store/services/filmsApi";
import { setRandomFilm } from "@/store/slices/filmsSlice/filmsSlice";
import { getRandomFilm } from "@/utils/getRandomFilm";
import { useEffect } from "react";
import { Container } from "./styled";

export const MainScreen = () => {
    const dispatch = useAppDispatch()
    const { data,
        // error, isLoading 
    } = useGetPremieresQuery({
        year: 2024,
        month: "APRIL",
    });
    const { items } = data ?? {};

    const randomFilm = items && getRandomFilm(items);
    const posterUrl = randomFilm?.posterUrl;

    useEffect(() => {
        if (randomFilm) dispatch(setRandomFilm(randomFilm))
    }, [randomFilm, dispatch])


    return (
        <Container $posterUrl={posterUrl}>
            <div className="wrapper"></div>
        </Container>
    );
}