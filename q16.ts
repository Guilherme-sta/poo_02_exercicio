function testUnreachableCode() {
    let x: number = 10;
    console.log("Início do programa");
    if (x > 5) {
      console.log("x é maior que 5");
      return; // A linha abaixo é inatingível
      console.log("Essa linha é inatingível!");
    }
  }
testUnreachableCode();