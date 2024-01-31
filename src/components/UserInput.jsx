export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>초기 자금</label>
          <input required type="number" />
        </p>
        <p>
          <label>연간 자금</label>
          <input required type="number" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>예상 이자</label>
          <input required type="number" />
        </p>
        <p>
          <label>기간</label>
          <input required type="number" />
        </p>
      </div>
    </section>
  );
}
