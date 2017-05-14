function GetQueryResult() {
    // 得到表单中的数字
    var x = document.getElementById("uscore");
    var a = (x.value);
    // 判断是否为空
    if (a == "") {
        alert("请您输入分数")
    } else {
        // switch语句
        switch (true) {
            case a <= 100 && a >= 90:
                alert("恭喜，您属于一等生");
                console.log(1);
                break;
            case a < 90 && a >= 80:
                alert("恭喜，您属于二等生");
                console.log(2);
                break;
            case a < 80 && a >= 70:
                alert("恭喜，您属于三等生");
                console.log(3);
                break;
            case a < 70 && a >= 60:
                alert("恭喜，您属于四等生");
                console.log(4);
                break;
            case a < 60 && a >= 50:
                alert("恭喜，您属于五等生");
                console.log(5);
                break;
            case a < 50 && a >= 40:
                alert("恭喜，您属于六等生");
                console.log(6);
                break;
            case a < 40 && a >= 30:
                alert("恭喜，您属于七等生");
                console.log(7);
                break;
            case a < 30 && a >= 20:
                alert("恭喜，您属于八等生");
                console.log(8);
                break;
            case a < 20 && a >= 10:
                alert("恭喜，您属于九等生");
                console.log(9);
                break;
            case a < 10 && a >= 0:
                alert("您属于末等生,请继续努力");
                console.log(10);
                break;
            default:
                alert("请您输入0-100之间的整数成绩");
        }
    }
}
