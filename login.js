const handleLogin = async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    return alert("Vui long nhap day du thong tin");
  }

  if (password.length < 6) {
    return alert("mat khau phai lon hon 6 ky tu");
  }
  const payload = {
    email,
    password,
  };
  try {
    const { data } = await axios.post(
      "http://localhost:3000/login",
      payload
    );

    localStorage.setItem("token", data.accessToken);

    location.href = "/index.html";
    alert("login  thanh cong");
  } catch (error) {
   alert(error.response.data);
  }
};
