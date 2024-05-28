import { useGetStaffInfoQuery } from "@store/services/filmsApi";
import { StaffContainer, StaffItem, StaffImg } from "./styled";
import { PROFESSIONS, StaffPerson } from "@store/services/interfaces";
import { FC } from "react";
import { StaffProps } from "./interfaces";
import { Slider } from "@shared/Slider";

export const Staff: FC<StaffProps> = ({ kinopoiskId }) => {
  const { data: staffInfo = [] } = useGetStaffInfoQuery(kinopoiskId);

  const renderStaff = ({
    posterUrl,
    professionKey,
    nameRu,
    staffId,
  }: StaffPerson) => (
    <StaffItem key={staffId + professionKey}>
      <StaffImg src={posterUrl} />
      <h6>{nameRu}</h6>
      <p>{PROFESSIONS[professionKey as unknown as keyof typeof PROFESSIONS]}</p>
    </StaffItem>
  );

  return (
    <div className="wrapper">
      <h5>Актеры и создатели</h5>
      <StaffContainer>
        <Slider itemsAmount={4} items={staffInfo} renderItem={renderStaff} />
      </StaffContainer>
    </div>
  );
};
