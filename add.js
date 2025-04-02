


const handleSubmit = async (event) => {
    // Ngăn sự kiện mặc định
    event.preventDefault();
    // lấy dữ liệu từ các ô input thông qua id
    const title = document.getElementById("title").value;
    const image = document.getElementById("image").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;

    // validation
    if(!title ||!image || !price || !category){
        return alert("Vui long nhap day du thong tin")
    }
    // gộp dữ liệu thành 1 đối tượng payload
    const payload = {
        title,
        image,
        price: Number(price),
        category
    }
    // Call api đẩy dữ liệu lên server
    try {
        await axios.post('http://localhost:3000/products',payload)
        location.href= "/index.html"
        alert("Them san pham thanh cong")

    } catch (error) {
        alert(error)
    }
}