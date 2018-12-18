// スタイル付け加え関数
function paragraphColor() {
  const paraColor = document.getElementsByTagName('p');
  for (let p of paraColor) {
    p.classList.add('paragraph');// クラスを加える
  }
}

paragraphColor();// 関数の呼び出し

// スタイルリセット関数
function paragraphReset() {
  const paraColor = document.getElementsByTagName('p');
  for (let p of paraColor) {
    p.classList.remove('paragraph');// クラスを加える
  }
}
