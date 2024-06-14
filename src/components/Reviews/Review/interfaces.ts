import { ReviewData } from "@store/services/entities";

export type ReviewProps = Omit<ReviewData, "positiveRating" | "negativeRating">;
