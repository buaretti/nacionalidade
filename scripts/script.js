var botao = document.getElementById("botao");
botao.addEventListener("click", clicou);
function clicou() {
    var bandeiras = document.getElementById("bandeiras");
    var res = document.getElementById("res");
    var exp = document.getElementById("exp");
    var nome = document.getElementById("nome").value;
    var generoMasculino = document.getElementById("masculino").checked;
    var generoFeminino = document.getElementById("feminino").checked;
    var paisorigem = document.getElementById("paisorigem").value;
    var nameerro = document.getElementById("name-erro");
    var paiserro = document.getElementById("pais-erro");
    var nomeContemNumeros = !/^[a-zA-Z\s]*$/.test(nome);
    var paisOrigemContemNumeros = !/^[a-zA-Z\s]*$/.test(paisorigem);

    if (nome == "" && paisorigem == "") {
        nameerro.style.display = "block";
        paiserro.style.display = "block";

        setTimeout(function () {
            nameerro.style.display = "none";
            paiserro.style.display = "none";
        }, 3000);
        return;
    }

    if (nome == "") {
        nameerro.style.display = "block";

        setTimeout(function () {
            nameerro.style.display = "none";
        }, 3000);
        return;
    }

    if (paisorigem == "") {
        paiserro.style.display = "block";

        setTimeout(function () {
            paiserro.style.display = "none";
        }, 3000);
        return;
    }

    if (nomeContemNumeros && paisOrigemContemNumeros) {
        nameerro.textContent = "Insira um nome válido.";
        nameerro.style.display = "block";
        paiserro.textContent = "Insira um país válido.";
        paiserro.style.display = "block";
        setTimeout(function () {
            nameerro.style.display = "none";
            paiserro.style.display = "none";
        }, 3000);
        return;
    }

    // Verifique individualmente e exiba mensagens de erro apropriadas
    if (nomeContemNumeros) {
        nameerro.textContent = "Insira um nome válido.";
        nameerro.style.display = "block";
        setTimeout(function () {
            nameerro.style.display = "none";
        }, 3000);
        return;
    }

    if (paisOrigemContemNumeros) {
        paiserro.textContent = "Insira um país válido.";
        paiserro.style.display = "block";
        setTimeout(function () {
            paiserro.style.display = "none";
        }, 3000);
        return;
    }

    if (paisorigem.length < 2) {
        paiserro.textContent = "O país deve ter pelo menos 2 caracteres.";
        paiserro.style.display = "block";

        setTimeout(function () {
            paiserro.style.display = "none";
        }, 3000);
        return;
    }

    if (nome.length < 3 || nome.length > 20) {
        nameerro.textContent = "O nome deve ter entre 3 e 20 caracteres.";
        nameerro.style.display = "block";

        setTimeout(function () {
            nameerro.style.display = "none";
        }, 3000);
        return;
    }

    var paisValidos = [
        "EUA",
        "USA",
        "Estados Unidos",
        "Brasil",
        "BR",
        "Brazil",
        "Espanha",
        "Spain",
        "ES",
        "Inglaterra",
        "England",
        "GB",
        "França",
        "FR",
        "France",
        "Itália",
        "Italy",
        "IT",
        "Portugal",
        "PT",
        "Índia",
        "India",
        "IN",
        "China",
        "CN",
        "Rússia",
        "Russia",
        "RU",
        "Canadá",
        "Canada",
        "CA",
        "DE",
        "Alemanha",
        "Germany",
        "Japão",
        "Japan",
        "JP",
        "Austrália",
        "Australia",
        "AU",
        "México",
        "MX",
        "Egito",
        "Egypt",
        "EG",
        "Argentina",
        "AR",
        "África do Sul",
        "South Africa",
        "ZA",
        "Suécia",
        "Sweden",
        "SE",
        "Grécia",
        "Greece",
        "GR",
        "Turquia",
        "Turkey",
        "TR",
        "Noruega",
        "NO",
        "Dinamarca",
        "DK",
        "Holanda",
        "NL",
        "Nova Zelândia",
        "NZ",
        "Singapura",
        "SG",
        "Suíça",
        "CH",
        "Bélgica",
        "BE",
        "Áustria",
        "AT",
        "Irlanda",
        "IE",
        "Chile",
        "CL",
        "Coreia do Sul",
        "KR",
        "Malásia",
        "MY",
        "Tailândia",
        "TH",
        "Finlândia",
        "FI",
        "Polônia",
        "PL",

        // Adicione países permitidos aqui
    ];

    if (!paisValidos.includes(paisorigem)) {
        paiserro.textContent = "Insira um país válido.";
        paiserro.style.display = "block";

        setTimeout(function () {
            paiserro.style.display = "none";
        }, 3000);
        return;
    }


    bandeiras.style.display = "none";

    if (
        paisorigem == "EUA" ||
        paisorigem == "USA" ||
        paisorigem == "Estados Unidos"
    ) {
        res.innerHTML = nome + ", Você é Estadunidense! 🇺🇸";
        exp.innerHTML =
            "Os Estados Unidos da América, frequentemente chamados de EUA, são uma nação diversificada e influente localizada na América do Norte. Com uma população de mais de 330 milhões de pessoas, os EUA são conhecidos por sua cultura rica e variada, composta por uma mistura de tradições de todo o mundo.";
    }

    if (
        paisorigem == "Irlanda" ||
        paisorigem == "IE"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Irlandês! ☘️";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Irlandesa! ☘️";
        }
        exp.innerHTML =
            "A Irlanda é conhecida por sua cultura celta, paisagens verdes e pubs animados. Ela é famosa por suas tradições musicais e festivais, como o Dia de São Patrício.";
    }

    if (
        paisorigem == "Chile" ||
        paisorigem == "CL"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Chileno! 🇨🇱";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Chilena! 🇨🇱";
        }
        exp.innerHTML =
            "O Chile é um país sul-americano conhecido por sua geografia variada, que inclui desertos, florestas e montanhas. É famoso por sua produção de vinho e beleza natural única.";
    }

    if (
        paisorigem == "Coreia do Sul" ||
        paisorigem == "KR"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Sul-Coreano! 🇰🇷";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Sul-Coreana! 🇰🇷";
        }
        exp.innerHTML =
            "A Coreia do Sul é uma nação asiática conhecida por sua tecnologia avançada, cultura pop, como o K-pop, e culinária saborosa, incluindo kimchi e bulgogi.";
    }

    if (
        paisorigem == "Malásia" ||
        paisorigem == "MY"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Malaio! 🇲🇾";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Malaia! 🇲🇾";
        }
        exp.innerHTML =
            "A Malásia é um país do sudeste asiático conhecido por sua diversidade étnica, belas praias e florestas tropicais. Também é famosa por sua comida de rua, como o nasi lemak e o satay.";
    }

    if (
        paisorigem == "Tailândia" ||
        paisorigem == "TH"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Tailandês! 🇹🇭";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Tailandesa! 🇹🇭";
        }
        exp.innerHTML =
            "A Tailândia é uma nação no sudeste asiático conhecida por suas praias tropicais, templos budistas e cozinha picante. É um destino popular para turistas de todo o mundo.";
    }

    if (
        paisorigem == "Finlândia" ||
        paisorigem == "FI"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Finlandês! 🇫🇮";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Finlandesa! 🇫🇮";
        }
        exp.innerHTML =
            "A Finlândia é um país nórdico conhecido por sua educação de alta qualidade, design inovador e belas paisagens naturais, incluindo lagos e florestas.";
    }

    if (
        paisorigem == "Polônia" ||
        paisorigem == "PL"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Polonês! 🇵🇱";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Polonesa! 🇵🇱";
        }
        exp.innerHTML =
            "A Polônia é um país da Europa Central conhecido por sua rica história, arquitetura medieval e contribuições culturais, como Chopin e Marie Curie.";
    }

    if (
        paisorigem == "Suíça" ||
        paisorigem == "CH"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Suíço! 🇨🇭";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Suíça! 🇨🇭";
        }
        exp.innerHTML =
            "A Suíça é um país europeu conhecido por sua beleza natural deslumbrante, incluindo os Alpes suíços. É famosa por sua precisão e qualidade, especialmente em relojoaria e chocolates.";
    }

    if (
        paisorigem == "Bélgica" ||
        paisorigem == "BE"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Belga! 🇧🇪";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Belga! 🇧🇪";
        }
        exp.innerHTML =
            "A Bélgica é um país europeu conhecido por sua culinária deliciosa, incluindo chocolates e waffles belgas. Também é famosa por suas cervejas e história rica.";
    }

    if (
        paisorigem == "Áustria" ||
        paisorigem == "AT"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Austríaco! 🇦🇹";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Austríaca! 🇦🇹";
        }
        exp.innerHTML =
            "A Áustria é um país europeu conhecido por sua música clássica, especialmente compositores como Mozart e Beethoven. Também é famosa por suas paisagens alpinas.";
    }


    if (
        paisorigem == "Noruega" ||
        paisorigem == "NO"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Norueguês! 🇳🇴";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Norueguesa! 🇳🇴";
        }
        exp.innerHTML =
            "A Noruega é um país escandinavo na Europa, conhecido por suas paisagens deslumbrantes, fiordes majestosos e alta qualidade de vida. É também famoso por ser um dos países mais felizes do mundo.";
    }

    if (
        paisorigem == "Dinamarca" ||
        paisorigem == "DK"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Dinamarquês! 🇩🇰";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Dinamarquesa! 🇩🇰";
        }
        exp.innerHTML =
            "A Dinamarca é um país nórdico na Europa, conhecido por seu design moderno, estilo de vida descontraído e rica herança cultural. É o lar de muitos contos de fadas e histórias famosas, incluindo as obras de Hans Christian Andersen.";
    }

    if (
        paisorigem == "Holanda" ||
        paisorigem == "NL"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Holandês! 🇳🇱";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Holandesa! 🇳🇱";
        }
        exp.innerHTML =
            "A Holanda, também conhecida como Países Baixos, é um país europeu famoso por seus moinhos de vento, canais pitorescos e flores, especialmente tulipas. É uma nação com uma rica história e cultura.";
    }

    if (
        paisorigem == "Nova Zelândia" ||
        paisorigem == "NZ"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Neozelandês! 🇳🇿";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Neozelandesa! 🇳🇿";
        }
        exp.innerHTML =
            "A Nova Zelândia é um país insular no sudoeste do Oceano Pacífico, conhecido por sua beleza natural deslumbrante, incluindo montanhas, praias e fiordes. É também um lugar popular para esportes radicais, como o bungee jumping.";
    }

    if (
        paisorigem == "Singapura" ||
        paisorigem == "SG"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Cingapuriano! 🇸🇬";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Cingapuriana! 🇸🇬";
        }
        exp.innerHTML =
            "Singapura é uma cidade-estado no sudeste da Ásia, conhecida por sua modernidade, limpeza e diversidade cultural. É um centro financeiro e tecnológico e oferece uma rica mistura de culturas e culinárias.";
    }

    if (
        paisorigem == "África do Sul" ||
        paisorigem == "South Africa" ||
        paisorigem == "ZA"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Sul-Africano! 🇿🇦";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Sul-Africana! 🇿🇦";
        }
        exp.innerHTML =
            "A África do Sul é um país diversificado localizado no extremo sul da África. É conhecido por sua paisagem variada, que inclui savanas, montanhas, praias e desertos. A nação também possui uma rica diversidade cultural, com influências africanas, europeias e asiáticas.";
    }

    if (
        paisorigem == "Suécia" ||
        paisorigem == "Sweden" ||
        paisorigem == "SE"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Sueco! 🇸🇪";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Sueca! 🇸🇪";
        }
        exp.innerHTML =
            "A Suécia é uma nação escandinava no norte da Europa, conhecida por sua qualidade de vida elevada, paisagens naturais deslumbrantes e design inovador. É um país moderno com uma rica herança histórica e cultural.";
    }

    if (
        paisorigem == "Grécia" ||
        paisorigem == "Greece" ||
        paisorigem == "GR"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Grego! 🇬🇷";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Grega! 🇬🇷";
        }
        exp.innerHTML =
            "A Grécia é um país no sudeste da Europa, conhecido por sua rica herança histórica que inclui a civilização antiga e os famosos deuses do Olimpo. Além disso, a Grécia oferece belas ilhas, praias e uma culinária mediterrânea saborosa.";
    }

    if (
        paisorigem == "Turquia" ||
        paisorigem == "Turkey" ||
        paisorigem == "TR"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Turco! 🇹🇷";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Turca! 🇹🇷";
        }
        exp.innerHTML =
            "A Turquia é um país transcontinental, situado entre a Europa e a Ásia. Ela é conhecida por sua rica história, incluindo o Império Otomano, e possui uma paisagem diversificada que inclui montanhas, praias e desertos. A culinária turca também é famosa em todo o mundo.";
    }

    if (
        paisorigem == "Austrália" ||
        paisorigem == "Australia" ||
        paisorigem == "AU"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Australiano! 🇦🇺";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Australiana! 🇦🇺";
        }
        exp.innerHTML =
            "A Austrália é um país incrivelmente diversificado e vasto, conhecido por sua natureza deslumbrante, praias deslumbrantes e vida selvagem única. É o lar da Grande Barreira de Coral, dos cangurus e do surf de classe mundial. A Austrália também tem uma cultura indígena rica e uma população acolhedora.";
    }

    if (
        paisorigem == "México" ||
        paisorigem == "MX"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Mexicano! 🇲🇽";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Mexicana! 🇲🇽";
        }
        exp.innerHTML =
            "O México é um país vibrante na América do Norte, famoso por sua comida deliciosa, cultura colorida e ruínas antigas, como as de Chichen Itzá. É o berço do mariachi e do tequila, e possui uma mistura fascinante de tradições indígenas e influências espanholas.";
    }

    if (
        paisorigem == "Egito" ||
        paisorigem == "Egypt" ||
        paisorigem == "EG"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Egípcio! 🇪🇬";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Egípcia! 🇪🇬";
        }
        exp.innerHTML =
            "O Egito é um país do nordeste da África conhecido por sua antiga civilização, com monumentos icônicos como as pirâmides de Gizé e a Esfinge. Além de sua rica herança histórica, o Egito também tem uma costa deslumbrante ao longo do Mar Vermelho e uma cultura diversificada.";
    }

    if (
        paisorigem == "Argentina" ||
        paisorigem == "AR"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Argentino! 🇦🇷";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Argentina! 🇦🇷";
        }
        exp.innerHTML =
            "A Argentina é uma nação sul-americana conhecida por sua paixão pelo futebol, tango e carnes deliciosas. Possui paisagens impressionantes, como a Patagônia e as Cataratas do Iguaçu, e é um destino popular para amantes da natureza e da cultura.";
    }

    if (
        paisorigem == "Alemanha" ||
        paisorigem == "Germany" ||
        paisorigem == "DE"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Alemão! 🇩🇪";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Alemã! 🇩🇪";
        }
        exp.innerHTML =
            "A Alemanha é uma nação europeia conhecida por sua eficiência, tecnologia de ponta e rica herança cultural. É famosa por suas cervejas, salsichas e por ser o berço da Bauhaus, um movimento artístico influente. A Alemanha desempenhou um papel importante na história da filosofia, literatura, música, ciência e indústria automobilística.";
    }

    if (
        paisorigem == "Japão" ||
        paisorigem == "Japan" ||
        paisorigem == "JP"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Japonês! 🇯🇵";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Japonesa! 🇯🇵";
        }
        exp.innerHTML =
            "O Japão é uma ilha nação no leste da Ásia conhecida por sua cultura única, tecnologia avançada e paisagens deslumbrantes. É o lar do sushi, do sumô e de belos templos históricos. O Japão também é famoso por suas contribuições para a indústria de videogames e pela gentileza de seu povo.";
    }

    if (
        paisorigem == "Brasil" ||
        paisorigem == "BR" ||
        paisorigem == "Brazil"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Brasileiro! 🇧🇷";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Brasileira! 🇧🇷";
        }
        exp.innerHTML =
            "O Brasil é o maior país da América do Sul e um dos países mais diversos e culturalmente ricos do mundo. Com uma geografia que abrange florestas tropicais, praias deslumbrantes, planícies vastas e altas montanhas, o Brasil é conhecido por sua beleza natural impressionante.";
    }

    if (
        paisorigem == "Espanha" ||
        paisorigem == "Spain" ||
        paisorigem == "ES"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Espanhol! 🇪🇸";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Espanhola! 🇪🇸";
        }
        exp.innerHTML =
            "A Espanha é um país localizado no sudoeste da Europa, conhecido por sua rica história, cultura vibrante e paisagens diversas. A Espanha é o lar de uma variedade de regiões geográficas, desde as praias ensolaradas da Costa del Sol até as majestosas montanhas dos Pirenéus.";
    }

    if (
        paisorigem == "Inglaterra" ||
        paisorigem == "England" ||
        paisorigem == "GB"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Britânico! 🇬🇧";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Britânica! 🇬🇧";
        }
        exp.innerHTML =
            "A Inglaterra é uma nação historicamente rica e culturalmente diversa que faz parte do Reino Unido, composto por quatro nações, incluindo Escócia, País de Gales e Irlanda do Norte. Localizada na ilha da Grã-Bretanha, a Inglaterra tem uma identidade distinta e uma história fascinante.";
    }

    if (
        paisorigem == "França" ||
        paisorigem == "FR" ||
        paisorigem == "France"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Francês! 🇫🇷";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Francesa! 🇫🇷";
        }
        exp.innerHTML =
            'A França, localizada no coração da Europa Ocidental, é uma nação que se destaca por sua rica cultura, história e contribuições significativas para as artes, culinária e moda. É conhecida como "a terra da liberdade, igualdade e fraternidade" e é famosa por sua revolução que inspirou valores democráticos em todo o mundo.';
    }

    if (
        paisorigem == "Itália" ||
        paisorigem == "Italy" ||
        paisorigem == "IT"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é italiano! 🇮🇹";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é italiana! 🇮🇹";
        }
        exp.innerHTML =
            "A Itália é uma nação icônica localizada na região sul da Europa, conhecida por sua rica história, cultura vibrante, culinária deliciosa e contribuições significativas para a arte e a ciência. Com uma herança que remonta ao Império Romano, a Itália desempenhou um papel fundamental na formação da civilização ocidental.";
    }

    if (paisorigem == "Portugal" || paisorigem == "PT") {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Português! 🇵🇹";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Portuguesa! 🇵🇹";
        }
        exp.innerHTML =
            "Portugal, situado na Península Ibérica, é uma nação encantadora e historicamente rica, conhecida por suas belas paisagens, cultura cativante e influências globais que datam dos tempos dos grandes exploradores.";
    }

    if (
        paisorigem == "Índia" ||
        paisorigem == "India" ||
        paisorigem == "IN"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Indiano! 🇮🇳";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Indiana! 🇮🇳";
        }
        exp.innerHTML =
            "A Índia, localizada no sul da Ásia, é uma nação diversificada e fascinante, conhecida por sua vasta história, cultura rica e uma população extraordinariamente grande e diversificada.";
    }

    if (paisorigem == "China" || paisorigem == "CN") {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Chinês! 🇨🇳";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Chinesa! 🇨🇳";
        }
        exp.innerHTML =
            "A China, localizada no leste da Ásia, é uma nação vasta e diversificada, conhecida por sua longa história, cultura rica e influência global crescente. Com uma população de mais de 1,4 bilhão de pessoas, é o país mais populoso do mundo.";
    }

    if (
        paisorigem == "Rússia" ||
        paisorigem == "Russia" ||
        paisorigem == "RU"
    ) {
        if (generoMasculino) {
            res.innerHTML = nome + ", Você é Russo! 🇷🇺";
        } else if (generoFeminino) {
            res.innerHTML = nome + ", Você é Russa! 🇷🇺";
        }
        exp.innerHTML =
            "A Rússia, o maior país do mundo em termos de extensão geográfica, é uma nação vasta e diversificada localizada no norte da Eurásia. É conhecida por sua história rica e complexa, cultura única e paisagens impressionantes.";
    }

    if (
        paisorigem == "Canadá" ||
        paisorigem == "Canada" ||
        paisorigem == "CA"
    ) {
        res.innerHTML = nome + ", Você é Canadense! 🇨🇦";
        exp.innerHTML =
            "O Canadá, localizado na América do Norte, é uma nação vasta e diversificada conhecida por sua paisagem deslumbrante, qualidade de vida elevada e diversidade cultural.";
    }
}