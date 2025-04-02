


const handleSubmit = async (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const image = document.getElementById("image").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;

    if(!title ||!image || !price || !category){
        return alert("Vui long nhap day du thong tin")
    }
    const payload = {
        title,
        image,
        price: Number(price),
        category
    }
    try {
        await axios.post('http://localhost:3000/products',payload)
        location.href= "/index.html"
        alert("Them san pham thanh cong")

    } catch (error) {
        alert(error)
    }
}