import './index.css';
import picture from '../assert/imgs/img.gif';
(function test(){
    var div=document.createElement('div');
    div.innerHTML='向前冲!';
    document.body.append(div);
    var img=new Image();
    img.src=picture;
    document.body.append(img)
})()
