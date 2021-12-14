// Get the height of staircase
var height_str = prompt('Input the height of staircase')

// Change datatype of input value to number
height = parseInt(height_str)

// Check if input data out of range
if(height > 0 && height<=100){
    for(i=1; i<=height; i++) {
        //Create row #
        for(j=1; j<=height ;j++) {
            if (j <= height - i){
                document.writeln("&nbsp;&nbsp;")
            }
            else{
                document.writeln(" # ")
            }
        }
        //write a new line
        document.writeln("<br/>")
    }
}
else{
    document.writeln("The height must be in range from 0 to 100")
}