// 채팅메시지 가장 최근부터 보기 위해 스크롤을 요소의 높이만큼 이동함
document.getElementById('cchhaatt').scrollTop = document.getElementById('cchhaatt').scrollHeight;

// 닉네임 글자수 입력제한
function textLengthHandle(el, max) {
    if (el.value.length > max) {
        el.value = el.value.substring(0, max); // 5글자 초과 시, 글자 절삭
    }
}