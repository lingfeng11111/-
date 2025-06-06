document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.getElementById('like-btn');
    const dislikeBtn = document.getElementById('dislike-btn');
    const heartsContainer = document.getElementById('hearts-container');
    
    let dislikeCount = 0;
    let heartInterval;
    
    // 点击喜欢按钮
    likeBtn.addEventListener('click', () => {
        // 显示弹窗
        showModal('杰哥我也喜欢你！');
        
        // 开始无限循环爱心
        if (heartInterval) {
            clearInterval(heartInterval);
        }
        
        heartInterval = setInterval(createHeart, 300);
    });
    
    // 点击不喜欢按钮
    dislikeBtn.addEventListener('click', () => {
        dislikeCount++;
        
        // 每次点击不喜欢，喜欢按钮变大
        const newSize = 1 + (dislikeCount * 0.2);
        likeBtn.style.transform = `scale(${newSize})`;
        likeBtn.style.zIndex = '10';
        
        // 如果变得足够大，占满整个页面
        if (newSize >= 5) {
            likeBtn.style.position = 'fixed';
            likeBtn.style.top = '50%';
            likeBtn.style.left = '50%';
            likeBtn.style.transform = 'translate(-50%, -50%) scale(15)';
            likeBtn.style.borderRadius = '50%';
            likeBtn.style.width = '30%';
            likeBtn.style.height = '30%';
            
            // 自动触发喜欢按钮
            setTimeout(() => {
                likeBtn.click();
            }, 500);
        }
    });
    
    // 创建爱心元素
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heartsContainer.appendChild(heart);
        
        // 动画结束后移除爱心
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    // 显示弹窗
    function showModal(message) {
        // 移除已有弹窗
        const existingModal = document.querySelector('.modal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // 创建新弹窗
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.textContent = message;
        document.body.appendChild(modal);
        
        // 3秒后自动关闭
        setTimeout(() => {
            modal.remove();
        }, 3000);
    }
}); 