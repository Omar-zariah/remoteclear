
const webhookURL = "http://localhost:5678/webhook-test/webhook-test/verify-remote-worker";

function showLogin() {
  document.getElementById("mainContent").innerHTML = `
    <h2 class="mb-4">Login</h2>
    <form onsubmit="event.preventDefault(); alert('Logged in (demo)');">
      <div class="mb-3"><label class="form-label">Email</label><input type="email" class="form-control" required /></div>
      <div class="mb-3"><label class="form-label">Password</label><input type="password" class="form-control" required /></div>
      <button class="btn btn-primary">Login</button>
    </form>
  `;
}

function showRegister() {
  document.getElementById("mainContent").innerHTML = `
    <h2 class="mb-4">Register as Company or Employer</h2>
    <form onsubmit="event.preventDefault(); alert('Registered (demo)');">
      <div class="mb-3"><label class="form-label">Full Name</label><input type="text" class="form-control" required /></div>
      <div class="mb-3"><label class="form-label">Email</label><input type="email" class="form-control" required /></div>
      <div class="mb-3"><label class="form-label">Role</label>
        <select class="form-select" required>
          <option value="employer">Employer</option>
          <option value="company">Company</option>
        </select>
      </div>
      <button class="btn btn-success">Register</button>
    </form>
  `;
}

function showEmployerPassportForm() {
  document.getElementById("mainContent").innerHTML = `
    <h2>Create Workplace Passport</h2>
    <form id="passportForm">
      <div class="mb-3"><label class="form-label">Full Name</label><input type="text" name="fullName" class="form-control" required /></div>
      <div class="mb-3"><label class="form-label">Email</label><input type="email" name="email" class="form-control" required /></div>
      <div class="mb-3"><label class="form-label">Job Title</label><input type="text" name="role" class="form-control" required /></div>
      <button type="submit" class="btn btn-primary">Generate Passport</button>
      <div id="passportStatus" class="mt-3"></div>
    </form>
  `;

  document.getElementById("passportForm").onsubmit = async function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        document.getElementById("passportStatus").innerHTML = "<div class='text-success'>Passport created and stored successfully.</div>";
      } else {
        document.getElementById("passportStatus").innerHTML = "<div class='text-danger'>Error storing passport.</div>";
      }
    } catch {
      document.getElementById("passportStatus").innerHTML = "<div class='text-danger'>Network error.</div>";
    }
  };
}

function showCompanyCheckForm() {
  document.getElementById("mainContent").innerHTML = `
    <h2>Verify Employer by Passport</h2>
    <form id="checkForm">
      <div class="mb-3"><label class="form-label">Employer Email</label><input type="email" name="email" class="form-control" required /></div>
      <button type="submit" class="btn btn-warning">Check</button>
      <div id="checkStatus" class="mt-3"></div>
    </form>
  `;

  document.getElementById("checkForm").onsubmit = async function(e) {
    e.preventDefault();
    const email = e.target.email.value;
    try {
      const res = await fetch(`${webhookURL}?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      if (data && data.fingerprintID) {
        document.getElementById("checkStatus").innerHTML = `<div class='text-success'>Verified: ${data.fullName} – ${data.role}</div>`;
      } else {
        document.getElementById("checkStatus").innerHTML = "<div class='text-danger'>Employer not found.</div>";
      }
    } catch {
      document.getElementById("checkStatus").innerHTML = "<div class='text-danger'>Check failed.</div>";
    }
  };
}
