var flag = 0;
// 获得输入
function equation(value) {
    if (flag == 0) {
        document.getElementById('equation').value += value;
    } else if (flag == 1) {
        if (value == "+" || value == "-" || value == "*" || value == "/") {
            document.getElementById('equation').value += value;
        } else {
            document.getElementById('equation').value = value;
        }
        flag = 0;
    } else {
        if (value == "+" || value == "-" || value == "*" || value == "/") {
            document.getElementById('equation').value += value;
        } else {
            document.getElementById('equation').value = value;
        }
        flag = 0;
    }

}
// 清空操作
function clear_equation(value) {
    document.getElementById('equation').value = "";
}
// 计算操作
function solve(category) {

    if (category == "=") {
        var valuetemp = document.getElementById('equation').value;
        var value;
        if (valuetemp.indexOf("/0") > 0 &&!(valuetemp.indexOf("/0.") > 0) ) {
        	alert("输入错误，请重新输入");
        	valuetemp=NaN;
        }
        try {
            value = (parseFloat(eval(valuetemp))).toFixed(4);
        } catch (e) {
            alert("输入错误，请重新输入");
        }
        
        document.getElementById('equation').value = value;
        flag = 1;


    } else if (category == "sin") {
        var value = Math.sin(document.getElementById('equation').value * (2 * Math.PI / 360));
        document.getElementById('equation').value = value;
        flag = 2;

    } else if (category == "cos") {
        var value = Math.cos(document.getElementById('equation').value * (2 * Math.PI / 360));
        document.getElementById('equation').value = value;
        flag = 2;

    } else if (category == "tan") {
        var value = Math.tan(document.getElementById('equation').value * (2 * Math.PI / 360));
        document.getElementById('equation').value = value;
        flag = 2;

    } else if (category == "log"){
        var value = document.getElementById('equation').value;
        document.getElementById('equation').value = Math.log(value);
        flag = 2;

    }else {
        var value = document.getElementById('equation').value;
        document.getElementById('equation').value = Math.sqrt(value);
        flag = 2;

    }
}
