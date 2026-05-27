import { useState } from 'react';
import './App.css';
import { Bugs } from './Bugs';

const Table1 = () => {
  const payload = `<html>

  <body>
      <!--StartFragment-->
      <table border="0" cellspacing="0" cellpadding="0" style="word-break: break-word; box-sizing: border-box; color: rgb(0, 0, 0); font-family: Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; width: 1304.44px; border-collapse: collapse;">
          <tbody style="word-break: break-word; box-sizing: border-box;">
              <tr style="word-break: break-word; box-sizing: border-box;">
                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;">
                      <table border="0" cellspacing="0" cellpadding="0" style="word-break: break-word; box-sizing: border-box; width: 1304.44px;">
                          <tbody style="word-break: break-word; box-sizing: border-box;">
                              <tr style="word-break: break-word; box-sizing: border-box;">
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;">
                                      <p style="word-break: break-word; box-sizing: border-box; margin: 0px 0px 15pt; font-size: 10pt; font-family: Aptos, sans-serif;"><span style="word-break: break-word; box-sizing: border-box; font-size: 8.5pt;"> </span></p>
                                  </td>
                                  <td width="64" colspan="61" style="word-break: break-word; box-sizing: border-box; border-width: medium; border-style: none; border-color: currentcolor; border-image: initial; padding: 0px;">
                                      <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"> </p>
                                  </td>
                              </tr>
                              <tr style="word-break: break-word; box-sizing: border-box; break-inside: auto;">
                                  <td colspan="62" style="word-break: break-word; box-sizing: border-box; padding: 0px;">
                                      <table border="0" cellspacing="0" cellpadding="0" style="word-break: break-word; box-sizing: border-box;">
                                          <tbody style="word-break: break-word; box-sizing: border-box;">
                                              <tr style="word-break: break-word; box-sizing: border-box;">
                                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px 15pt 0px 0px;">
                                                      <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><b style="word-break: break-word; box-sizing: border-box;">Trecho:</b><span> </span>GRU &gt; BLR - 06 Abr - 1 ADT<span style="word-break: break-word; box-sizing: border-box; font-size: 12pt;"></span></p>
                                                  </td>
                                                  <td width="10" style="word-break: break-word; box-sizing: border-box; width: 7.5pt; padding: 0px;">
                                                      <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><img width="10" src="http://www.maisfly.com.br/Agencias30/Recursos/Imagens/Bagagens/woo-icon-handbag.png" style="word-break: break-word; box-sizing: border-box; max-width: 100%; width: 0.1083in;"></p>
                                                  </td>
                                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px 7.5pt 0px 3.75pt;">
                                                      <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><span style="word-break: break-word; box-sizing: border-box; font-size: 8.5pt;">Mochila ou bolsa</span></p>
                                                  </td>
                                                  <td width="10" style="word-break: break-word; box-sizing: border-box; width: 7.5pt; padding: 0px;">
                                                      <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><img width="10" src="http://www.maisfly.com.br/Agencias30/Recursos/Imagens/Bagagens/woo-icon-handbaggage.png" style="word-break: break-word; box-sizing: border-box; max-width: 100%; width: 0.1083in;"><span style="word-break: break-word; box-sizing: border-box; font-size: 12pt;"></span></p>
                                                  </td>
                                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px 7.5pt 0px 3.75pt;">
                                                      <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><span style="word-break: break-word; box-sizing: border-box; font-size: 8.5pt;">Bagagem de mão</span></p>
                                                  </td>
                                                  <td width="10" style="word-break:
   break-word; box-sizing: border-box; width: 7.5pt; padding: 0px;">
                                                      <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><img width="10" src="http://www.maisfly.com.br/Agencias30/Recursos/Imagens/Bagagens/woo-icon-checkedbaggage.png" style="word-break: break-word; box-sizing: border-box; max-width: 100%; width: 0.1083in;"><span style="word-break: break-word; box-sizing: border-box; font-size: 12pt;"></span></p>
                                                  </td>
                                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px 7.5pt 0px 3.75pt;">
                                                      <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><span style="word-break: break-word; box-sizing: border-box; font-size: 8.5pt;">Bagagem despachada</span></p>
                                                  </td>
                                                  <td width="10" style="word-break: break-word; box-sizing: border-box; width: 7.5pt; padding: 0px;">
                                                      <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><img width="7" src="http://www.maisfly.com.br/Agencias30/Recursos/Imagens/Bagagens/woo-icon-bagnocontain.png" style="word-break: break-word; box-sizing: border-box; max-width: 100%; width: 0.075in;"><span style="word-break: break-word; box-sizing: border-box; font-size: 12pt;"></span></p>
                                                  </td>
                                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px 7.5pt 0px 3.75pt;">
                                                      <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><span style="word-break: break-word; box-sizing: border-box; font-size: 8.5pt;">Não contém</span></p>
                                                  </td>
                                                  <td width="10" style="word-break: break-word; box-sizing: border-box; width: 7.5pt; padding: 0px;">
                                                      <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><img width="7" src="http://www.maisfly.com.br/Agencias30/Recursos/Imagens/Bagagens/woo-icon-checkedbaggage-indef-3.png" style="word-break: break-word; box-sizing: border-box; max-width: 100%; width: 0.075in;"><span style="word-break: break-word; box-sizing: border-box; font-size: 12pt;"></span></p>
                                                  </td>
                                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px 7.5pt 0px 3.75pt;">
                                                      <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><span style="word-break: break-word; box-sizing: border-box; font-size: 8.5pt;">Info. Indisponível</span></p>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                              <tr style="word-break: break-word; box-sizing: border-box; break-inside: auto;">
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Cia</span><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);"></span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Voo</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word
  ; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Saída</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Chegada</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Duração</span><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);"></span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Origem</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Destino</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Esc.</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Equip.</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">
                                              Cabine</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Base</span></p>
                                  </td>
                                  <td width="0" style="word-break: break-word; box-sizing: border-box; width: 0.3pt; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Bagagem</span></p>
                                  </td>
                                  <td width="30" style="word-break: break-word; box-sizing: border-box; width: 22.5pt; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Tipo</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Tarifa ADT</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Tx Comb.</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Tx Emb.</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">DU</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: 
  break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Total</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium 1pt 1pt; border-style: solid none solid solid; border-color: rgb(204, 204, 204) currentcolor rgb(204, 204, 204) rgb(204, 204, 204); background: rgb(161, 161, 161); padding: 1.5pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(255, 255, 255);">Total R$</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-
  word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                              </tr>
                              <tr style="word-break: break-word; box-sizing: border-box; height: 33.75pt; break-inside: avoid;">
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif; color: rgb(0, 0, 0); background: rgb(238, 238, 238);">NDC EMIRATES</span><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;"></span></p>
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;"><img src="http://www.maisfly.com.br/Agencias30/Recursos/Imagens/NovoLayout/logo_iatas/iata_EK.png" style="word-break: break-word; box-sizing: border-box; max-width: 100%;"></span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: bor
  der-box; text-align: center; break-inside: auto;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">111</span><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;"></span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">01 Jan</span></p>
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">01:00</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">01 Jan</span></p>
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">01:00</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center; break-inside: auto;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">01:00</span><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;"></span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center; break-inside: auto;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">GRU - SAO PAULO</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center; break-inside: auto;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">DXB - DUBAI</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center; break-inside: auto;"><span style="word-break: break-word; box-sizing: border-
  box; font-size: 7pt; font-family: Verdana, sans-serif;">0</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center; break-inside: auto;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">222</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center; break-inside: auto;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">Econ Pre.</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center; break-inside: auto;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">R-RRRRRRR1</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium medium 1pt; border-style: none none none solid; border-color: currentcolor currentcolor currentcolor rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt;">
                                      <div align="center" style="word-break: break-word; box-sizing: border-box;">
                                          <table border="0" cellspacing="0" cellpadding="0" style="word-break: break-word; box-sizing: border-box; width: 38.9931px;">
                                              <tbody style="word-break: break-word; box-sizing: border-box;">
                                                  <tr style="word-break: break-word; box-sizing: border-box; height: 11.25pt;">
                                                      <td style="word-break: break-word; box-sizing: border-box; padding: 0.75pt; height: 11.25pt;">
                                                          <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt;">PEF</span></p>
                                                      </td>
                                                      <td width="10" style="word-break: break-word; box-sizing: border-box; width: 7.5pt; padding: 0.75pt 2.25pt; height: 11.25pt;">
                                                          <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><img width="10" src="http://www.maisfly.com.br/Agencias30/Recursos/Imagens/Bagagens/woo-icon-handbag.png" style="word-break: break-word; box-sizing: border-box; max-width: 100%; width: 0.1083in;"><span style="word-break: break-word; box-sizing: border-box; font-size: 12pt;"></span></p>
                                                      </td>
                                                      <td width="10" style="word-break: break-word; box-sizing: border-box; width: 7.5pt; padding: 0.75pt 2.25pt; height: 11.25pt;">
                                                          <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><img width="10" src="http://www.maisfly.com.br/Agencias30/Recursos/Imagens/Bagagens/woo-icon-handbaggage.png" style="word-break: break-word; box-sizing: border-box; max-width: 100%; width: 0.1083in;"></p>
                                                      </td>
                                                      <td style="word-break: break-word; box-sizing: border-box; padding: 0.75pt 2.25pt; height: 11.25pt;">
                                                          <table border="0" cellspacing="0" cellpadding="0" style="word-break: break-word; box-sizing: border-box; width: 12.8646px;">
                                                              <tbody style="word-break: break-word; box-sizing: border-box;">
                                                                  <tr style="word-break: break-word; box-sizing: border-box; height: 11.25pt;">
                                                                      <td width="10" style="word-break: break-word; box-sizing: border-box; width: 7.5pt; padding: 0px 1.5pt; height: 11.25pt;">
                                                                          <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-famil
  y: Aptos, sans-serif;"><img width="10" src="http://www.maisfly.com.br/Agencias30/Recursos/Imagens/Bagagens/woo-icon-checkedbaggage.png" style="word-break: break-word; box-sizing: border-box; max-width: 100%; width: 0.1083in;"></p>
                                                                      </td>
                                                                      <td style="word-break: break-word; box-sizing: border-box; padding: 0px 1.5pt; height: 11.25pt;">
                                                                          <p style="word-break: break-word; box-sizing: border-box; margin: 0px; display: inline-block;"><b style="word-break: break-word; box-sizing: border-box;"><span style="word-break: break-word; box-sizing: border-box; font-size: 6pt;">2 pc</span></b><span style="word-break: break-word; box-sizing: border-box; font-size: 6pt;"></span></p>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  </td>
                                  <td rowspan="2" style="word-break: break-word; box-sizing: border-box; border-width: medium medium medium 1pt; border-style: none none none solid; border-color: currentcolor currentcolor currentcolor rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; text-align: center; min-height: 0px;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">RR</span><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;"></span></p>
                                  </td>
                                  <td rowspan="2" style="word-break: break-word; box-sizing: border-box; border-width: medium medium medium 1pt; border-style: none none none solid; border-color: currentcolor currentcolor currentcolor rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; text-align: center; break-inside: auto; min-height: 0px;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">USD 9.999,99</span></p>
                                  </td>
                                  <td rowspan="2" style="word-break: break-word; box-sizing: border-box; border-width: medium medium medium 1pt; border-style: none none none solid; border-color: currentcolor currentcolor currentcolor rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; text-align: center; min-height: 0px;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">* USD 0,00</span></p>
                                  </td>
                                  <td rowspan="2" style="word-break: break-word; box-sizing: border-box; border-width: medium medium medium 1pt; border-style: none none none solid; border-color: currentcolor currentcolor currentcolor rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; text-align: center; min-height: 0px;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">USD 222,22</span></p>
                                  </td>
                                  <td rowspan="2" style="word-break: break-word; box-sizing: border-box; border-width: medium medium medium 1pt; border-style: none none none solid; border-color: currentcolor currentcolor currentcolor rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; text-align: center; min-height: 0px;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">USD 0,00</span></p>
                                  </td>
                                  <td rowspan="2" style="word-break: break-word; box-sizing: border-box; border-width: medium 1pt; border-style: none solid; border-color: currentcolor rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; text-align: center; min-height: 0px;"><b style="word-break: break-word; box-sizing: border-box;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">USD 9.999,99</span></b></p>
                                  </td>
                                  <td rowspan="2" style="word-break: break-word; box-sizing: border-box; border-width: medium 1pt; border-style: none s
  olid; border-color: currentcolor rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; text-align: center; min-height: 0px;"><b style="word-break: break-word; box-sizing: border-box;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">R$ 99.999,99</span></b></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><b r style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                              </tr>
                              <tr style="word-break: break-word; box-sizing: border-box; height: 33.75pt; break-inside: avoid;">
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;"><img src="http://www.maisfly.com.br/Agencias30/Recursos/Imagens/NovoLayout/logo_iatas/iata_EK.png" style="word-break: break-word; box-sizing: border-box; max-width: 100%;"></span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75p
  t; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center; break-inside: auto;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">222</span><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;"></span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">01 Jan</span></p>
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">01:00</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">01 Jan</span></p>
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif; text-align: center;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">01:00</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center; break-inside: auto;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">01:00</span><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;"></span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center; break-inside: auto;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">DXB - DUBAI</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center; break-inside: auto;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">BLR - BANGALORE</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-alig
  n: center; break-inside: auto;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">0</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center; break-inside: auto;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">999</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center; break-inside: auto;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">Econ.</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium 1pt 1pt; border-style: none none solid solid; border-color: currentcolor currentcolor rgb(204, 204, 204) rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt; break-inside: auto;">
                                      <p align="center" style="word-break: break-word; box-sizing: border-box; text-align: center; break-inside: auto;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt; font-family: Verdana, sans-serif;">X-RRRRRRR7</span></p>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; border-width: medium medium medium 1pt; border-style: none none none solid; border-color: currentcolor currentcolor currentcolor rgb(204, 204, 204); padding: 2.25pt; height: 33.75pt;">
                                      <div align="center" style="word-break: break-word; box-sizing: border-box;">
                                          <table border="0" cellspacing="0" cellpadding="0" style="word-break: break-word; box-sizing: border-box; width: 38.9931px;">
                                              <tbody style="word-break: break-word; box-sizing: border-box;">
                                                  <tr style="word-break: break-word; box-sizing: border-box; height: 11.25pt;">
                                                      <td style="word-break: break-word; box-sizing: border-box; padding: 0.75pt; height: 11.25pt;">
                                                          <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><span style="word-break: break-word; box-sizing: border-box; font-size: 7pt;">PEF</span></p>
                                                      </td>
                                                      <td width="10" style="word-break: break-word; box-sizing: border-box; width: 7.5pt; padding: 0.75pt 2.25pt; height: 11.25pt;">
                                                          <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><img width="10" src="http://www.maisfly.com.br/Agencias30/Recursos/Imagens/Bagagens/woo-icon-handbag.png" style="word-break: break-word; box-sizing: border-box; max-width: 100%; width: 0.1083in;"><span style="word-break: break-word; box-sizing: border-box; font-size: 12pt;"></span></p>
                                                      </td>
                                                      <td width="10" style="word-break: break-word; box-sizing: border-box; width: 7.5pt; padding: 0.75pt 2.25pt; height: 11.25pt;">
                                                          <p style="word-break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><img width="10" src="http://www.maisfly.com.br/Agencias30/Recursos/Imagens/Bagagens/woo-icon-handbaggage.png" style="word-break: break-word; box-sizing: border-box; max-width: 100%; width: 0.1083in;"></p>
                                                      </td>
                                                      <td style="word-break: break-word; box-sizing: border-box; padding: 0.75pt 2.25pt; height: 11.25pt;">
                                                          <table border="0" cellspacing="0" cellpadding="0" style="word-break: break-word; box-sizing: border-box; width: 12.8646px;">
                                                              <tbody style="word-break: break-word; box-sizing: border-box;">
                                                                  <tr style="word-break: break-word; box-sizing: border-box; height: 11.25pt;">
                                                                      <td width="10" style="word-break: break-word; box-sizing: border-box; width: 7.5pt; padding: 0px 1.5pt; height: 11.25pt;">
                                                                          <p style="word
  -break: break-word; box-sizing: border-box; margin: 0px; font-size: 10pt; font-family: Aptos, sans-serif;"><img width="10" src="http://www.maisfly.com.br/Agencias30/Recursos/Imagens/Bagagens/woo-icon-checkedbaggage.png" style="word-break: break-word; box-sizing: border-box; max-width: 100%; width: 0.1083in;"></p>
                                                                      </td>
                                                                      <td style="word-break: break-word; box-sizing: border-box; padding: 0px 1.5pt; height: 11.25pt;">
                                                                          <p style="word-break: break-word; box-sizing: border-box; margin: 0px; display: inline-block;"><b style="word-break: break-word; box-sizing: border-box;"><span style="word-break: break-word; box-sizing: border-box; font-size: 6pt;">2 pc</span></b><span style="word-break: break-word; box-sizing: border-box; font-size: 6pt;"></span></p>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  </td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td s tyle="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px; height: 33.75pt;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                              </tr>
                              <tr style="word-break: break-word; box-sizing: border-box; height: 7.5pt;">
                                  <td colspan="62" style="word-break: break-word; box-sizing: border-box; border-width: 1pt medium; border-style: solid none; border-color: rgb(204, 204, 204) currentcolor; background: rgb(222, 222, 222); padding: 0px; height: 7.5pt; break-inside: auto;"><br style="word-break: break-word; box-sizing: border-box;"></td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
              <tr style="word-break: break-word; box-sizing: border-box;">
                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
              </tr>
              <tr style="word-break: break-word; b
  ox-sizing: border-box;">
                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
              </tr>
              <tr style="word-break: break-word; box-sizing: border-box;">
                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
              </tr>
              <tr style="word-break: break-word; box-sizing: border-box;">
                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
              </tr>
              <tr style="word-break: break-word; box-sizing: border-box;">
                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
              </tr>
              <tr style="word-break: break-word; box-sizing: border-box;">
                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"><br style="word-break: break-word; box-sizing: border-box;"></td>
              </tr>
              <tr style="word-break: break-word; box-sizing: border-box;">
                  <td style="word-break: break-word; box-sizing: border-box; padding: 0px;"></td>
              </tr>
          </tbody>
      </table><br class="Apple-interchange-newline"><!--EndFragment-->
  </body>
  
  </html>`;

  return (
    <div>
      <div>
        <h1>Bug PROD-2660 reproduction steps</h1>
        <p>Step 1: Copy from "Start copy selection" to "End copy selection"</p>
        <p>Step 2: Paste in the editor</p>
        <p>Step 3: Observe the layout shift at the far right of the table as the first picture shows(and see that the 193 line is commented)</p>
        <img src="../public/froala-bug.png" style={{ maxWidth: "100%", height: "auto" }} />
        <h1>When i try to fix the layout by uncommenting the CSS line 193</h1>
        <p>It fixes the layout at first</p>
        <img src="../public/froala-bug1.png" style={{ maxWidth: "100%", height: "auto" }} />
        <p>But if you try to resize the some column it "collapses"</p>
        <img src="../public/froala-bug2.png" style={{ maxWidth: "100%", height: "auto" }} />

        <h2>Expected: no layout shifts on paste and no layout collapse on resize</h2>
      </div>
      <h2>PROD-2660 table</h2>
      <p>Start copy selection</p>
      <div>
        <div dangerouslySetInnerHTML={{ __html: payload }} />
      </div>
      <p>End copy selection</p>
    </div>
  );
};

const Table2 = () => {

  const payload2 = `<html>
  <body>
  <!--StartFragment--><html><head></head><body link="#467886" vlink="#96607D"><div ccp_infra_version="3" ccp_infra_timestamp="1777065060526" ccp_infra_user_hash="547961405" ccp_infra_copy_id="" data-ccp-timestamp="1777065060526"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="ProgId" content="Excel.Sheet"><meta name="Generator" content="Microsoft Excel 15"><style>table
      {mso-displayed-decimal-separator:"\.";
      mso-displayed-thousand-separator:"\,";}
  tr
      {mso-height-source:auto;}
  col
      {mso-width-source:auto;}
  td
      {padding-top:1px;
      padding-right:1px;
      padding-left:1px;
      mso-ignore:padding;
      color:black;
      font-size:11.0pt;
      font-weight:400;
      font-style:normal;
      text-decoration:none;
      font-family:"Aptos Narrow", sans-serif;
      mso-font-charset:0;
      text-align:general;
      vertical-align:bottom;
      border:none;
      white-space:nowrap;
      mso-rotate:0;}
  .xl16
      {font-family:Calibri;
      mso-generic-font-family:auto;
      mso-font-charset:0;
      text-align:center;
      border:.5pt solid black;}
  .xl24
      {color:black;
      font-family:Calibri;
      mso-generic-font-family:auto;
      mso-font-charset:0;
      text-align:center;
      border:.5pt solid black;
      background:white;
      mso-pattern:black none;}
  .xl47
      {color:black;
      font-family:Calibri;
      mso-generic-font-family:auto;
      mso-font-charset:1;
      text-align:center;
      border:.5pt solid black;}
  .xl72
      {color:black;
      font-family:Calibri;
      mso-generic-font-family:auto;
      mso-font-charset:0;
      text-align:center;
      border:.5pt solid black;}
  .xl80
      {color:white;
      font-weight:700;
      font-family:Calibri;
      mso-generic-font-family:auto;
      mso-font-charset:0;
      text-align:center;
      border:.5pt solid black;
      background:#305496;
      mso-pattern:black none;}
  </style><table width="952" style="border-collapse:collapse;width:714pt"><!--StartFragment--><colgroup><col width="154" style="width:116pt"><col width="237" style="width:178pt"><col width="222" style="width:167pt"><col width="339" style="width:254pt"></colgroup><tbody><tr height="20" style="height:15.0pt"><td rowspan="2" width="154" height="40" class="xl80" dir="LTR" style="width:116pt;height:30.0pt">Data&nbsp;</td><td rowspan="2" width="237" height="40" class="xl80" dir="LTR" style="width:178pt;height:30.0pt">Cia Aérea</td><td rowspan="2" width="222" height="40" class="xl80" dir="LTR" style="width:167pt;height:30.0pt">Rota</td><td rowspan="2" width="339" height="40" class="xl80" dir="LTR" style="width:254pt;height:30.0pt">Assentos</td></tr><tr height="20" style="height:15.0pt"></tr><tr height="20" style="height:15.0pt"><td height="20" class="xl24" dir="LTR" style="height:15.0pt">4-Oct</td><td class="xl16">AMERICAN AIRLINES</td><td class="xl24" dir="LTR">Guarulhos x John Kennedy (NYC)</td><td class="xl24" dir="LTR">03A / 03D / 03H</td></tr><tr height="20" style="height:15.0pt"><td height="20" class="xl16" style="height:15.0pt">19-Oct</td><td class="xl47">AMERICAN AIRLINES</td><td class="xl72">John Kennedy (NYC) x Guarulhos</td><td class="xl47">03A / 03D / 03H</td></tr><!--EndFragment--></tbody></table></div></body></html><!--EndFragment-->
  </body>
  </html>`;
  return (
    <div>
      <h2>PROD-2576 reproduction steps</h2>
      <p>This table came through Ctrl+C from online Office</p>
      <button onClick={() => navigator.clipboard.write([new ClipboardItem({"text/html": payload2})])}>Click to copy</button>
      <p>Step 1: Click on button "Click to copy" to simulate the payload that came from Office(online version)</p>
      <p>Step 2: Paste in the editor and observe the lost style and the layout shift/collapse</p>
      <img src="../public/froala-bug4.png" style={{ maxWidth: "100%", height: "auto" }} />
      <p>How should looklike:</p>
      <img src="../public/froala-bug3.png" style={{ maxWidth: "100%", height: "auto" }} />
      <h2>Expected: no layout shift/collapse</h2>
      <p></p>
    </div>
  );
};

function App() {
  const [firstProblem, setFirstProblem] =useState(true)

  return <div style={{background: '#e0ffff'}}>
    <div style={{marginLeft: 'auto'}}>
      <button onClick={()=>setFirstProblem(p => !p)}>{firstProblem ? 'First bug toggle' : 'Second bug toggle'}</button>
    </div>
      {firstProblem ? <Table1 />:  <Table2 />}
      <Bugs />
      <hr/>

    </div>
}

export default App
