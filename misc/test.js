test = "Kira"

for (var i = 0; i < test.length;i++){
  for (var j = i; j < test.length; j++){
    console.log(test.slice(i,j+1))
  }
}