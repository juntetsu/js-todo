const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  //liタグ生成
  const li = document.createElement('li');

  //divタグ生成
  const div = document.createElement('div');
  div.className = 'flex';

  //liタグの子要素に各要素追加
  li.appendChild(div);

  //pタグ作成
  const p = document.createElement('p');
  p.innerText = inputText;

  //divタグの子要素に各要素を設定
  div.appendChild(p);

  //未完了のリストに追加
  document.getElementById('incomplete-list').appendChild(li);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
