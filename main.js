$('form').on('submit', function (evento) {
    evento.preventDefault();

    const novaTarefa = $('#campo-nome-da-tarefa').val();
    const novaLinhaLista = $(`<li class="novaTarefa"></li>`);
    const botaoTarefa = $(`<a>${novaTarefa}</a>`).appendTo($('<div></div>').appendTo(novaLinhaLista));

    novaLinhaLista.on('click', function () {
        $(this).find('a').toggleClass('tarefaRealizada');
    });
    
    $(novaLinhaLista).appendTo('ul');

    $('#tarefas-titulo').fadeIn(400, function () {
        $(novaLinhaLista).fadeIn(1000);
    });
    
    $('#campo-nome-da-tarefa').val('');
});