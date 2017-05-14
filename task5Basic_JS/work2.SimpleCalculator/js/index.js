// 得到x，y，以及运算符的值
function setOp(op, opTips) {
    var tb = document.getElementById("tb_calc");
    tb.style.display = "none";

    document.getElementById("x").value = "";
    document.getElementById("y").value = "";
    document.getElementById("z").innerText = "";
    document.getElementById("op").innerText = op;
    document.getElementById("opTips").value = opTips;

    tb.style.display = "block";
}
// 进行运算
function calc() {
    var x = parseFloat(document.getElementById("x").value);
    var y = parseFloat(document.getElementById("y").value);
    var op = document.getElementById("op").innerText;
    // 输入为空
    if (!document.getElementById("x").value||!document.getElementById("y").value) {
        alert('输入为空，请输入。');
        return;
    }
    var z = "";
    switch (op) {
        case '+':
            z = parseFloat((x + y).toFixed(8));
            break;
        case '-':
            z = parseFloat((x - y).toFixed(8));
            break;
        case '*':
            z = parseFloat((x * y).toFixed(8));
            break;
        case '/':
            if (y =='0') {alert("被除数不能为0")};
            z = parseFloat((x / y).toFixed(8));
            break;
        default:
            z = '';
    }
    console.log(x, op, y, '=', z);
    document.getElementById("z").innerText = z;
}
