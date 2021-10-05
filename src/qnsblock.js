import './qnsblock.css';

function Questions() {
  return (
    <>
      <div className="row">
        <p className="QnState">
          0<span className="QnStateSpan">votes</span>
        </p>
        <p className="QnState">
          0<span className="QnStateSpan">answers</span>
        </p>
        <p className="QnState">
          0<span className="QnStateSpan">views</span>
        </p>
        <div className="QuestionArea">
          <p className="QuestionLink">Getting string in quotes in javascript</p>
          <span className="tag">javascript</span>
          <span className="tag">parsing</span>
          <span className="tag">quotes</span>
          <span className="tag">literals</span>
          <div className="name_and_date">
            asked 2 mins ago <span className="UserLink">M.S.Dhoni</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Questions;
