import { StarRatingProps } from "../utils/types";

function StarRating({ rating }: StarRatingProps) {
  return <div>{rating}</div>;
}

export default StarRating;
