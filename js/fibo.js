var a=0;
var b=1;

for(var i = 0; i<n; i++){ //we can set n to infinity since we dont know when the last number in the sequence will be greater than n
    if (b>n)break; //this condition is used to break out of the loop once the number in the sequence is greater than n
    var c=a;
    a=b;    //
    b=c+a;  //f(n) = f(n-1) + f(n-2)
    console.log(b);
}

