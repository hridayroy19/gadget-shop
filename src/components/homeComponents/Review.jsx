import UserReview from "./UserReview";

const Review = () => {
  return (
    <>
      <h2 className=" mt-7 mb-7 text-center text-2xl">User Review </h2>
      <div className="grid grid-cols-3 gap-3">
        <UserReview />
        <UserReview />
        <UserReview />
      </div>
    </>
  );
};

export default Review;
