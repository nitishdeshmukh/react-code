export default function Data() {
    function show() {
      var a = document.getElementById("t1").value;
      if (a % 2 === 0) {
        document.getElementById("z").innerHTML = "even";
      } else {
        document.getElementById("z").innerHTML = "odd";
      }
    }
    return (
      <div className="container">
        <label for="no">Enter any no:</label>
        <input tupe="text" name="no" id="t1" />
        <br />
        <button onClick={show}>OK</button>
        <br />
        <p id="z"></p>
      </div>
    );
  }