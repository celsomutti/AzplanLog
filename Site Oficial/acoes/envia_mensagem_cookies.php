<?php
@$titulo = "Mensagem enviada através do site AZPLAN LOG";
@$nome_m = $_POST['nome'];
@$email_m = $_POST['email'];
@$assunto_m = $_POST['assunto'];
@$lgpd_m = $_POST['lgpd'];
@$msg_m = $_POST['mensagem'];
			
//CABEÇALHO - ONFIGURAÇÕES SOBRE SEUS DADOS E SEU WEBSITE
$nome_do_site="AZPLAN LOG";
$email_para_onde_vai_a_mensagem = "faleconosco@azplanlog.com";
$nome_de_quem_recebe_a_mensagem = "Contato do site - AZPLAN LOG";
$exibir_apos_enviar='';

//MAIS - CONFIGURAÇÕES DA MENSAGEM ORIGINAL
$cabecalho_da_mensagem_original="From: $nome_m <$email_m> \n";
$assunto_da_mensagem_original="$assunto_m";

// FORMA COMO RECEBERÁ O E-MAIL (FORMULÁRIO)
// ******** OBS: SE FOR ADICIONAR NOVOS CAMPOS, ADICIONE OS CAMPOS NA VARIÁVEL ABAIXO *************
$configuracao_da_mensagem_original="

$titulo \n\n
Nome: $nome_m
Email: $email_m
Assunto: $assunto_m
ACEITE LGPD: $lgpd_m\n
Mensagem: \n\n$msg_m

";

//CONFIGURAÇÕES DA MENSAGEM DE RESPOSTA
// CASO $assunto_digitado_pelo_usuario="s" ESSA VARIAVEL RECEBERA AUTOMATICAMENTE A CONFIGURACAO
// "Re: $assunto"
//$assunto_da_mensagem_de_resposta = "Confirmação Elaborata";
//$cabecalho_da_mensagem_de_resposta = "From: $nome_do_site < $email_para_onde_vai_a_mensagem>\n";
//$configuracao_da_mensagem_de_resposta="Obrigado por entrar em contato!\nEstaremos respondendo em breve...\nAtenciosamente,\n$nome_do_site\n\nEnviado em: $date";

// ****** IMPORTANTE ********
// A PARTIR DE AGORA RECOMENDA-SE QUE NÃO ALTERE O SCRIPT PARA QUE O SISTEMA FINCIONE CORRETAMENTE
// ****** IMPORTANTE ********

//ESSA VARIAVEL DEFINE SE É O USUARIO QUEM DIGITA O ASSUNTO OU SE DEVE ASSUMIR O ASSUNTO DEFINIDO
//POR VOCÊ CASO O USUARIO DEFINA O ASSUNTO PONHA "s" NO LUGAR DE "n" E CRIE O CAMPO DE NOME
//'assunto' NO FORMULARIO DE ENVIO
$assunto_digitado_pelo_usuario="n";

//ENVIO DA MENSAGEM ORIGINAL
$headers = "$cabecalho_da_mensagem_original";

if($assunto_digitado_pelo_usuario=="n"){
$assunto_m = "$assunto_da_mensagem_original";
}
$seuemail = "$email_para_onde_vai_a_mensagem";
$mensagem_m = "$configuracao_da_mensagem_original";

if($nome_m != ""){
@mail($seuemail,$assunto_m,$mensagem_m,$headers);
}

//ENVIO DE MENSAGEM DE RESPOSTA AUTOMATICA
//$headers = "$cabecalho_da_mensagem_de_resposta";
//if($assunto_digitado_pelo_usuario=="n"){
//$assunto = "$assunto_da_mensagem_de_resposta";
//}else{
//$assunto = "Re: $assunto";
//}

//$mensagem = "$configuracao_da_mensagem_de_resposta";
//mail($email,$assunto,$mensagem,$headers);

                if($nome_m != ""){
		print"<META HTTP-EQUIV=REFRESH CONTENT='0; URL=../enviado_com_sucesso.html'>";
                } else {
print"<META HTTP-EQUIV=REFRESH CONTENT='0; URL=http://www.azplanlog.com'>";
}
?>