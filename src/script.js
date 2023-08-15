import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file


function App() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    loadContent();
  }, [itemList]);

  const loadContent = () => {
    // Your loadContent function code here
  };

  const removeItem = (title) => {
    if (window.confirm('Are you sure to remove?')) {
      const updatedItemList = itemList.filter((el) => el.title !== title);
      setItemList(updatedItemList);
    }
  };

  const changeQty = (e, index) => {
    const updatedItemList = [...itemList];
    if (isNaN(e.target.value) || e.target.value < 1) {
      updatedItemList[index].qty = 1;
    } else {
      updatedItemList[index].qty = parseInt(e.target.value);
    }
    setItemList(updatedItemList);
  };

  const addCart = (title, price, imgSrc) => {
    const existingProduct = itemList.find((el) => el.title === title);
    if (existingProduct) {
      alert('Product already added in Cart');
      return;
    }

    const newProduct = { title, price, imgSrc, qty: 1 };
    setItemList([...itemList, newProduct]);
  };

  const updateTotal = () => {
    // Your updateTotal function code here
  };

  return (
    <div className="App">
      {/* Your JSX code for rendering the cart, buttons, and other elements */}
    </div>
  );
}

export default App;