function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5VL8WqNclR2":
        Script1();
        break;
  }
}

function Script1()
{
  var audio – document.getElementByid(‘bgsong’);
audio.src =”audiosong1.mp3”;
audio.load();
audio.play();

}

