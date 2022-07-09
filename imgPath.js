const style = getComputedStyle(document.documentElement);
const path = '/Users/jls200015/Library/CloudStorage/Box-Box/images';
const imgs = document.querySelectorAll('img');
imgs.forEach(img => {
    let fileName = img.id;
    img.src = path + '/' + fileName + '.png';
});
