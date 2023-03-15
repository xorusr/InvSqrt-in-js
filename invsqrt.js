//xorusr 2023 
function invSqrt(x) {
  var y = x;
  var i = new Float32Array(1);
  i[0] = y;
  i = new Int32Array(i.buffer);
  i = 0x5f3759df - (i[0] >> 1);
  i = new Float32Array(new Int32Array([i]).buffer)[0];
  y = y * (1.5 - 0.5 * x * i * i);
  return y; //💀👀☠️
}
//conact: 
//xorusr@gmail.com
//xoreduser@gmail.com