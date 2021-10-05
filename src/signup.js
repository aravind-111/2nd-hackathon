import './login.css';

function SignUp() {
  return (
    <>
      <div className="container">
        <form>
          <label>Name </label>
          <br></br>
          <br></br>
          <input type="text" />
          <br></br>
          <br></br>
          <label>Email </label>
          <br></br>
          <br></br>
          <input type="text" />
          <br></br>
          <br></br>
          <label>Password </label>
          <br></br>
          <br></br>
          <input type="password" />
          <br></br>
          <br></br>
          <button>Sign Up</button>
          <br></br>
          <br></br>
        </form>
      </div>
    </>
  );
}

export default SignUp;
