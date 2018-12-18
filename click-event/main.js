// スタイル付け加え関数
function paragraphColor() {
  const paraColor = document.getElementsByTagName('p');
  for (let p of paraColor) {
    p.classList.add('paragraph');// クラスを加える
  }
}

// スタイルリセット関数
function paragraphReset() {
  const paraColor = document.getElementsByTagName('p');
  for (let p of paraColor) {
    p.classList.remove('paragraph');// クラスを加える
  }
}

// スタイル追加ボタン
const paragraphAction = document.querySelectorAll('[data-action="paragraph"]');
for (let button of paragraphAction) {
  button.addEventListener('click', evt => {
    evt.preventDefault();
    paragraphColor();
  });
}

// スタイルリセットボタン
const paragraphResetAction = document.querySelectorAll('[data-action="removeParagraphStyle"]');
for (let button of paragraphResetAction) {
  button.addEventListener('click', evt => {
    evt.preventDefault();
    paragraphReset();
  });
}
