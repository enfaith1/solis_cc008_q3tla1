document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = {};

            formData.forEach((value, key) => {
                data[key] = value instanceof File ? value.name : value;
            });

            sessionStorage.setItem('formData', JSON.stringify(data));
            window.location.href = 'output.html';
        });
    }

    if (window.location.pathname.includes('output.html')) {
        const data = JSON.parse(sessionStorage.getItem('formData') || '{}');

        for (const [key, value] of Object.entries(data)) {
            const element = document.getElementById(key);
            if (element && !['password', 'confirmPassword'].includes(key)) {
                element.textContent = value;
            }
        }
    }
});
