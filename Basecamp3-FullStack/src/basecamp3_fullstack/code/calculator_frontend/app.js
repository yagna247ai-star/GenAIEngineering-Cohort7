const BASE_URL = "http://127.0.0.1:8000";

document.getElementById("calcBtn").addEventListener("click", function () {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const op = document.getElementById("op").value;

  fetch(`${BASE_URL}/${op}?a=${a}&b=${b}`)
    .then(response => {
      if (!response.ok) {
        return response.json().then(err => { throw new Error(err.detail); });
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("result").textContent = "Result: " + data.result;
    })
    .catch(error => {
      document.getElementById("result").textContent = "Error: " + error.message;
    });
});
