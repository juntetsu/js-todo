const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (t) => {
  document.getElementById("incomplete-list").removeChild(t);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //liタグ生成
  const li = document.createElement("li");

  //divタグ生成
  const div = document.createElement("div");
  div.className = "flex";

  //liタグの子要素にdiv追加
  li.appendChild(div);

  //pタグ作成
  const p = document.createElement("p");
  p.innerText = text;

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const parent = completeButton.parentNode;
    const target = parent.parentNode;
    //押された完了ボタンの子孫要素（li）を未完了リストから削除
    deleteFromIncompleteList(target);

    //TODO内容テキスト取得
    const text = parent.firstElementChild.innerText;

    //li以下初期化
    target.textContent = null;

    //divタグ生成
    const div = document.createElement("div");
    div.className = "flex";

    //pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    //button（戻す）生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const parent = backButton.parentNode;
      const target = parent.parentNode;
      //押された戻すボタンの子孫要素（li）を完了リストから削除
      document.getElementById("complete-list").removeChild(target);

      //テキスト取得
      const text = parent.firstElementChild.innerText;

      createIncompleteList(text);
    });

    //liタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(backButton);
    target.appendChild(div);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(target);
  });

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの子孫要素（li）を未完了リストから削除
    const parent = deleteButton.parentNode;
    const deleteTarget = parent.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
