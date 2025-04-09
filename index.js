const renderRow = (
  product = {
    id: "",
    title: "",
    image: "",
    price: "",
    category: "",
  }
) => {
  return `
    <tr>
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td><img src="${product.image}" width="100px"></td>
        <td>${product.price}</td>
        <td>${product.category}</td>
        <td>
        <button class="btn btn-danger" onClick="deleteProduct(${product.id})"> Delete</button>
        <a class="btn btn-primary" href="/add.html?id=${product.id}"> Update</a>
        </td>
    </tr>
    `;
};

//khai báo
const getProduct = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/products");
    const htmlRender = data.map(renderRow).join("");
    document.getElementById("listProduct").innerHTML = htmlRender;
  } catch (error) {
    console.log(error);
  }
};
// Gọi hàm
getProduct();

const deleteProduct = async (id) => {
  const isConfirm = confirm("Ban co chac muon xoa khong");
  if (!isConfirm) {
    return;
  }
  try {
    await axios.delete(`http://localhost:3000/products/${id}`);
    alert("Xoa thanh cong");
  } catch (error) {
    console.log(error);
  }
};
