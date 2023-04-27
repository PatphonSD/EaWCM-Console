setInterval(() => {
    const data = { 
        email: "fuckyou12@fuckmail.com", 
        password: "DuCkEvErYtHiNg555555555" 
      };
      
      fetch('http://127.0.0.1:8569/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          console.log('Success:', response);
        })
        .catch((error) => {
          console.error('Error:', error);
        });      
}, 100);