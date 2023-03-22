import Logo from '../acets/Ciclos-turma-08.png'
import LibertaLogo from '../acets/liberta-logo.png'
import SylicomValley from '../acets/sylicomValley.png'
import Ulrich from '../acets/ulrich.png'
import UlrichMacbook from '../acets/mockup-notebook-live-ulrich.png'
import { Player, Youtube, DefaultUi, DefaultControls } from '@vime/react';
import '@vime/core/themes/default.css';
import { XCircle, X, CheckCircle, Check, Gift } from 'phosphor-react';
import { Folder } from '../components/Folder'

export function Home() {
    return (
        <aside className="flex flex-col min-h-screen">
            <header className="flex flex-col gap-10 items-center py-16 h-max bg-blue-800 bg-[url('/src/acets/fed.png')] bg-blend-soft-light bg-no-repeat">
                <div className='flex lg:w-[45%] items-center flex-col gap-8 ms:w-11/12'>
                    <img
                        src={Logo}
                        className="w-[350px] h-[50px]"
                    />
                    <span className='flex flex-col lg:text-5xl lg:gap-2 text-center ms:text-2xl ms:gap-0'>
                        <strong>O Ciclo de Mercado</strong>
                        mais caótico das últimas décadas
                        está começando.
                    </span>
                    <span className='flex lg:w-2/4 lg:text-2xl leading-7 text-center ms:w-4/5 ms:text-base'>
                        Saiba se proteger dos riscos
                        e aproveitar as oportunidades!
                    </span>
                </div>
                <div className="flex justify-center w-full h-full">
                    <div className='lg:w-2/4 h-full aspect-video ms:w-11/12'>
                        <Player>
                            <Youtube videoId="suFogj0sLcw" />
                            <DefaultUi noControls>
                                <DefaultControls hideOnMouseLeave activeDuration={2000} />
                            </DefaultUi>
                        </Player>
                    </div>
                </div>
                <button className='flex lg:text-base font-bold py-5 lg:px-20 rounded transition ease-in-out delay-150 bg-blue-600 hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300 ms:text-xs ms:px-16'>
                    QUERO ME MATRICULAR
                </button>
            </header>
            <main className="flex flex-col">
                <div className='flex lg:flex-row ms:flex-col justify-center items-center gap-10 max-h-max py-16 bg-blue-800 animate-pulse'>
                    <span className='lg:text-5xl lg:w-1/4 ms:text-3xl ms:w-11/12'>
                        Como o <span className='font-bold'>Ciclos de Mercado</span> vai te ajudar?
                        <span className='flex w-20 h-[2px] mt-5 bg-blue-600'></span>
                    </span>
                    <span className='flex flex-col lg:w-2/6 gap-5 text-base ms:w-11/12'>
                        <span>
                            Juros altos nos EUA, volta da China, crise na Europa, novo Governo no Brasil...
                        </span>
                        <span>
                            A economia mundial está em seu contexto mais caótico nos últimos tempos, e estamos em um momento de inflexão entre 2 Ciclos Econômicos globais.
                        </span>
                        <span>
                            Podemos estar à beira de uma crise mundial, mas, ao mesmo tempo, diante de uma janela de oportunidade única no mercado financeiro...
                        </span>
                        <span>
                            Você se sente preparado para agir nesses casos?
                        </span>
                    </span>
                </div>
                <div className='flex flex-col justify-center items-center max-h-max py-16 gap-10 bg-blue-800'>
                    <strong className='flex lg:max-w-max lg:text-xl ms:text-lg ms:w-11/12 font-bold'>
                        Veja o que a diferença que o Ciclos de Mercado pode fazer no seu 2023:
                    </strong>
                    <div className='flex lg:max-w-max lg:flex-row ms:flex-col gap-5 ms:w-11/12'>
                        <div className='flex flex-col bg-gray-500 rounded-2xl lg:p-10 ms:p-5 gap-5'>
                            <span className='flex flex-col gap-5 text-2xl font-bold'>
                                <span className='text-red-500'>
                                    <XCircle size={50} />
                                </span>
                                Quem não entende os Ciclos Econômicos
                            </span>
                            <div className='flex flex-col lg:gap-0 ms:gap-2'>
                                <span className='flex items-center gap-2 lg:text-base ms:text-sm'>
                                    <span className='text-red-500'>
                                        <X size={30} />
                                    </span>
                                    Incerteza em relação aos seus investimentos
                                </span>
                                <span className='flex items-center gap-2 lg:text-base ms:text-sm'>
                                    <span className='text-red-500'>
                                        <X size={30} />
                                    </span>
                                    Dúvidas sobre os rumos de sua empresa e as escolhas que devem ser feitas
                                </span>
                                <span className='flex items-center gap-2 lg:text-base ms:text-sm'>
                                    <span className='text-red-500'>
                                        <X size={30} />
                                    </span>
                                    Vulnerável à próximo crise
                                </span>
                                <span className='flex items-center gap-2 lg:text-base ms:text-sm'>
                                    <span className='text-red-500'>
                                        <X size={30} />
                                    </span>
                                    Depende da opinião de terceiros
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col bg-gray-500 rounded-2xl lg:p-10 ms:p-5 gap-5'>
                            <span className='flex flex-col gap-5 text-2xl font-bold'>
                                <span className='text-green-600'>
                                    <CheckCircle size={50} />
                                </span>
                                Aluno do Ciclos de Mercado
                            </span>
                            <div className='flex flex-col lg:gap-0 ms:gap-2'>
                                <span className='flex items-center gap-2 lg:text-base ms:text-sm'>
                                    <span className='text-green-600'>
                                        <Check size={30} />
                                    </span>
                                    Capaz de entender os fenômenos e ciclos econômicos e investir de acordo
                                </span>
                                <span className='flex items-center gap-2 lg:text-base ms:text-sm'>
                                    <span className='text-green-600'>
                                        <Check size={30} />
                                    </span>
                                    Sabe como preparar sua empresa para as dificuldades que virão
                                </span>
                                <span className='flex items-center gap-2 lg:text-base ms:text-sm'>
                                    <span className='text-green-600'>
                                        <Check size={30} />
                                    </span>
                                    Preparado para a próxima crise
                                </span>
                                <span className='flex items-center gap-2 lg:text-base ms:text-sm'>
                                    <span className='text-green-600'>
                                        <Check size={30} />
                                    </span>
                                    Tem segurança para tomar as próprias decisões financeiras
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-row ms:flex-col items-center justify-center max-h-max py-16 lg:px-10 2xl:px-0 gap-10 bg-blue-800 animate-pulse'>
                    <img
                        src={SylicomValley}
                        className="2xl:w-[650px] 2xl:h-[350px] lg:w-[500px] lg:h-[350px] ms:w-11/12 ms:h-[200px]"
                    />
                    <div className='flex flex-col lg:w-[650px] lg:h-[350px] gap-5 text-center ms:w-11/12'>
                        <span className='flex flex-col gap-2'>
                            <strong className='lg:text-3xl ms:text-2xl'>
                                Os sinais começaram a aparecer...
                            </strong>
                            <span className='lg:text-base ms:text-sm'>
                                A segunda maior quebra bancária da história dos EUA acabou de acontecer. Silicon Valley Bank, Silvergate, FTX. Um atrás do outro. Todos mostrando que o caos está próximo.
                            </span>
                        </span>
                        <span className='font-bold lg:text-base ms:text-sm'>
                            Eu quero que você saiba que pode se proteger.
                        </span>
                        <span className='lg:text-base ms:text-sm'>
                            Mais que isso, aproveitar essa janela de oportunidade.
                        </span>
                    </div>
                </div>
                <div className='flex flex-col py-16 items-center max-h-max gap-20 bg-blue-800'>
                    <div className='flex lg:max-w-max ms:w-11/12 flex-col items-center gap-10'>
                        <strong className='flex lg:text-4xl ms:text-2xl font-bold text-center'>
                            Como funciona o Ciclos de Mercado?
                        </strong>
                        <span className='flex flex-col gap-5 text-center lg:text-base ms:text-sm'>
                            <span>
                                <strong>No Ciclos de Mercado</strong>, é um treinamento completo, no qual você vai ter acessoa mais de 12 módulos com conteúdo gravados e disponibilizados de forma totalmente online.
                            </span>
                            <span>
                                Além disso, <strong>receberá 2 encontros ao vivos</strong>, para tirar dúvidas diretamente com Fernando Ulrich.
                            </span>
                        </span>
                    </div>
                    <div className='flex lg:max-w-max ms:w-11/12 flex-col items-center gap-10'>
                        <strong className='flex lg:text-4xl ms:text-2xl font-bold text-center'>
                            O que você vai aprender?
                        </strong>
                        <span className='flex flex-col gap-5 text-center lg:text-base ms:text-sm'>
                            <span>
                                <strong>No Ciclos de Mercado,</strong> você vai receber as ferramentas necessárias para fazer suas análises e tomar suas próprias decisões.
                            </span>
                            <span>
                                Não importa se você está preocupado com suas finanças pessoais, sua empresa ou seus investimentos. Estará pronto para tudo.
                            </span>
                            <span className='font-bold'>
                                Dá uma olhada nos módulos preparados para seu caminho:
                            </span>
                        </span>
                    </div>
                    <div className='flex flex-col items-center w-full gap-1'>
                        <Folder
                            title='Módulo 1: O básico sobre economia (9 aulas)'
                            subtitle='Neste módulo serão explicados os principais conceitos das ciências econômicas, refinando o seu entendimento sobre o assunto mesmo que você já tenha algum conhecimento prévio.'
                        />
                        <Folder
                            title='Módulo 2: Dinheiro e o sistema financeiro (9 aulas)'
                            subtitle='Neste módulo você irá aprender a origem da moeda e como é definido o seu poder de compra, a história monetária contemporânea e como funciona o sistema financeiro atual, com a criação do dinheiro e injeções de liquidez dos bancos centrais.'
                        />
                        <Folder
                            title='Módulo 3: Os Ciclos Econômicos (7 aulas)'
                            subtitle='Neste módulo você irá aprender todo o conceito teórico dos ciclos econômicos: o que são os ciclos econômicos, quais suas causas e, principalmente, quais suas fases, para que possa saber como explorá-las em seus investimentos.'
                        />
                        <Folder
                            title='Módulo 4: Indicadores do Ciclo (8 aulas)'
                            subtitle='Neste módulo, que será atualizado para a turma 4, irei mostrar todos os indicadores que eu utilizo para acompanhar os ciclos econômicos. Com este conhecimento você será capaz de entender e fazer a leitura do que está acontecendo com a atividade econômica atualmente.'
                        />
                        <Folder
                            title='Módulo 5: Os Ativos Financeiros no Ciclo (6 aulas)'
                            subtitle='Neste módulo, que também será atualizado para a turma 4, você irá aprender como os ativos financeiros se comportam em cada fase do ciclo econômico, apurando a sua visão para grandes oportunidades de investimento.'
                        />
                        <Folder
                            title='Módulo 6: Cases históricos (5 aulas)'
                            subtitle='Neste módulo, iremos ver na prática toda a teoria explicada até aqui. São diversos casos reais para exemplificar o que foi aprendido nas últimas aulas e facilitar a retenção do seu conhecimento.'
                        />
                        <Folder
                            title='Módulo 7: Empreendendo e investindo no ciclo (6 aulas)'
                            subtitle='Neste módulo, irei apresentar algumas estratégias de investimento específicas e como qualquer empreendedor, executivo ou empresário deve utilizar o conhecimento dos ciclos de mercado em sua atividade profissional e não apenas na sua gestão de investimentos.'
                        />
                        <Folder
                            title='Módulo 8: Pandemia e o ciclo econômico (4 aulas)'
                            subtitle='Apresento como a pandemia mudou o ciclo econômico que o mundo estava caminhando e os impactos de inflação gerados após esse período de estímulos.'
                        />
                        <Folder
                            title='Módulo 9: Montando uma carteira de investimentos (1 aula)'
                            subtitle='Neste módulo, irei trazer exemplos práticos de como montar uma carteira de investimentos pensando como um investidor global.'
                        />
                        <Folder
                            title='Módulo 10: Commodities - NOVO'
                            subtitle='Entenda os fundamentos das commodities: agrícolas, metálicas e energéticas, analisando os ciclos econômicos inerentes a cada uma delas e como são impactadas por estes padrões.'
                        />
                        <Folder
                            title='Módulo 11: Economia de Guerra - NOVO'
                            subtitle='Dado os conflitos recentes entre a Rússia e a Ucrânia, preparei um material exclusivo falando sobre investimentos e negócios em tempo de guerra.'
                        />
                        <Folder
                            title='Módulo 12: Ativos Alternativos - NOVO'
                            subtitle='Como o bitcoin e outros criptoativos se encaixam na teoria dos ciclos econômicos e quais as oportunidades dentro deste mercado.'
                        />
                    </div>
                </div>
                <div className='flex lg:flex-row ms:flex-col items-center justify-center max-h-max p-16 gap-10 bg-blue-800 animate-pulse'>
                    <img
                        src={UlrichMacbook}
                        className="lg:w-[700px] lg:h-[350px] ms:w-11/12 ms:h-[200px]"
                    />
                    <div className='flex flex-col lg:w-[650px] lg:h-[350px] ms:w-11/12 gap-5 text-center'>
                        <span className='flex flex-col gap-5'>
                            <span className='lg:text-2xl ms:text-xl'>
                                Além disso você também recebe
                            </span>
                            <strong className='lg:text-3xl ms:text-xl font-black tracking-widest'>
                                BÔNUS EXCLUSIVOS
                            </strong>
                        </span>
                        <div className='flex flex-col lg:gap-0 ms:gap-2'>
                            <span className='flex lg:items-center ms:text-left gap-2'>
                                <span className='text-blue-600'>
                                    <Check size={30} />
                                </span>
                                2 encontros ao vivo
                            </span>
                            <span className='flex lg:items-center ms:text-left gap-2'>
                                <span className='text-blue-600'>
                                    <Check size={30} />
                                </span>
                                Aulas Extras
                            </span>
                            <span className='flex lg:items-center ms:text-left gap-2'>
                                <span className='text-blue-600'>
                                    <Check size={30} />
                                </span>
                                Gravações do Ulrich Connection
                            </span>
                            <span className='flex lg:items-center ms:text-left gap-2'>
                                <span className='text-blue-600'>
                                    <Check size={30} />
                                </span>
                                E muito mais...
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex pt-16 lg:flex-row ms:flex-col lg:px-40 ms:px-0 lg:justify-between ms:items-center lg:items-start bg-gradient-to-tl from-blue-800 to-blue-900">
                    <div className='flex flex-col lg:w-2/4 ms:w-11/12 gap-10'>
                        <span className='flex flex-col gap-5 text-start'>
                            <span className='lg:text-lg ms:text-xs font-medium tracking-widest'>
                                QUEM SERÁ SEU PROFESSOR
                            </span>
                            <strong className='flex text-6xl font-semibold text-start'>
                                Fernando Ulrich
                            </strong>
                        </span>
                        <span className='lg:text-base ms:text-sm'>
                            Integrante do time de educação da Liberta Investimentos, Fernando Ulrich é Mestre em Economia da Escola Austríaca com mais de 19 anos de experiência na área de finanças corporativas e investimentos e mais de 9 anos em moedas digitais. É‌ ‌conselheiro‌ do‌ ‌Instituto‌ ‌Mises‌ ‌Brasil,‌ ‌estudioso‌ ‌de‌ ‌teoria‌ ‌monetária e ‌entusiasta‌ ‌de‌ ‌moedas‌ ‌digitais‌.‌ ‌Possui‌ ‌um‌ ‌canal‌ ‌no‌ ‌youtube‌ ‌com‌ ‌mais‌ ‌de‌ ‌545 mil‌ ‌inscritos, onde fala sobre‌ ‌economia,‌ ‌mercados e investimentos‌.‌
                        </span>
                    </div>
                    <img
                        src={Ulrich}
                        className="lg:w-[500px] lg:h-[500px] ms:w-11/12 ms:h-[300px]"
                    />
                </div>
                <div className='flex flex-col py-16 items-center max-h-max gap-10 bg-blue-800'>
                    <span className='flex lg:w-1/2 ms:w-11/12 text-center lg:text-4xl ms:text-2xl'>
                        <span>Saiba como se preparar para o <strong> Ciclo de Mercado que se inicia </strong> tomando suas próprias decisões e controlando seu dinheiro!</span>
                    </span>
                    <span className='flex flex-col items-center lg:w-2/3 ms:w-11/12 gap-3 max-h-max rounded-md py-16 border bg-gray-500'>
                        <span className='flex flex-col items-center lg:gap-3 ms:gap-1'>
                            <span className='text-lg font-bold tracking-widest'>
                                À VISTA
                            </span>
                            <span className='flex items-center font-bold text-blue-600'>
                                <span className='text-4xl'>R$</span>
                                <span className='text-7xl'>1.890</span>
                            </span>
                            <span className='text-2xl'>
                                ou 12x de R$189,00*
                            </span>
                        </span>
                        <span className='flex flex-col gap-3'>
                            <span className='flex flex-col'>
                                Nome *
                                <input
                                    type="text"
                                    placeholder='Nome'
                                    className='lg:w-[500px] ms:w-full p-2 text-gray-500 rounded-md'
                                />
                            </span>
                            <span className='flex flex-col'>
                                E-mail *
                                <input
                                    type="text"
                                    placeholder='E-mail'
                                    className='lg:w-[500px] ms:w-full p-2 text-gray-500 rounded-md'
                                />
                            </span>
                            <span className='flex flex-col'>
                                WhatsApp *
                                <input
                                    type="text"
                                    placeholder='(XX) XXXX-XXXX'
                                    className='lg:w-[500px] ms:w-full p-2 text-gray-500 rounded-md'
                                />
                            </span>
                            <button className='bg-blue-600 lg:text-base ms:text-sm font-semibold py-2 rounded-md hover:drop-shadow-3xl duration-500'>
                                QUERO ME INSCREVER
                            </button>
                        </span>
                    </span>
                </div>
                <div className="flex lg:flex-row ms:flex-col lg:px-40 lg:py-0 ms:py-10 lg:gap-28 ms:gap-8 justify-center lg:items-stretch ms:items-center bg-gradient-to-tl from-blue-800 to-blue-900">
                    <span className='flex lg:max-w-max ms:w-11/12 lg:items-center lg:text-5xl ms:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 -tracking-wider'>
                        Experimente por 7 dias
                    </span>
                    <div className='flex flex-col font-bold lg:w-2/5 ms:w-11/12 gap-5 lg:py-20 lg:text-base ms:text-sm'>
                        <span className='flex flex-col gap-5 text-start'>
                            Garantia total de satisfação ou o seu dinheiro de volta.
                            Se em até 7 dias você decidir que o Ciclos de Mercado não é para você, basta entrar em contato com minha equipe e solicitar o reembolso integral do valor investido.
                            Zero burocracia.
                        </span>
                        <span>
                            Quero tirar esse peso dos seus ombros.
                        </span>
                    </div>
                </div>
                <div className="flex flex-col lg:px-40 gap-5 py-10 items-center justify-center bg-gradient-to-tl from-blue-800 to-blue-900">
                    <span className='flex lg:max-w-max ms:w-11/12 flex-col items-center text-center lg:gap-5 ms:gap-2 lg:text-4xl ms:text-2xl font-black text-blue-600 -tracking-wider'>
                        <Gift size={70} />
                        Condição especial
                    </span>
                    <span className='lg:w-[30%] ms:w-11/12 text-2xl font-bold text-center'>
                        Até 20% de desconto, para alunos do
                        Follow the Money
                    </span>
                    <button className='flex lg:max-w-max ms:w-11/12 lg:text-base ms:text-xs mm:text-sm justify-center font-bold py-5 px-20 rounded transition ease-in-out delay-150 bg-blue-600 hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300'>
                        QUERO APROVEITAR!
                    </button>
                </div>
            </main>
            <footer className="flex flex-col lg:px-40 py-10 items-center bg-blue-800">
                <span className='flex lg:max-w-max ms:w-11/12 flex-col gap-5 mb-28'>
                    <span className='flex flex-col items-center lg:text-2xl ms:text-lg font-black'>
                        Ficou com alguma dúvida?
                    </span>
                    <span className='text-base font-bold text-center'>
                        Fale com nossa equipe
                    </span>
                    <button className='flex justify-center lg:text-base ms:text-sm font-bold py-3 px-6 rounded bg-green-500 hover:drop-shadow-3xl duration-500'>
                        CONVERSE CONOSCO NO WHATSAAP
                    </button>
                </span>
                <span className='flex flex-col items-center mb-10 gap-2'>
                    <span className='text-sm font-medium'>
                        Uma produção
                    </span>
                    <img
                        src={LibertaLogo}
                        className="w-40 h-12"
                    />
                </span>
                <span className='flex flex-col lg:w-3/5 ms:w-11/12 items-center text-center gap-2'>
                    <span className='text-xs'>
                        Wolwacz, Ruschel e Cia LTDA | CNPJ/MF nº 06.003.558/0001-07 | Endereço: Av. Dr. Nilo Peçanha, 2900/1201 – Bela Vista, Porto Alegre – RS, 91330-001
                    </span>
                    <span className='text-xs'>
                        Este serviço pode ser interrompido ou descontinuado a qualquer momento, mediante aviso prévio. Os conteúdos produzidos representam a visão pessoal de Fernando Ulrich para fins de educação financeira e econômica, não sendo, portanto, recomendações de investimentos. Retornos passados não são garantia de retornos futuros. Investimentos apresentam risco e podem gerar prejuízos financeiros.
                    </span>
                    <span className='text-xs'>
                        Wolwacz, Ruschel e Cia LTDA – Todos os direitos reservados.
                    </span>
                </span>
            </footer>
        </aside>
    )
}