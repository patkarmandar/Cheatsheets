// ===== Theme Management =====
(function () {
    const savedTheme = localStorage.getItem('cheatsheet-theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
})();

const themeBtn = document.querySelector('.button');
if (themeBtn) {
    themeBtn.addEventListener('click', function () {
        const current = document.body.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', next);
        localStorage.setItem('cheatsheet-theme', next);
    });
}

// ===== Copy Button Injection =====
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('pre.code-box').forEach(function (block) {
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
        btn.setAttribute('aria-label', 'Copy code');

        btn.addEventListener('click', function () {
            const code = block.querySelector('code');
            const text = code ? code.textContent : block.textContent;

            navigator.clipboard.writeText(text).then(function () {
                btn.innerHTML = '<i class="bi bi-check2"></i> Copied';
                btn.classList.add('copied');
                setTimeout(function () {
                    btn.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
                    btn.classList.remove('copied');
                }, 2000);
            });
        });

        block.appendChild(btn);
    });
});
