const id = Number(location.search.split("=")[1]);

const getProductById = async () => {
  if (!id) return;
  try {
    const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    document.getElementById("title").value = data.title;
    document.getElementById("image").value = data.image;
    document.getElementById("price").value = data.price;
    document.getElementById("category").value = data.category;
  } catch (error) {
    console.log(error);
  }
};
getProductById();
const handleSubmit = async (event) => {
  // Ngăn sự kiện mặc định
  event.preventDefault();
  // lấy dữ liệu từ các ô input thông qua id
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;

  // validation
  if (!title || !image || !price || !category) {
    return alert("Vui long nhap day du thong tin");
  }
  // gộp dữ liệu thành 1 đối tượng payload
  const payload = {
    title,
    image,
    price: Number(price),
    category,
  };
  // Call api đẩy dữ liệu lên server
  try {
    if (!id) {
      await axios.post("http://localhost:3000/products", payload);
    } else {
      await axios.put(`http://localhost:3000/products/${id}`, payload);
    }

    location.href = "/index.html";
    alert("Thanh cong");
  } catch (error) {
    alert(error);
  }
};
