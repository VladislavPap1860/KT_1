let a = 5
let b = 6
let sign = '+'

if (b==0)
{
    console.log("На 0 делить нельзя!")
}
else if (sign =='+')
{
    result = a+b
}
else if (sign=='-')
{
    result = a-b
}
else if (sign=='*')
{
    result = a*b
}
else if (sign=='/')
{
    result = a/b
}

console.log(result)