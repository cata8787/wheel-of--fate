import React from 'react';
import pick_employees from './pag5'
function pag1(){
    return(
        <div>
            <h2>...pagina1...</h2>
            <button onclick={pick_employees()}>picking employees </button>
        </div>
    );
}

export default pag1