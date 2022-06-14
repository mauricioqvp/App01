import React from 'react';
// https://www.w3schools.com/js/js_array_sort.asp

function Teste() {

    function ordenarArray(){
        var lista = [ {
            id: 3,
            item: 'banana'
        },
        {
            id: 1,
            item: 'maçã'
        },
        {
            id:2,
            item: 'aranja'
        }
    ]
        lista.sort((a,b)=>{
            let x = a.item.toLowerCase();
            let y = b.item.toLowerCase();
            if (x<y) return -1;
            if (x>y) return 1;
            return 0;
        });

        lista.map((palavra)=>{
            console.log(palavra);
        })
        
    }
  
  return (
    <div>
      <button onClick={ordenarArray}>Rodar teste JavaScript map</button>
    </div>
  );
}

export default Teste;