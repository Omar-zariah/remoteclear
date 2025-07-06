// Simple frontend UI mockup
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  return response.json();
}

document.addEventListener('DOMContentLoaded', () => {
  const hashInput = document.createElement('input');
  const btn = document.createElement('button');
  const result = document.createElement('pre');

  hashInput.placeholder = 'Enter employee hash';
  btn.textContent = 'Verify';

  btn.onclick = async () => {
    const res = await postData('http://localhost:8000/check-employee', {
      api_key: 'demo123',
      employee_hash: hashInput.value
    });
    result.textContent = JSON.stringify(res, null, 2);
  };

  document.body.appendChild(hashInput);
  document.body.appendChild(btn);
  document.body.appendChild(result);
});