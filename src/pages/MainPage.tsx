import { MainScreen } from '@/components/MainScreen';
import { Search } from '@/components/Search';
import { Collections } from '@components/Collections';
import { useAppDispatch } from '@store/interfaces/hooks';
import { unsetPremier } from '@store/slices/filmsSlice/filmsSlice';
import { useEffect } from 'react';

export const MainPage = () => {
    const dispatch = useAppDispatch()
    useEffect(() => { return () => { dispatch(unsetPremier()) } }, [dispatch])

    return (
        <>
            <MainScreen />
            <Search />
            <Collections />
        </>
    );
}
