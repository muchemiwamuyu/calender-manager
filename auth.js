window.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/auth/status', 
        {
            credentials: "include"
        }
    ).then(res => {
        if(!res.ok) {
            // if user not logged in to redirect to google login
            window.location.href = 'https://callivent-backend.onrender.com/auth/google'
            return;
        }

        return res.json();
    })
    .then(data => {
        if(data?.user) {
            // update account circle if logged in
            const accountCircle = document.getElementById('accountCircle')
            
            if (accountCircle) {
                accountCircle.textContent = data.user.name.charAt(0).toUpperCase();
                accountCircle.title = data.user.name // to see full details  
            }
            window.location.href = 'https://muchemiwamuyu.github.io/calender-manager/'
        }
    })
    .catch(error => {
        console.error('error checking login status', error)
        window.location.href = 'https://callivent-backend.onrender.com/auth/google'
    })
})