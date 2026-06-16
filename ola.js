// ola.js 
const nome = "Turma 3D1"; 
const hora = new Date().getHours(); 

let saudacao; 
    if (hora < 12) {
        saudacao = "Bom dia";
    } else if (hora < 18) {   
        saudacao = "Boa tarde";
    } else { 
        saudacao = "Boa noite"; 
    }
    
    console.log(`${saudacao}, ${nome}! São ${hora}h. `);

    console.log(typeof window); //o que
    console.log(typeof document); //