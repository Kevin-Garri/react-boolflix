const Stars = (star) => {
  const vote = star.vote_average;
  const divideVote = Math.ceil(vote / 2);

  let rating = "";

  if (divideVote === 0) {
    rating = (
      <>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
      </>
    );
  } else if (divideVote === 1) {
    rating = (
      <>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
      </>
    );
  } else if (divideVote === 2) {
    rating = (
      <>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
      </>
    );
  } else if (divideVote === 3) {
    rating = (
      <>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
      </>
    );
  } else if (divideVote === 4) {
    rating = (
      <>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star grey-star"></i>
      </>
    );
  } else if (divideVote === 5) {
    rating = (
      <>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
        <i className="fa-solid fa-star yellow-star"></i>
      </>
    );
  }

  return <div>{rating}</div>;
};

export default Stars;