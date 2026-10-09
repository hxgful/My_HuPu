/**
     * 极简页面切换逻辑
     * @param {string} showId 需要显示的页面ID
     */
    function switchPage(showId) {
        // 隐藏所有页面
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        // 显示目标页面
        document.getElementById(showId).classList.add('active');
        // 平滑滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }