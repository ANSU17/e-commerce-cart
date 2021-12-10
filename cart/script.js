var CartFunctionality = props => {
    var productNames = ["NoteBook", "Pen", "Pencil", "TextBook", "WorkBook","GeometryBox"];
    var productPrices = [40, 20, 10, 100, 150 ,200];
    var productQty = [0, 0, 0, 0, 0,0];
    var [qty, setQty] = React.useState(productQty);
    var [totalQty, setTotalQty] = React.useState(0);
  
    var calcluateQty = () => {
      var total = 0;
      qty.forEach(q => {
        total += q;
      });
  
      return total;
    };
  
    var calcluateAmount = () => {
      var total = 0;
      qty.forEach((q, index) => {
        total += q * productPrices[index];
      });
  
      return total;
    };
  
  
    var addToCart = index => {
      setQty(qty.map((q, i) => i == index ? q + 1 : q));
    };
  
    function removeCart(index) {
      setQty(qty.map((q, i) => i == index && q > 0 ? q - 1 : q));
    };
  
    return (
      React.createElement("div", null,
  
      productNames.map((nm, index) => 
      React.createElement("div", { key: index },  
      React.createElement("h3", null, nm, " : ", productPrices[index], ", Qty: ",
      qty[index]), 
      React.createElement("button", { onClick: () => addToCart(index) }, "Add"),
      React.createElement("button", { onClick: () => removeCart(index) }, "Remove"))), 
  
  
  
      React.createElement("h4", null, "Total qty: ", calcluateQty()), 
      React.createElement("h4", null, "Total amount: ", calcluateAmount())));
  
  
  };
  
  ReactDOM.render( /*#__PURE__*/React.createElement(CartFunctionality, null), document.getElementById("root"));
  