import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div 生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li 生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button 完了タグ生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";

  // button 削除タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // div タグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  //　未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
