import { useGetStaffInfoQuery } from "@store/services/filmsApi";
import { StaffContainer } from "./styled";
import { PROFESSIONS } from "@store/services/interfaces";

export const Staff = ({ filmID }) => {
  const { data: staffInfo } = useGetStaffInfoQuery(filmID);

  return (
    <div>
      <p>Актеры и создатели</p>
      <StaffContainer>
        {staffInfo?.map(({ posterUrl, professionKey, nameRu }) => (
          <div>
            <img src={posterUrl} />
            <p>{nameRu}</p>
            <p>{PROFESSIONS[professionKey]}</p>
          </div>
        ))}
      </StaffContainer>
    </div>
  );
};
