import { useGetStaffInfoQuery } from "@store/services/filmsApi/filmsApi";
import { StaffContainer, StaffItem, StaffImg } from "./styled";
import { FC, memo } from "react";
import { StaffProps } from "./interfaces";
import { Slider } from "@shared/Slider";
import { PROFESSIONS, StaffPerson } from "@store/services/entities";
import { Breakpoints } from "@providers/Theme/interfaces";

export const Staff: FC<StaffProps> = memo(({ kinopoiskId }) => {
  const { data: staffInfo = [] } = useGetStaffInfoQuery(kinopoiskId);

  const renderStaff = ({
    posterUrl,
    professionKey,
    nameRu,
    staffId,
    nameEn,
  }: StaffPerson) => (
    <StaffItem key={staffId + professionKey}>
      <StaffImg src={posterUrl} />
      <h6>{nameRu || nameEn}</h6>
      <p>{PROFESSIONS[professionKey as unknown as keyof typeof PROFESSIONS]}</p>
    </StaffItem>
  );

  if (staffInfo.length === 0) return <></>;

  return (
    <div className="wrapper">
      <h5>Актеры и создатели</h5>
      <StaffContainer>
        <Slider
          itemsAmount={{
            [Breakpoints.xxl]: 4,
            [Breakpoints.lg]: 3,
            [Breakpoints.md]: 2,
            [Breakpoints.sm]: 1,
          }}
          items={staffInfo}
          renderItem={renderStaff}
        />
      </StaffContainer>
    </div>
  );
});
