//console.log('hello');
/*var students = [{
        name: 'Toan',
        gender: 'male',
        math: 6,
        English: 3
    },
    {
        name: 'Hoa',
        gender: 'female',
        math: 5,
        English: 7
    },
    {
        name: 'Hai',
        gender: 'male',
        math: 9,
        English: 7
    },
    {
        name: 'Tam',
        gender: 'male',
        math: 6,
        English: 7
    },
    {
        name: 'Trang',
        gender: 'female',
        math: 9,
        English: 8
    },
];*/
const $tablecontent = document.getElementById('table-content');
const $buttontable = document.getElementById('button-table');
var $name = document.getElementById('Name');
var $name = document.getElementById('Name');
var $male=document.getElementById('Male');
var $female=document.getElementById('Female');
var $math=document.getElementById('math');

var $English=document.getElementById('english');
console.log($male.value);
console.log($female.value);
const $canhbao = document.getElementById('canhbao');
//console.log($canhbao);

/*function averageCalc() {
    let sum = mathpoint + engpoint;
    
    return (sum / 2);
}*/

  var html='';
  var d=0;
  
  
$buttontable.addEventListener('click', (e) => {
    e.preventDefault();
  //Khai báo các loại biến
  const username = $name.value;
  const mathpoint=$math.value;
  const engpoint=$English.value;
 
  if ($male.checked === true) {
      $gender='Male';
  } else {
      $gender='Female';
  }
    //Đưa các biến vào mảng student
  var students=[{
    namemain: username,
    gendermain:$gender, 
    mathmain:mathpoint,
    engmain:engpoint
}
]  
    //tính toán trung bình
    /*function averageCalc(x,y) {
        let sum = 0;
        for (var i = 0; i < arguments.length; i++) {
          if (typeof arguments[i] === 'number') {
            sum = x+y;
          }
        }
        
        return sum / 2 ;/// arguments.length;
        
      } */
      //console.log(averageCalc);  
      //Tạo dữ liệu cho table
      
      if (username.length <= 3) {
        $canhbao.innerText= 'sai roi';
    } else {  
      students.forEach((student, idx) => {
        
        
        
        stdHtml = '<tr>' +
                    `<td>${ d += 1 }</td>` +
                    `<td>${ student.namemain }</td>` +
                    `<td>${ student.gendermain }</td>` +
                    `<td>${ student.mathmain }</td>` +
                    `<td>${ student.engmain }</td>` +
                    `<td> ${(Number(student.mathmain) + Number(student.engmain))/2} </td>` +
                  '</tr>';
        html += stdHtml;
        
      })
    //---------------------------------------
    
        $canhbao.innerText='';
        $tablecontent.innerHTML=html;
    
    }

})
/*$buttontable.addEventListener('click', () => {
    console.log('click', $buttontable.innerHTML);
    if ($buttontable.innerText === "View data") {
        $buttontable.innerText = "Hide data";
        tablecontent.innerText = HTML;
    } else {
        $buttontable.innerText = "View data";
        tablecontent.innerText = '';
    }
})*/
//console.log(tablecontent);
/*
  tablecontent[0].innerHTML='<tr>'+
  '<td>1</td>' +
  '<td>John</td>'
  + '<td>Male</td>'
  + '<td>6</td>'
 + '<td>8</td>'
+  '<td>7</td>'
+ '</tr>';*/







//console.log(HTML);
/*for (var i = 0; i < students.length; i++) {
    tablecontent[i].innerHTML=HTML;
}*/
//var buttontable2= '<button id="button-table">Hide data</button>'
//<button id="button-table">View data</button>
//console.log(buttontable.innerHTML);

/*const now=new Date();
console.log(now);
var ngay = [
    'chu nhat',
    'thu hai',
    'thu ba',
    'thu tu',
    'thu nam',
    'thu sau',
    'thu bay',
    
]

var thang=now.getMonth()+1;
var now1 =`Hom nay la ${ngay[now.getDay()]} ngay ${now.getDate()} thang ${thang} nam ${now.getFullYear()}`;
const $time=document.getElementById('time');
$time.innerHTML=now1;*/



/*students.forEach((infor,idx) => {
    var dlHTML= `<tr>`
                + `<td> ${idx}</td>` 
                + `<td>${infor.name}</td>`
                + `<td>${infor.gender}</td>`
                + `<td>${infor.math}</td>`
                + `<td>${infor.English}</td>`
                + `<td> ${ averageCalc(infor.math, infor.English) } </td>`
                + `</tr>`;
    HTML+=dlHTML;
    })*/
