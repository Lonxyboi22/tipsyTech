async function liquorFormHandler(event) {
    event.preventDefault();

    const response = await fetch(`/api/liquor`, {
        method: 'SEARCH',
        body: JSON.stringify({
        }),
        headers: {
            'Content-Type': 'application/json'
        }
        });
    
        if (response.ok) {
        console.log('success!');
        document.location.replace('/dashboard');
        } else {
        alert(response.statusText);
        }
}

document.querySelector('.search-drinks').addEventListener('submit', liquorFormHandler);