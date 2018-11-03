---
title: Ubuntu 16.04 - atalhos de cantos param de funcionar no Unity
slug: ubuntu-atalhos-de-cantos-param-de-funcionar
summary: Como resolvi esse probleminha chato do Unity com uma gambiarra
published: 2018-11-03
---

Corrigindo na gambiarra o problema das **Hot Corners** ou **atalho de cantos** que param de funcionar após o boot no Ubuntu 16.04. Gosto de usar o canto superior esquerdo pra espalhar todas as janelas de aplicativos abertos e o inferior direito pra mostrar as áreas de trabalho.

Em algum momento isso parou de funcionar, só voltava após ativar e desativar essa funcionalidade na ferramenta de ajuste do Unity ou dando reboot. Depois descobri que precisa dar uma recarregada na interface via terminal com o comando `sudo systemctl restart lightdm.service`.

Depois descobri um comando mais simples: `unity --replace` que podia ser acionado com `ALT + F2` na janela "Executar um comando".

Como até onde pesquisei não há uma solução pra esse problema, além de trocar o Unity por outra interface, o que não me atenderia por enquanto (uso Unity pela agilidade e XFCE quando preciso de RAM sobrando!).

Fui pesquisar uma forma de pelo menos automatizar esse processo, foi aí que descobri como transformar em um script e carregar após login na inicialização sem ter que ir no `ALT + F2`. Criei um script [baseado nessa thread](https://ubuntuforums.org/showthread.php?t=2339727/ "Compiz's hotcorners stop to work after boot, but comeback after I kill its process") e modifiquei:

    #!/bin/bash
    #fix scale hot corner
    sleep 6
    unity --replace
    exit 0
