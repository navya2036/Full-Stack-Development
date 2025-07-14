function displayBill(totalAmount) {
    console.log(`Final Bill Amount (with GST): ${totalAmount.toFixed(2)}`);
  }
  
  function calculateBill(baseAmount, gstPercentage, callback) {
    const tax = (gstPercentage / 100) * baseAmount;
    const totalAmount = baseAmount + tax;
    callback(totalAmount); 
  }
  
  const baseAmount = 1000; 
  const gstPercentage = 18; 
  calculateBill(baseAmount, gstPercentage, displayBill);
  