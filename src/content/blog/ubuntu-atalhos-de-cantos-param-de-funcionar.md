---
title: "Ubuntu 16.04 - atalhos de cantos param de funcionar no Unity"
summary: "Como resolvi esse probleminha chato do Unity com um simples script"
pubDate: "2018-11-03"
updatedDate: "2023-03-19"
---

Corrigindo na gambiarra o problema das **Hot Corners** ou **atalho de cantos** que param de funcionar após o boot no Ubuntu 16.04 (Unity). Gosto de usar o canto superior esquerdo pra espalhar todas as janelas de aplicativos abertos e o inferior direito pra mostrar as áreas de trabalho.

Em algum momento isso parou de funcionar, só voltava após ativar e desativar essa funcionalidade na ferramenta de ajuste do Unity ou reiniciando o sistema. Depois descobri que é necessário reiniciar o gerenciador de janelas via terminal com o comando `sudo systemctl restart lightdm.service`.

Depois descobri uma solução mais simples: `unity --replace` que podia ser acionado com `ALT + F2` na janela "Executar um comando".

Até onde pesquisei não há uma solução pra esse problema, além de trocar o Unity por outra interface, o que não me atenderia por enquanto (uso Unity pela agilidade e XFCE quando preciso de RAM sobrando!).

Fui pesquisar uma forma de pelo menos automatizar esse processo, foi aí que descobri como transformar em um script e carregar após login na inicialização sem ter que ir no `ALT + F2`.

Criei um script [baseado nessa thread](https://ubuntuforums.org/showthread.php?t=2339727/ "Compiz's hotcorners stop to work after boot, but comeback after I kill its process") e fiz uma leve modificação:

```bash
#!/bin/bash
#fix scale hot corner
sleep 6
unity --replace
exit 0
```

O script aguarda 6 segundos até executar `unity --replace` e encerrar. A desvantagem é ver a interface ser recarregada após o login, mas diminuindo o tempo de _sleep_ quase não se percebe pois é rápido.

Salvei o script como _fixhotcorner_ na pasta _home/user/bin_ e o tornei executável com `chmod +x fixhotcorner`.

Aṕos isso é só procurar por "Aplicativos iniciais de sessão" e adicionar o script executável informando o endereço do mesmo e é só reiniciar o sistema para testar!
