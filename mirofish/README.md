# Guia Fácil & MiroFish - Motor de Simulação e Predição Multi-Agente

Este diretório contém a estrutura de integração entre a plataforma **Guia Fácil** e a engine de simulação multi-agente **MiroFish** (baseada em OASIS / CAMEL-AI e GraphRAG).

---

## 📁 Estrutura dos Arquivos

* `seed_material_guia_facil.md`: Documento de semente ontológica (Seed Material) com todos os dados de Campos do Jordão, atrativos, comércios credenciados, regras do WhatsApp, personas e hipóteses preditivas. É o arquivo que o MiroFish lê para construir o grafo de conhecimento e instanciar os agentes.
* `run_simulation.py`: Motor de simulação de enxame local em Python. Instancia dezenas de agentes autônomos (famílias, casais e ecoturistas) que interagem com o Guia Fácil, tomam decisões de viagem, resgatam cupons e geram o relatório preditivo.
* `docker-compose.yml`: Manifesto para rodar a imagem oficial do MiroFish (`666ghj/mirofish:latest`) containerizada com mapeamento de volumes.
* `.env.example`: Modelo de configuração das chaves de LLM (OpenAI, DeepSeek, Qwen ou Gemini via compatibilidade) e Zep Cloud.
* `start_mirofish.ps1`: Script PowerShell de automação para executar a simulação ou subir os containers com 1 comando.
* `relatorio_predicao_mirofish.md`: Relatório executivo de validação gerado pela simulação com métricas quantitativas, taxa de conversão e parecer estratégico.

---

## 🚀 Como Executar

### Método 1: Simulação Instantânea do Enxame (Local Standalone)
Não precisa de chaves de API externas. Executa o teste de enxame multi-agente em segundos usando o Python do ambiente:
```powershell
powershell -ExecutionPolicy Bypass -File .\start_mirofish.ps1 -Mode local
```
Ao término, consulte o relatório gerado em `relatorio_predicao_mirofish.md`.

---

### Método 2: Interface Web Oficial do MiroFish (Docker)
1. Crie seu arquivo de variáveis de ambiente:
   ```powershell
   Copy-Item .env.example .env
   ```
2. Adicione sua chave de API de LLM (ex: DeepSeek ou OpenAI) no arquivo `.env`.
3. Inicie o MiroFish:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\start_mirofish.ps1 -Mode docker
   ```
4. Acesse:
   * **Dashboard MiroFish:** `http://localhost:3000`
   * **Upload do Seed:** Faça o upload do arquivo `seed_material_guia_facil.md` para iniciar a construção do grafo ontológico e a simulação de cenários preditivos.

---

### Método 3: Código-Fonte Completo do MiroFish (Desenvolvimento)
Para clonar e inspecionar o código-fonte original do repositório `666ghj/MiroFish`:
```powershell
powershell -ExecutionPolicy Bypass -File .\start_mirofish.ps1 -Mode clone
```
