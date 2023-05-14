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

  //button（完了）タグ生成
  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => {
    alert();
  })

  //button（削除）タグ生成
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    alert('削除');
  })

  //divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);


  //未完了のリストに追加
  document.getElementById('incomplete-list').appendChild(li);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
