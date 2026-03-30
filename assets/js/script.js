// ===== Theme Management =====
(function() {
    const savedTheme = localStorage.getItem('cheatsheet-theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
})();

const themeBtn = document.querySelector('.button');
if (themeBtn) {
    themeBtn.addEventListener('click', function() {
        const current = document.body.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', next);
        localStorage.setItem('cheatsheet-theme', next);
    });
}

// ===== Copy Button Injection =====
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre.code-box');

    codeBlocks.forEach(function(block) {
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
        btn.setAttribute('aria-label', 'Copy code');

        btn.addEventListener('click', function() {
            const code = block.querySelector('code');
            const text = code ? code.textContent : block.textContent;

            navigator.clipboard.writeText(text).then(function() {
                btn.innerHTML = '<i class="bi bi-check2"></i> Copied';
                btn.classList.add('copied');
                setTimeout(function() {
                    btn.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
                    btn.classList.remove('copied');
                }, 2000);
            }).catch(function() {
                // Fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand('copy');
                    btn.innerHTML = '<i class="bi bi-check2"></i> Copied';
                    btn.classList.add('copied');
                    setTimeout(function() {
                        btn.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
                        btn.classList.remove('copied');
                    }, 2000);
                } catch(e) {
                    btn.innerHTML = '<i class="bi bi-x"></i> Failed';
                    setTimeout(function() {
                        btn.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
                    }, 2000);
                }
                document.body.removeChild(textarea);
            });
        });

        block.style.position = 'relative';
        block.appendChild(btn);
    });
});
