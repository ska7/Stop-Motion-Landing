export default function ReviewCard({ reviews }) {
  return (
    <div className="review-card-wrapper">
      <div className="mask">
        <ul>
          <li key={index} className={`review-card card${index}`}>
            <img src={review}></img>
          </li>
        </ul>
      </div>
    </div>
  );
}
