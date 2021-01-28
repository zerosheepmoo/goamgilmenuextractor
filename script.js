document.addEventListener("DOMContentLoaded", function() {

    let view = new BaedalView();
    view.data = data;
    view.container = 'container';
    view.draw();
    let con = document.getElementById('container');
    view.memo.container = con;

    view.memo.registerTimeAlterText('2021-01-23', '메뉴작성');

    let textMemo = new TextMemo(document.getElementById('text-memo'));
    textMemo.innerHTML = '<h2>도움말(스크롤하세요...)</h2>\
    <p>메뉴의 배경색에 따라 변경된 날짜를 알 수 있습니다!</p>\
    <p><span style="color:rgb(125, 132, 255);">보라색</span>: 7일 이내</p>\
    <p><span style="color:rgb(250, 141, 250);">분홍색</span>: 3일 이내</p>\
    <p><span style="color:rgb(255, 112, 112);">빨간색</span>: 오늘</p>\
    <p>수정 내역 보기에서 무엇을 수정했는지 알아보세요!</p>\
    <p><span style="color:yellow;">노란색</span>은 쿠팡이츠 어플에 잘못 등록되어 있는 경우!</p>\
    <p>클릭하면 닫힙니다.</p>\
    '

    let textMemo2 = new TextMemo(document.getElementById('text-memo'));
    textMemo2.innerHTML = '<p>다음을 유의해주세요.</p>\
    <p>- 카모마일 레몬 글라스는 하나의 상품입니다. 2개로 나뉘어 등록하지 않도록 조심해주세요.</p>'

    let b1 = document.getElementById('show-menu');
    let b2 = document.getElementById('show-log');
    let b3 = document.getElementById('show-doum');
    let b4 = document.getElementById('to-menu-manage');

    b1.addEventListener('click', function() {
        view.memo.erase();
        view.draw()
    });
    b2.addEventListener('click', function() {
        view.erase();
        view.memo.draw();
    });
    b3.addEventListener('click', function() {
        if (textMemo.isOpen) {
            textMemo.erase();
        }
        else {
            textMemo.draw();
        }
    });
    b4.addEventListener('click', function(){
        if (textMemo2.isOpen) {
            textMemo2.erase();
        }
        else {
            textMemo2.draw();
        }
    })


    window.textMemo = textMemo;
})

