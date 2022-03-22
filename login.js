let pwd = [{uname:"nikhil",pswd:"2222"},{uname:"adhi",pswd:"0947"},{uname:"nikash",pswd:"9123"}];
function verify(){
    var name = document.getElementById("uname").value;
    var pass = document.getElementById("pswd").value;
    for(var i=0;i<pwd.length;i++){
        if( pwd[i].uname == name && pwd[i].pswd == pass)
        {
            document.getElementById("out").innerHTML = "matched";
            var x = true;
        }
    }
    if(x != true){
    document.getElementById("out").innerHTML = "not matched";
    }
}
function adduser(){
    let a,b,c,val;
    a = document.getElementById("f04").value;
    b = document.getElementById("f05").value;
    c = document.getElementById("f06");
    if(c.checked == true){
        document.getElementById("t1").innerHTML = a;
        document.getElementById("t2").innerHTML = b;
        var newu = {uname:a,pswd:b};
        pwd.push(newu);
        val = true;
    }
    if(val == true){
        document.getElementById("otp").innerHTML = "user added";
    }else
    {
        document.getElementById("otp").innerHTML = "user  not  added";
    }

}