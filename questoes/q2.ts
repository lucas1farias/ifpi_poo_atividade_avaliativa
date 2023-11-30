

/*
Explique por que cada um dos 3 métodos acima possui limitações de uso.
 */

/* ===== Desconsiderar operação =====
Só garante uma certeza parcial do resultado
Ela pode executar uma operação, mas não há garantia de que seu resultado seja sempre correto
Não se sabe se o resultado não irá gerar inconsistências em outros lugares do código
*/

/* ===== Exibir mensagem de erro =====
A nível de terminal é eficiente, mas a informação não é transferível para interfaces gráficas
E mesmo conseguindo transferir via programação, pode ser que não seja custoso de se fazer
*/

/* ===== Retornar um código de erro ======
Para situações mais simples/objetivas, pode ser apropriada, mas em situações mais complexas pode ser confundível
Especialmente se não há uma documentação intuitiva sobre o funcionamento de funções que farão uso disso
Números calculáveis podem acabar sendo confundíveis ou de difícil compreensão se usados em meio a outros dados numéricos
*/
