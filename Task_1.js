let price = 5000
let range = "month"

if(range=="month")
{
    range="месяц"
}
else if (range=="day")
{
    range="день"
}
else if(range=="week")
{
    range="неделю"
}
console.log(price,"Р в",range)