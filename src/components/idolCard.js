const IdolCard = () => {
  return (
    <div className="idolCard">
      <p>Dynasty:Ahichchhatra</p>
      <p>Period:200CE</p>
      <p>Material:Sandstone</p>
      <p>Location:NationalMusem</p>
      <div className="description">
        <h3>Description:</h3>
        <p>
          The Maitreya Buddha in the Gesture of Fearlessness (Abhaya Mudra)
          represents a future Buddha, a figure of hope and compassion who
          embodies the promise of a future of peace and enlightenment. Maitreya,
          often considered the “Buddha of the Future,” is expected to appear in
          a world that has forgotten the teachings of the current Buddha,
          Siddhartha Gautama, to renew and share the path to enlightenment.
        </p>
        <button className="readMoreBtn">➡READ MORE </button>
      </div>
      <div>
        <button className="addBtn">ADD TO COLLECTION</button>
        <button className="souvenirBtn">SOUVENIRS</button>
      </div>
    </div>
  );
};
export default IdolCard;
