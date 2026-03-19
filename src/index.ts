import { checkPort } from './scanner.js';

async function runScanner() {
   
    const target = '127.0.0.1'; 
    const portsToScan = [21, 22, 23, 25, 53, 80, 110, 443, 3000, 3306, 5432, 8080];
    
    const colors = {
        reset: "\x1b[0m",
        green: "\x1b[32m",
        red: "\x1b[31m",
        yellow: "\x1b[33m",
        cyan: "\x1b[36m"
    };

    console.clear(); 
    console.log(`${colors.cyan}________________________________`);
    console.log(`RELATÓRIO DE VARREDURA DE REDE`);
    console.log(`Alvo: ${target}`);
    console.log(`Total de portas: ${portsToScan.length}`);
    console.log(`________________________________${colors.reset}\n`);

    let openPortsCount = 0;

   
    const scanResults = portsToScan.map(async (port) => {
        const isOpen = await checkPort(port, target);
        
        if (isOpen) {
            openPortsCount++;
            console.log(`${colors.red}  [OPEN]  Porta ${port.toString().padEnd(5)} - Serviço Detectado${colors.reset}`);
        } else {
            console.log(`${colors.green}  [CLOSE] Porta ${port.toString().padEnd(5)} - Bloqueada/Inativa${colors.reset}`);
        }
    });

    await Promise.all(scanResults);

    // Resumo final detalhado
    console.log(`\n${colors.cyan}________________________________')`);
    console.log(`RESUMO FINAL`);
    console.log(`${colors.red}✅ Portas Abertas: ${openPortsCount}`);
    console.log(`${colors.green}❌ Portas Fechadas: ${portsToScan.length - openPortsCount}`);
    
    if (openPortsCount > 0) {
        console.log(`${colors.yellow}⚠️  Atenção: Portas abertas podem ser vetores de ataque.`);
    }
    console.log(`${colors.cyan}________________________________')${colors.reset}\n`);
}

runScanner().catch(err => console.error("Erro fatal no scanner:", err));