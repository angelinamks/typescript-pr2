import { fetchData } from './modules/fetchData';
document.addEventListener('DOMContentLoaded', () => {
    const loadDataBtn = document.getElementById('loadDataBtn');
    loadDataBtn === null || loadDataBtn === void 0 ? void 0 : loadDataBtn.addEventListener('click', () => fetchData());
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            document.body.style.backgroundColor = '#f0f0f0';
        }
        else {
            document.body.style.backgroundColor = 'white';
        }
    });
});
//# sourceMappingURL=main.js.map