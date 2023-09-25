function formapagamento(){
    var checkboxes = document.querySelectorAll('input[name="formaDePagamento"]');
    var formaDePagamento = '';

    checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
        formaDePagamento = checkbox.value;
        console.log(formaDePagamento);
    }
    });
}
function submitForm() {
    document.getElementById("loadingIcon").classList.remove("d-none");

    var envio;
    var cnpj = document.getElementById('cnpj').value;
    var razaoSocial = document.getElementById('razaoSocial').value;
    var tipoEmpresa = document.getElementById('tipoEmpresa').value;
    var cep = document.getElementById('cep').value;
    var logradouro = document.getElementById('logradouro').value;
    var numero = document.getElementById('numero').value;
    var complemento = document.getElementById('complemento').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('UF').value;
    var dataFundacao = document.getElementById('dataFundacao').value;
    var bairro = document.getElementById('bairro').value;
    var viabilidade = document.getElementById('viabilidade').value;
    var pontoReferencia = document.getElementById('pontoReferencia').value;
    var cpfSocio = document.getElementById('cpfSocio').value;
    var nomeSocio = document.getElementById('nomeSocio').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var whatsapp = document.getElementById('whatsapp').value;
    var plano = document.getElementById('plano').value;
    var vencimento = document.getElementById('vencimento').value;
    var vendedor = document.getElementById('vendedor').value;
    var banco = document.getElementById('banco').value;
    var agencia = document.getElementById('agencia').value;
    var conta = document.getElementById('conta').value;

    var formaPagamentoCheckboxes = document.getElementsByName("formaDePagamento");
    var formaDePagamento;

    for (var i = 0; i < formaPagamentoCheckboxes.length; i++) {
    if (formaPagamentoCheckboxes[i].checked) {
        if (formaPagamentoCheckboxes[i].value === "boleto") {
        //codigo
            formaDePagamento = formaPagamentoCheckboxes[i].value;
        } else if (formaPagamentoCheckboxes[i].value === "contaCorrente") {
        //codigo
            formaDePagamento = formaPagamentoCheckboxes[i].value;
        }
    }
    }

    if (!cnpj || !razaoSocial || !tipoEmpresa || !cep || !logradouro || !numero || !bairro || !cidade || !estado || !cpfSocio || !nomeSocio || !email || !telefone || !whatsapp || !plano || !vencimento || !vendedor) {
        document.getElementById("loadingIcon").classList.add("d-none");
        document.getElementById("rvcnpj").innerHTML = "<div class='alert alert-primary' role='alert'>Preencha todos os campos</div>";
        return; // Impedir o envio do formulário
    }
    if (!validateEmail(email)) {
        document.getElementById("loadingIcon").classList.add("d-none");
        document.getElementById("rvcnpj").innerHTML = "<div class='alert alert-warning' role='alert'>Verifique o e-mail digitado</div>";
        return; // Impedir o envio do formulário
    }

    var modalidade = "CNPJ";

    var formData = {
        razaoSocial: razaoSocial,
        cnpj: cnpj,
        tipoEmpresa: tipoEmpresa,
        cep: cep,
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        cidade: cidade,
        estado: estado,
        dataFundacao: dataFundacao,
        bairro: bairro,
        pontoReferencia: pontoReferencia,
        cpfSocio: cpfSocio,
        nomeSocio: nomeSocio,
        email: email,
        telefone: telefone,
        whatsapp: whatsapp,
        plano: plano,
        vencimento: vencimento,
        vendedor: vendedor,
        banco: banco,
        agencia: agencia,
        conta: conta,
        modalidade: modalidade,
        viabilidade: viabilidade,
        formaDePagamento: formaDePagamento,
        dataEnvio: new Date().toLocaleString()
    };
    
    google.script.run
    .withSuccessHandler(function() {
        envio = true;
        document.getElementById("sucesso").style.display = "block";
        document.getElementById("loadingIcon").classList.add("d-none");
    })
    .withFailureHandler(function() {
        envio = false;
        document.getElementById("senderro").style.display = "block";
        document.getElementById("loadingIcon").classList.add("d-none");
    })
    .doPost(formData);
    
    clearFormFields();
    document.getElementById("loadingIcon").classList.add("d-none");
}

function submitCpfForm() {
    document.getElementById("loadingIcon").classList.remove("d-none");

    var envio;
    var cpfSocio = document.getElementById('cpfSocio').value;
    var nomeSocio = document.getElementById('nomeSocio').value;
    var rg = document.getElementById('rg').value;
    var nomeMae = document.getElementById('nomeMae').value;
    var dtNascimento = document.getElementById('dtNascimento').value;
    var cep = document.getElementById('cep').value;
    var logradouro = document.getElementById('logradouro').value;
    var numero = document.getElementById('numero').value;
    var complemento = document.getElementById('complemento').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('UF').value;
    var bairro = document.getElementById('bairro').value;
    var viabilidade = document.getElementById('viabilidade').value;
    var pontoReferencia = document.getElementById('pontoReferencia').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var whatsapp = document.getElementById('whatsapp').value;
    var plano = document.getElementById('plano').value;
    var vencimento = document.getElementById('vencimento').value;
    var vendedor = document.getElementById('vendedor').value;
    var banco = document.getElementById('banco').value;
    var agencia = document.getElementById('agencia').value;
    var conta = document.getElementById('conta').value;

    var formaPagamentoCheckboxes = document.getElementsByName("formaDePagamento");
    var formaDePagamento;

    for (var i = 0; i < formaPagamentoCheckboxes.length; i++) {
    if (formaPagamentoCheckboxes[i].checked) {
        if (formaPagamentoCheckboxes[i].value === "boleto") {
        //codigo
        formaDePagamento = formaPagamentoCheckboxes[i].value;
        } else if (formaPagamentoCheckboxes[i].value === "contaCorrente") {
        //codigo
        formaDePagamento = formaPagamentoCheckboxes[i].value;
        }
    }
    }

    if (!nomeSocio || !cpfSocio || !rg || !dtNascimento || !cep || !logradouro || !numero || !bairro || !cidade || !estado || !nomeMae || !email || !telefone || !whatsapp || !plano || !vencimento || !vendedor) {
        document.getElementById("loadingIcon").classList.add("d-none");
        document.getElementById("rvcnpj").innerHTML = "<div class='alert alert-primary' role='alert'>Preencha todos os campos</div>";
        return; // Impedir o envio do formulário
    }
    if (!validateEmail(email)) {
        document.getElementById("loadingIcon").classList.add("d-none");
        document.getElementById("rvcnpj").innerHTML = "<div class='alert alert-warning' role='alert'>Verifique o e-mail digitado</div>";
        return; // Impedir o envio do formulário
    }

    var modalidade = "CPF";

    var cpfForm = {
        cpfSocio: cpfSocio,
        nomeSocio: nomeSocio,
        rg: rg,
        dtNascimento: dtNascimento,
        nomeMae: nomeMae,
        cep: cep,
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        cidade: cidade,
        estado: estado,
        bairro: bairro,
        pontoReferencia: pontoReferencia,
        email: email,
        telefone: telefone,
        whatsapp: whatsapp,
        plano: plano,
        vencimento: vencimento,
        vendedor: vendedor,
        banco: banco,
        agencia: agencia,
        conta: conta,
        modalidade: modalidade,
        viabilidade: viabilidade,
        formaDePagamento: formaDePagamento,
        dataEnvio: new Date().toLocaleString()
    };
    
    google.script.run
    .withSuccessHandler(function() {
        envio = true;
        document.getElementById("sucesso").style.display = "block";
        document.getElementById("loadingIcon").classList.add("d-none");
    })
    .withFailureHandler(function() {
        envio = false;
        document.getElementById("senderro").style.display = "block";
        document.getElementById("loadingIcon").classList.add("d-none");
    })
    .doPost(cpfForm);
    
    clearFormFieldsCPF();
    document.getElementById("loadingIcon").classList.add("d-none");
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateCNPJ(cnpj) {
    cnpj = cnpj.toString().replace(/[^\d]+/g,'');

    if(cnpj == '') return false;
    
    if (cnpj.length != 14)
        return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
        
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
        
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        return false;
            
    return true;
}
function validarCPF(cpf) 
{
    cpf = cpf.toString().replace(/[^\d]+/g,'');

    var digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10));
    var soma1 = 0,
        soma2 = 0;
    var vlr = 11;

    for (i = 0; i < 9; i++) {
        soma1 += eval(cpf.charAt(i) * (vlr - 1));
        soma2 += eval(cpf.charAt(i) * vlr);
        vlr--;
    }
    soma1 = (((soma1 * 10) % 11) == 10 ? 0 : ((soma1 * 10) % 11));
    soma2 = (((soma2 + (2 * soma1)) * 10) % 11);

    var digitoGerado = (soma1 * 10) + soma2;
    if (digitoGerado != digitoDigitado) {
    return false
    } else {
    return true
    }
}

function onblurCPF(){
    var cpfInput = document.getElementById('cpfSocio');
    var cpf = cpfInput.value.replace(/\D/g, '');
    
    if (validarCPF(cpf)) {
        document.getElementById("rvcnpj").innerHTML = "";
        document.getElementById("cpfSocio").style.border = "solid 1px green";
        try{
            const resultContainer = document.getElementById("div-cpf");
            
            function sucessBusca(dados){
                if(dados.exists){
                    resultContainer.innerHTML = `<div class="invalid-feedback"> CPF encontrado </div>`;
                }else{
                    resultContainer.innerHTML = `<div class="valid-feedback"> CPF não encontrado </div>`;
                }
            }

            function falhaBusca(){
                document.getElementById("rvcnpj").innerHTML = 
                `
                    <p>Erro na busca do telefone</p>
                `;
            }

            google.script.run
                .withSuccessHandler(sucessBusca)
                .withFailureHandler(falhaBusca)
                .searchCPF(cpf);
        }catch (error){
            console.log("erro na busca do CPF: "+ cpf);
        }

    }else{
        document.getElementById("rvcnpj").innerHTML = "<div class='alert alert-warning' role='alert'>Verifique o CPF digitado</div>";
        document.getElementById("cpfSocio").style.border = "solid 1px red";
    }
}

function insereDados(cnpjData) {
    document.getElementById('razaoSocial').value = cnpjData.razao_social || '';
    document.getElementById('tipoEmpresa').value = cnpjData.natureza_juridica || '';
    document.getElementById('cep').value = cnpjData.cep || '';
    document.getElementById('logradouro').value = cnpjData.logradouro || '';
    document.getElementById('numero').value = cnpjData.numero || '';
    document.getElementById('complemento').value = cnpjData.complemento || '';
    document.getElementById('cidade').value = cnpjData.municipio || '';
    document.getElementById('UF').value = cnpjData.uf || '';
    document.getElementById('bairro').value = cnpjData.bairro || '';
    document.getElementById('dataFundacao').value = cnpjData.data_inicio_atividade || '';
    if(cnpjData.qsa != "")
    {
        document.getElementById('nomeSocio').value = cnpjData.qsa[0].nome_socio || '';
    }
}

function cnpjOnblur() {
    var cnpjInput = document.getElementById('cnpj');
    var cnpj = cnpjInput.value.replace(/\D/g, '');
    
    document.getElementById("dataForm").classList.add("was-validated");

    document.getElementById('razaoSocial').value = '';
    document.getElementById('tipoEmpresa').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('logradouro').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('UF').value = '';
    document.getElementById('viabilidade').value = '';
    document.getElementById('dataFundacao').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('pontoReferencia').value = '';
    document.getElementById('cpfSocio').value = '';
    document.getElementById('nomeSocio').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('whatsapp').value = '';
    document.getElementById('plano').value = '';
    document.getElementById('vencimento').value = '';
    document.getElementById('vendedor').value = '';
    document.getElementById('banco').value = '';
    document.getElementById('agencia').value = '';

    if (validateCNPJ(cnpj)) {
        var url = "https://brasilapi.com.br/api/cnpj/v1/"+cnpj;
        try{
            fetch(url)
            .then(response => response.json())
            .then(data => {
            insereDados(data);
            // Aplicar a máscara de CEP antes de preencher o campo
            if (data.cep) {
                document.getElementById('cep').value = zipCodeMask(data.cep);
            }
            document.getElementById("rvcnpj").innerHTML = "";
            document.getElementById("cnpj").style.border = "solid 1px green";
            })
            .catch(error => {
                console.error('Erro ao obter dados do CNPJ:', error);
            });
        }catch (error){
            console.error('CNPJ não encontrado:', error);
        }
    } else {
        document.getElementById("rvcnpj").innerHTML = "<div class='alert alert-warning' role='alert'>Verifique o CNPJ digitado</div>";
        document.getElementById("cnpj").style.border = "solid 1px red";
    }
}

const validateCEP = (cep) => {
    cep = cep.replace(/[^0-9]/gi, "");
    if (cep.length == 8) {
        return cep;
    }
    throw `CEP "${cep}" formato invalido`
}

function cepOnblur(a) {
    //var cepInput = document.getElementById('cep');
    //var cep = cepInput.value.replace(/\D/g, '');

    var cepValue = a.value.replace(/[^0-9]/gi, "");

    document.getElementById('logradouro').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('UF').value = '';
    document.getElementById('viabilidade').value = '';
    document.getElementById('pontoReferencia').value = '';
    document.getElementById('bairro').value = '';

    if(validateCEP(cepValue)) {
        var url = "https://brasilapi.com.br/api/cep/v1/"+cepValue;
        try{
            fetch(url)
            .then(response => response.json())
            .then(endereco => {
            corrigeEnd(endereco);
            document.getElementById("cep").style.border = "solid 1px green";
            })
            .catch(error => {
            console.error('Erro ao obter dados do CEP:', error);
            });
        }catch (error){
            console.error('CEP não encontrado:', error);
        }
    }else {
        document.getElementById("rvcnpj").innerHTML = "<div class='alert alert-warning' role='alert'>Verifique o CEP digitado</div>";
        document.getElementById("cep").style.border = "solid 1px red";
    }
}

function corrigeEnd(endereco) {
    document.getElementById('logradouro').value = endereco.street || '';
    document.getElementById('cidade').value = endereco.city || '';
    document.getElementById('UF').value = endereco.state || '';
    document.getElementById('bairro').value = endereco.neighborhood || '';
}

function clearFormFields() {
    document.getElementById('cnpj').value = '';
    document.getElementById('razaoSocial').value = '';
    document.getElementById('tipoEmpresa').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('logradouro').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('UF').value = '';
    document.getElementById('viabilidade').value = '';
    document.getElementById('dataFundacao').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('pontoReferencia').value = '';
    document.getElementById('cpfSocio').value = '';
    document.getElementById('nomeSocio').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('whatsapp').value = '';
    document.getElementById('plano').value = '';
    document.getElementById('vencimento').value = '';
    document.getElementById('vendedor').value = '';
    document.getElementById('banco').value = '';
    document.getElementById('agencia').value = '';
    document.getElementById('contaCorrente').value = '';
}
//clearFormFieldsCPF
function clearFormFieldsCPF() {
    document.getElementById('cpfSocio').value = '';
    document.getElementById('nomeSocio').value = '';
    document.getElementById('rg').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('logradouro').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('UF').value = '';
    document.getElementById('viabilidade').value = '';
    document.getElementById('dtNascimento').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('pontoReferencia').value = '';
    document.getElementById('nomeMae').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('whatsapp').value = '';
    document.getElementById('plano').value = '';
    document.getElementById('vencimento').value = '';
    document.getElementById('vendedor').value = '';
    document.getElementById('banco').value = '';
    document.getElementById('agencia').value = '';
    document.getElementById('contaCorrente').value = '';
}

function formatCnpj(input) {
    var value = input.value.replace(/\D/g, '');

    if (value.length > 14) {
    value = value.slice(0, 14);
    }

    if (value.length > 12) {
    value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    } else if (value.length > 8) {
    value = value.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3');
    } else if (value.length > 5) {
    value = value.replace(/(\d{2})(\d{3})/, '$1.$2');
    }

    input.value = value;
}

function formatCPF(cpf) {
    // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Aplica a máscara ao CPF (formato: xxx.xxx.xxx-xx)
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    return cpf;
}
function formatCPFInput(input) {
    input.value = formatCPF(input.value);
}

const handleZipCode = (event) => {
    let input = event.target
    input.value = zipCodeMask(input.value)
}

const zipCodeMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{5})(\d)/,'$1-$2')
    return value
}
function uncheckOthers(checkbox) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(function(cb) {
    if (cb !== checkbox) {
        cb.checked = false;
    }
    });
}
function validateEmailOnBlur(input) 
{
    var email = input.value;

    if (!validateEmail(email)) {
    input.classList.add("is-invalid");
    } else {
    input.classList.remove("is-invalid");
    }
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneOnBlur(input) {
    var phoneNumber = input.value;
    if (!validatePhoneNumber(phoneNumber)) {
    input.classList.add("is-invalid");
    } else {
    input.classList.remove("is-invalid");
    }
}

function validatePhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/\D/g, '');
    // Use uma expressão regular para validar números de telefone com 10 ou 11 dígitos
    var phoneRegex = /^[0-9]{10,11}$/; // Aceita números de 10 ou 11 dígitos
    var formattedPhoneRegex1 = /^(\d{2})(\d{4})(\d{4})$/; // Formato: (XX) XXXX-XXXX
    var formattedPhoneRegex2 = /^(\d{2})(\d{5})(\d{4})$/; // Formato: (XX) XXXXX-XXXX
    
    return (
    phoneRegex.test(phoneNumber) ||
    formattedPhoneRegex1.test(phoneNumber) ||
    formattedPhoneRegex2.test(phoneNumber)
    );
}
function applyPhoneMask(input) {
    var value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    var formattedValue = formatPhone(value); // Formata o valor com a máscara
    
    input.value = formattedValue; // Aplica o valor formatado de volta ao campo
}

function formatPhone(value) {
    if (value.length <= 10) {
    return value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
    return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
}
// Verifica se o documento foi carregado antes de adicionar os ouvintes de evento
document.addEventListener('DOMContentLoaded', function() {
    var telefoneInput = document.getElementById('telefone');
    var whatsappInput = document.getElementById('whatsapp');

    if (telefoneInput && whatsappInput) {
    telefoneInput.addEventListener('blur', function() {
        applyPhoneMask(this);
    });

    whatsappInput.addEventListener('blur', function() {
        applyPhoneMask(this);
    });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var UFInput = document.getElementById('UF'); // Supondo que você tenha um campo de input para selecionar o estado

    var confirmActionBtn = document.getElementById('confirmAction');
    var confirmModal = document.getElementById('confirmModal');

    if (UFInput && confirmActionBtn && confirmModal) {
    UFInput.addEventListener('change', function() {
        var selectedUF = UFInput.value;

        if (selectedUF !== 'RJ' && selectedUF !== 'MG' && selectedUF !== 'ES' && selectedUF !== 'SP') {
        confirmModal.classList.add('show');
        confirmModal.style.display = 'block';
        document.body.classList.add('modal-open');
        }
    });

    confirmActionBtn.addEventListener('click', function() {
        // Ação que será executada após a confirmação (caso necessário)
        confirmModal.classList.remove('show');
        confirmModal.style.display = 'none';
        document.body.classList.remove('modal-open');
    });
    }
});
function handleFormaPagamentoChange() {
    var formaPagamentoCheckboxes = document.getElementsByName("formaDePagamento");
    var daccDiv = document.getElementById("dacc");
    var daccInputs = daccDiv.querySelectorAll("input");
    
    for (var i = 0; i < formaPagamentoCheckboxes.length; i++) {
    if (formaPagamentoCheckboxes[i].checked) {
        if (formaPagamentoCheckboxes[i].value === "boleto") {
        daccDiv.style.display = "none";
        for (var j = 0; j < daccInputs.length; j++) {
            daccInputs[j].removeAttribute("required");
        }
        } else if (formaPagamentoCheckboxes[i].value === "contaCorrente") {
        daccDiv.style.display = "block";
        for (var j = 0; j < daccInputs.length; j++) {
            daccInputs[j].setAttribute("required", "");
        }
        }
    }
    }
}
var combate1 = [
    "CACHOEIRO DE ITAPEMIRIM",
    "CARIACICA",
    "SERRA",
    "VITORIA",
    "VIANA",
    "VILA VELHA",
    "CARAPINA",
    "ITAQUARI",
    "ARAGUARI",
    "DIVINOPOLIS",
    "GOVERNADOR VALADARES",
    "ITABIRA",
    "JOAO MONLEVADE",
    "JUIZ DE FORA",
    "LEOPOLDINA",
    "MONTES CLAROS",
    "PATROCINIO",
    "POCOS DE CALDAS",
    "POUSO ALEGRE",
    "SETE LAGOAS",
    "UBA",
    "VARGINHA",
    "PARACATU",
    "SANTA RITA DO SAPUCAI",
    "IPATINGA",
    "CORONEL FABRICIANO",
    "MURIAE",
    "LAVRAS",
    "TIMOTEO",
    "CASIMIRO DE ABREU",
    "TERESOPOLIS",
    "ARMACAO DOS BUZIOS",
    "BARRA MANSA",
    "MANGARATIBA",
    "NITEROI",
    "PETROPOLIS",
    "RESENDE",
    "SAQUAREMA",
    "MARINA PORTO BUZIOS",
    "PORTO BELO",
    "CORREIAS",
    "ITAIPAVA",
    "JARDIM ARARAS",
    "PEDRO DO RIO",
    "PEDRO DE ALCANTARA",
    "CAMPOS DOS GOYTACAZES",
    "GUARULHOS",
    "SAO PAULO",
    "CAMPINAS",
    "SOROCABA",
    "JUNDIAI",
    "SAO JOSE DOS CAMPOS",
    "MOGI DAS CRUZES",
    "VOTORANTIM",
    "HORTOLANDIA"];
var combate2 = [
    "NOVA VENECIA",
    "SAO GABRIEL DA PALHA",
    "ITAGUAI",
    "SAO GONCALO",
    "ITABORAI",
    "MARAMBAIA"];
var combate3 = [
    "CAXAMBU",
    "SAO LOURENCO",
    "CATAGUASES",
    "ARARUAMA",
    "BARRA DO PIRAI",
    "CABO FRIO",
    "MARICA",
    "NOVA FRIBURGO",
    "PARACAMBI",
    "SAO PEDRO DA ALDEIA",
    "VALENCA",
    "VOLTA REDONDA",
    "PINHEIRAL",
    "CAMINHO DE BUZIOS",
    "UNAMAR",
    "ITAIPUACU",
    "PIRAI"];
var regular = [
    "BELO HORIZONTE",
    "BETIM",
    "CONTAGEM",
    "NOVA LIMA",
    "RIBEIRAO DAS NEVES",
    "SANTA LUZIA",
    "VESPASIANO",
    "VENDA NOVA",
    "CONSELHEIRO LAFAIETE",
    "SERRA DEL REI",
    "JUSTINOPOLIS",
    "ESMERALDAS",
    "SABARA",
    "IBIRITE",
    "BELFORD ROXO",
    "DUQUE DE CAXIAS",
    "NILOPOLIS",
    "NOVA IGUACU",
    "QUEIMADOS",
    "SAO JOAO DE MERITI",
    "MESQUITA",
    "VILAR DOS TELES",
    "ANGRA DOS REIS",
    "RIO DE JANEIRO",
    "JACUECANGA",
    "MAMBUCABA"];

function valorVenda(){
    let valor = 0;
    var cidade = document.getElementById('cidade').value;
    var plano = document.getElementById('plano').value;
    var formaPagamentoCheckboxes = document.getElementsByName("formaDePagamento");

    for (var i = 0; i < formaPagamentoCheckboxes.length; i++) {
        if (formaPagamentoCheckboxes[i].checked) 
        {
            if (formaPagamentoCheckboxes[i].value === "boleto") 
            {
            formaDePagamento = formaPagamentoCheckboxes[i].value;
            } else if (formaPagamentoCheckboxes[i].value === "contaCorrente") 
            {
            formaDePagamento = formaPagamentoCheckboxes[i].value;
            }
        }
    }

    if(combate1.includes(cidade) || combate2.includes(cidade) || combate3.includes(cidade)){
        switch(plano){
            case "200 MB":
                valor = 99.9;
                if(formaDePagamento == "boleto")
                {
                    valor += 20;
                }
                document.getElementById('valor').value = valor;
            break;
            
            case "400 MB":
                valor = 99.9;
                if(formaDePagamento == "boleto")
                {
                    valor += 20;
                }
                document.getElementById('valor').value = valor;
            break;

            case "500 MB":
                valor = 109.9;
                if(formaDePagamento == "boleto")
                {
                    valor += 20;
                }
                document.getElementById('valor').value = valor;                       
            break;

            case "600 MB":
                valor = 120;
                document.getElementById('valor').value = valor; 
            break;

            case "700 MB":
                valor = 130;
                document.getElementById('valor').value = valor; 
            break;

            case "1 GB":
                valor = 199.9;
                if(formaDePagamento == "boleto")
                {
                    valor += 20;
                }
                document.getElementById('valor').value = valor;  
            break;
        }
    }else if(regular.includes(cidade)){
        switch(plano){
            case "200 MB":
                valor = 109.9;
                if(formaDePagamento == "boleto")
                {
                    valor += 10;
                }
                document.getElementById('valor').value = valor;
            break;
            
            case "400 MB":
                valor = 99.9;
                if(formaDePagamento == "boleto")
                {
                    valor += 10;
                }
                document.getElementById('valor').value = valor;
            break;

            case "500 MB":
                valor = 119.9;
                if(formaDePagamento == "boleto")
                {
                    valor += 10;
                }
                document.getElementById('valor').value = valor;                       
            break;

            case "600 MB":
                valor = 120;
                document.getElementById('valor').value = valor; 
            break;

            case "700 MB":
                valor = 130;
                document.getElementById('valor').value = valor; 
            break;

            case "1 GB":
                valor = 199.9;
                if(formaDePagamento == "boleto")
                {
                    valor += 10;
                }
                document.getElementById('valor').value = valor;  
            break;
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const inputWhatsapp = document.getElementById("whatsapp");
    const whatsapp = document.getElementById("whatsapp");
    const resultContainer = document.getElementById("whats");
    
    inputWhatsapp.addEventListener("blur", () => {

        const whatsappOK = whatsapp.value.replace(/\D/g, '');
        
        function onSuccess(dados){
            if(dados.exists){
                resultContainer.innerHTML = `<div class="invalid-feedback"> telefone encontrado </div>`;
            }else{
                resultContainer.innerHTML = `<div class="valid-feedback"> telefone não encontrado </div>`;
            }
        }

        function onFailure(){
            document.getElementById("rvcnpj").innerHTML = 
            `
                <p>Erro na busca do telefone</p>
            `;
        }

        google.script.run
            .withSuccessHandler(onSuccess)
            .withFailureHandler(onFailure)
            .searchPhone(whatsappOK);
    });
});