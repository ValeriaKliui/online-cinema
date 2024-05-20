import { useGetStaffInfoQuery } from "@store/services/filmsApi";
import { StaffContainer } from "./styled";
import { PROFESSIONS } from "@store/services/interfaces";
import { FC } from "react";
import { StaffProps } from "./interfaces";

export const Staff: FC<StaffProps> = ({ kinopoiskId }) => {
  const { data: staffInfo } = useGetStaffInfoQuery(kinopoiskId);

  return (
    <div className="wrapper">
      <p>Актеры и создатели</p>
      <StaffContainer>
        {staffInfo?.map(({ posterUrl, professionKey, nameRu, staffId }) => (
          <div key={staffId + professionKey}>
            <img src={posterUrl} />
            <p>{nameRu}</p>
            <p>
              {
                PROFESSIONS[
                  professionKey as unknown as keyof typeof PROFESSIONS
                ]
              }
            </p>
          </div>
        ))}
      </StaffContainer>
    </div>
  );
};
