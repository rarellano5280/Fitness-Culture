const { max } = require("../../models/User");

  const maxWeight = async () => {
    const response = await fetch('/api/users/max', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      console.log('button works')
    } else {
      alert(response.statusText);
    }
  };

  document.querySelector('#submitBtn').addEventListener('click', maxWeight);