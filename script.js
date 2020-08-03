function result() {
  const input1 = Number(document.getElementById('input1').value);
  const input2 = Number(document.getElementById('input2').value);
  const resultArea = document.getElementById('resultArea');
  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');

  const calculator = {
    multiply: function(c,d){return c*d;},
    plus : function(c,d){return c+d;},
    minus : function(c,d){return c-d;}
    };

  const plus = calculator.plus(input1,input2);
  
  resultArea.innerHTML = `${plus}`
  console.log(plus)

}

function result2() {
    const input1 = Number(document.getElementById('input1').value);
    const input2 = Number(document.getElementById('input2').value);
    const resultArea = document.getElementById('resultArea');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
  
    const calculator = {
      multiply: function(c,d){return c*d;},
      plus : function(c,d){return c+d;},
      minus : function(c,d){return c-d;}
      };
  
    const plus = calculator.plus(input1,input2);
    const multiply = calculator.multiply(input1,input2);
    const minus = calculator.minus(input1,input2);
  
    resultArea.innerHTML = `${multiply}`

    console.log(plus);
    console.log(multiply);
    console.log(minus);
  
  }

    

function result3() {
      const input1 = Number(document.getElementById('input1').value);
      const input2 = Number(document.getElementById('input2').value);
      const resultArea = document.getElementById('resultArea');
      const btn1 = document.getElementById('btn1');
      const btn2 = document.getElementById('btn2');
      const btn3 = document.getElementById('btn3');
    
      const calculator = {
        multiply: function(c,d){return c*d;},
        plus : function(c,d){return c+d;},
        minus : function(c,d){return c-d;}
        };
    
      const plus = calculator.plus(input1,input2);
      const multiply = calculator.multiply(input1,input2);
      const minus = calculator.minus(input1,input2);
    
      resultArea.innerHTML = `${minus}`
      console.log(plus);
      console.log(multiply);
      console.log(minus);
    }

