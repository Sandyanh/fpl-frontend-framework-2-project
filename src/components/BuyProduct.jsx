import { useState } from "react";

function BuyProduct() {
  // let count = 0;
  //Khởi tạo biến sử dụng useState để lưu trữ biến count và cập nhật khi có thay đổi
  //const [tenBien, setTenBien] = useState(giá trị khởi tạo của biến)
  const [count, setCount] = useState(0);
  const handleClick = () => {
    //useState không cho cập nhật giá trị trực tiếp của biến
    //Bắt buộc phải sử dụng hàm setCount()
    setCount(count + 1);
    // console.log(count);
  };
  return (
    <div style={{ textAlign: "center", width: "300px" }}>
      <p>Số lượng bán: {count}</p>
      <button onClick={handleClick}>Buy now</button>
    </div>
  );
}

export default BuyProduct;
