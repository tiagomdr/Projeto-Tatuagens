const Button = document.querySelector('.enviar');
const nome = document.querySelector('#nome');
const data = document.querySelector('#data');
const hora = document.querySelector('#hora');
const tel = document.querySelector('#tel');
const select = document.querySelector('#select');   

function enviarMensagem() {
    if(nome.value === '' || data.value === '' || hora.value === '' || tel.value === '' || select.value === '') {
        alert('❌ Por favor, preencha todos os campos para agendar sua tatuagem.');
        return;
    }
    alert(`✅ Olá, ${nome.value}! Sua tatuagem foi agendada com sucesso. Entraremos em contato pelo número ${tel.value} para confirmar seu horário.`);
}

    function abrirMenu() {
      document.getElementById("menuLateral").style.width = "250px";
    }

    function fecharMenu() {
      document.getElementById("menuLateral").style.width = "0";
    }

     
Button.addEventListener('click', enviarMensagem )