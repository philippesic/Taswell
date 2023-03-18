  import { CharStreams, CommonTokenStream } from 'antlr4ts';
  import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
  import { ParseTree } from 'antlr4ts/tree/ParseTree';
  import { RuleNode } from 'antlr4ts/tree/RuleNode';
  import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
  import { MyGrammarLexer } from './MyGrammarLexer';
  import { CompilationUnitContext, FunctionDeclarationContext, MyGrammarParser } from './MyGrammarParser';
  import { MyGrammarVisitor } from './MyGrammarVisitor';


  const code = "fn add(x: int, y: int) {return x + y;} program";
  const input = CharStreams.fromString(code);
  const lexer = new MyGrammarLexer(input);
  const tokens = new CommonTokenStream(lexer);
  const parser = new MyGrammarParser(tokens);
  const tree = parser.compilationUnit();

  class MyVisitor implements MyGrammarVisitor<string> {
    visitCompilationUnit(ctx: CompilationUnitContext): string {
      return `Found compilation unit: ${ctx.text}`;
    }

    visitFunctionDeclaration(ctx: FunctionDeclarationContext): string {
      return `Found function declaration: ${ctx.identifier().text}`;
    }
    
    visit(tree: ParseTree): string {
      throw new Error('ParseTree Error');
    }

    visitChildren(node: RuleNode): string {
      throw new Error('RuleNode Error');
    }

    visitTerminal(node: TerminalNode): string {
      throw new Error('TerminalNode Error');
    }

    visitErrorNode(node: ErrorNode): string {
      throw new Error('ErrorNode Error');
    }
  }

  const visitor = new MyVisitor();
  console.log(visitor.visit(tree));
